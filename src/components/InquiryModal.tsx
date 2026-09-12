import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle, MessageCircle, Phone, Mail, Instagram } from 'lucide-react';
import { PortfolioData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  portfolioData: PortfolioData;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  portfolioData
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    commissionType: 'Haute Couture Silhouette',
    timeline: 'SS26 Runway',
    message: ''
  });

  if (!isOpen) return null;

  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagramUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';
  const cleanWa = whatsappNo.replace(/\D/g, '');
  const cleanCall = callingNo.replace(/\D/g, '');
  const waLink = `https://wa.me/91${cleanWa}?text=${encodeURIComponent(
    `Hello ${portfolioData.name || 'Shatma Aaliya'}, I am inquiring regarding your couture collection and commissions.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C070D]/90 backdrop-blur-md"
        />

        {/* Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          className="relative w-full max-w-2xl bg-[#140D16] border border-[#34203A] p-6 sm:p-10 z-10 shadow-2xl space-y-6 scheme-frame"
        >
          <span className="corner-highlight top-left" />
          <span className="corner-highlight top-right" />
          <span className="corner-highlight bottom-left" />
          <span className="corner-highlight bottom-right" />

          <div className="flex items-center justify-between border-b border-[#34203A] pb-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221] flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#58111A]" />
                COMMISSION DOSSIER
              </div>
              <h3 className="text-2xl font-serif text-[#FEF9EF] pt-1">
                Initiate Dialogue with {portfolioData.name || 'Shatma Aaliya'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-[#D18221] hover:text-[#FEF9EF] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Instant Connect Option Strip */}
          <div className="bg-[#1C131F] border border-[#34203A] p-3.5 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D18221] flex items-center justify-between">
              <span>DIRECT CHANNELS (IMMEDIATE RESPONSE)</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block" /> Available
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#10B981]/15 hover:bg-[#10B981] border border-[#10B981]/40 text-[#10B981] hover:text-[#140D16] flex items-center justify-center gap-1.5 transition-colors font-semibold"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="text-[11px]">{whatsappNo}</span>
              </a>

              <a
                href={`tel:+91${cleanCall}`}
                className="p-2 bg-[#140D16] hover:bg-[#D18221] border border-[#34203A] hover:border-[#D18221] text-[#FEF9EF] hover:text-[#140D16] flex items-center justify-center gap-1.5 transition-colors"
                title="Call Direct"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold">{callingNo}</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="p-2 bg-[#140D16] hover:bg-[#58111A] border border-[#34203A] hover:border-[#7A1926] text-[#FEF9EF] flex items-center justify-center gap-1.5 transition-colors"
                title={`Email: ${email}`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="text-[11px]">Email Atelier</span>
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#140D16] hover:bg-[#58111A] border border-[#34203A] hover:border-[#7A1926] text-[#FEF9EF] flex items-center justify-center gap-1.5 transition-colors"
                title="Instagram Profile"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span className="text-[11px]">Instagram</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-none border border-[#7A1926] text-[#D18221] flex items-center justify-center mx-auto bg-[#58111A]/40">
                <CheckCircle className="w-6 h-6 text-[#FEF9EF]" />
              </div>
              <h4 className="text-2xl font-serif text-[#FEF9EF]">
                Dialogue Initiated
              </h4>
              <p className="text-sm text-[#FEF9EF]/80 max-w-md mx-auto font-light leading-relaxed">
                Your transmission has reached the atelier. Shatma Aaliya will review the commission parameters and respond within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-6 py-2.5 bg-[#58111A] border border-[#7A1926] hover:bg-[#7A1926] text-xs font-mono uppercase tracking-widest text-[#FEF9EF] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#D18221]">
                    Principal / Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rohini Sen"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3.5 py-2.5 text-sm text-[#FEF9EF] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#D18221]">
                    Direct Transmission (Email) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="direct@maison.com"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3.5 py-2.5 text-sm text-[#FEF9EF] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#D18221]">
                    Maison / Label / Entity
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Maison, Production, or Client"
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3.5 py-2.5 text-sm text-[#FEF9EF] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono uppercase tracking-widest text-[#D18221]">
                    Commission Scope
                  </label>
                  <select
                    value={formData.commissionType}
                    onChange={(e) => setFormData({ ...formData, commissionType: e.target.value })}
                    className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3.5 py-2.5 text-sm text-[#FEF9EF] outline-none transition-colors"
                  >
                    <option value="Haute Couture Silhouette">Haute Couture Silhouette</option>
                    <option value="Femme Fatale Corsetry">Femme Fatale Corsetry</option>
                    <option value="Bespoke Menswear Drape">Bespoke Menswear Drape</option>
                    <option value="Indian Handloom & Zardozi Archive">Indian Handloom & Zardozi Archive</option>
                    <option value="Runway Show Styling">Runway Show Styling</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono uppercase tracking-widest text-[#D18221]">
                  Brief & Aesthetic Intent
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the silhouette requirements, textile direction, and seasonal timeline..."
                  className="w-full bg-[#1C131F] border border-[#34203A] focus:border-[#58111A] px-3.5 py-2.5 text-sm text-[#FEF9EF] outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#D18221] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#58111A]" />
                  CONFIDENTIAL ATELIER PRIVACY
                </span>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] shadow-[0_0_15px_rgba(88,17,26,0.4)] text-xs font-mono uppercase tracking-widest text-[#FEF9EF] transition-all flex items-center gap-2 hover:scale-102"
                  data-cursor="pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Commission Brief</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
