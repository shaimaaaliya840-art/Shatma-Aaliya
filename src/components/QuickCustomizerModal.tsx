import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, RotateCcw, Check, Sliders, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';
import { initialPortfolioData } from '../data/portfolioData';

interface QuickCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
  onSave: (newData: PortfolioData) => void;
}

export const QuickCustomizerModal: React.FC<QuickCustomizerModalProps> = ({
  isOpen,
  onClose,
  portfolioData,
  onSave
}) => {
  const [formData, setFormData] = useState<PortfolioData>(portfolioData);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    setFormData(initialPortfolioData);
    onSave(initialPortfolioData);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#110D0B]/80 backdrop-blur-sm"
        />

        {/* Slide-in Drawer from Right */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="relative w-full max-w-xl bg-[#140D16] border-l border-[#34203A] h-full z-10 shadow-2xl flex flex-col"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-[#34203A] flex items-center justify-between bg-[#1C131F]">
            <div className="flex items-center gap-3">
              <Sliders className="w-4 h-4 text-[#D18221]" />
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#58111A]" />
                  PORTFOLIO BRACKET CUSTOMIZER
                </div>
                <h3 className="text-lg font-serif text-[#FEF9EF]">
                  Personalize Your Specifics
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-[#D18221] hover:text-[#FEF9EF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Palette Constraint Notice */}
          <div className="px-6 py-3 bg-[#1C131F]/50 border-b border-[#34203A] flex items-center gap-3 text-xs text-[#D18221]">
            <span className="w-2.5 h-2.5 rounded-none bg-[#58111A] border border-[#7A1926] shrink-0" />
            <span>
              <strong className="text-[#FEF9EF]">Deep Maroon (#58111A) active:</strong> Highlighted on key action buttons, monogram, active category pills, and hero callout.
            </span>
          </div>

          {/* Scrollable Form Body */}
          <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Core Identity */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D18221] border-b border-[#34203A] pb-2">
                1. Identity & Locations
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Name [Your Name]
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-serif"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Bases [City / Cities]
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#D18221]">
                  Professional Title [Role Title]
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono"
                />
              </div>
            </div>

            {/* Hero Moment & Tagline */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D18221] border-b border-[#34203A] pb-2">
                2. Hero Statement & Deep Maroon Highlight
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#D18221] flex items-center justify-between">
                  <span>The ONE Hero Moment Highlight (Deep Maroon)</span>
                  <span className="text-[#FEF9EF]">#58111A</span>
                </label>
                <input
                  type="text"
                  value={formData.heroHighlight}
                  onChange={(e) => setFormData({ ...formData, heroHighlight: e.target.value })}
                  className="w-full bg-[#58111A]/30 border border-[#7A1926] px-3 py-2 text-sm text-[#FEF9EF] font-serif italic outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#D18221]">
                  Hero Secondary Narrative
                </label>
                <textarea
                  rows={2}
                  value={formData.heroSecondary}
                  onChange={(e) => setFormData({ ...formData, heroSecondary: e.target.value })}
                  className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none resize-none font-light"
                />
              </div>
            </div>

            {/* Neelgar Work Experience */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D18221] border-b border-[#34203A] pb-2">
                3. Neelgar Work Experience Specifics
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Neelgar Role Title
                  </label>
                  <input
                    type="text"
                    value={formData.neelgarHighlight.role}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        neelgarHighlight: {
                          ...formData.neelgarHighlight,
                          role: e.target.value
                        }
                      })
                    }
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Tenure Period
                  </label>
                  <input
                    type="text"
                    value={formData.neelgarHighlight.period}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        neelgarHighlight: {
                          ...formData.neelgarHighlight,
                          period: e.target.value
                        }
                      })
                    }
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#D18221]">
                  Neelgar Archive Summary
                </label>
                <textarea
                  rows={3}
                  value={formData.neelgarHighlight.summary}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      neelgarHighlight: {
                        ...formData.neelgarHighlight,
                        summary: e.target.value
                      }
                    })
                  }
                  className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none resize-none font-light"
                />
              </div>
            </div>

            {/* Pull-Quote */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D18221] border-b border-[#34203A] pb-2">
                4. The Manifesto Pull-Quote
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase text-[#D18221]">
                  Pull-Quote Text
                </label>
                <textarea
                  rows={2}
                  value={formData.pullQuote.quote}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pullQuote: { ...formData.pullQuote, quote: e.target.value }
                    })
                  }
                  className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] font-serif italic outline-none resize-none"
                />
              </div>
            </div>

            {/* Direct Contact Coordinates */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D18221] border-b border-[#34203A] pb-2">
                5. Direct Contact Coordinates
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={formData.whatsappNumber || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsappNumber: e.target.value })
                    }
                    placeholder="8404916721"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Calling Line
                  </label>
                  <input
                    type="text"
                    value={formData.callingNumber || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, callingNumber: e.target.value })
                    }
                    placeholder="6351283152"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={formData.contactEmail || ''}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                    placeholder="shaimaaaliya840@gmail.com"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase text-[#D18221]">
                    Instagram URL
                  </label>
                  <input
                    type="text"
                    value={formData.socials?.instagram || ''}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        socials: { ...formData.socials, instagram: e.target.value }
                      })
                    }
                    placeholder="https://www.instagram.com/shaimaaaliya/"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3 py-2 text-sm text-[#FEF9EF] outline-none font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Drawer Footer Actions */}
          <div className="p-6 border-t border-[#34203A] bg-[#1C131F] flex items-center justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D18221] hover:text-[#FEF9EF] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] shadow-[0_0_15px_rgba(88,17,26,0.4)] text-xs font-mono uppercase tracking-widest text-[#FEF9EF] transition-all hover:scale-102"
              data-cursor="pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Dossier Updated</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#D18221]" />
                  <span>Apply Changes</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
