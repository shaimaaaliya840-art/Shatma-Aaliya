import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle, 
  Copy, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';
import { PortfolioData } from '../types';

interface FloatingContactDockProps {
  portfolioData: PortfolioData;
  onOpenInquiry?: () => void;
}

export const FloatingContactDock: React.FC<FloatingContactDockProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const name = portfolioData.name || 'Shatma Aaliya';
  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagramUrl = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Raw cleaned numbers for URLs
  const cleanWa = whatsappNo.replace(/\D/g, '');
  const cleanCall = callingNo.replace(/\D/g, '');
  const waLink = `https://wa.me/91${cleanWa}?text=${encodeURIComponent(
    `Hello ${name}, I am reaching out regarding your fashion design portfolio and atelier commissions.`
  )}`;

  return (
    <>
      {/* 1. Continuous Top / Floating Scrolling Contact Marquee Strip */}
      <div 
        id="persistent-contact-marquee"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#140D16]/95 backdrop-blur-md border-t border-[#34203A] shadow-[0_-10px_30px_rgba(0,0,0,0.85)] text-[#FEF9EF] select-none"
      >
        <div className="flex items-center justify-between px-3 sm:px-6 py-2">
          {/* Scrolling Ticker Line */}
          <div className="flex items-center gap-3 overflow-hidden text-[11px] font-mono tracking-wider text-[#FEF9EF]/90">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="shrink-0 text-[#D18221] font-semibold uppercase tracking-widest hidden sm:inline">
              [CONTACT SHATMA AALIYA]
            </span>

            {/* Quick clickables on the bottom bar */}
            <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap text-xs">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#10B981] transition-colors group"
                title="Chat on WhatsApp: 8404916721"
                data-cursor="pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#A692A8] hidden md:inline font-mono">WA:</span>
                <span className="font-mono text-[#FEF9EF] group-hover:text-[#10B981]">{whatsappNo}</span>
              </a>

              <span className="text-[#34203A]">/</span>

              <a
                href={`tel:+91${cleanCall}`}
                className="flex items-center gap-1.5 hover:text-[#D18221] transition-colors group"
                title="Call Shatma Aaliya: 6351283152"
                data-cursor="pointer"
              >
                <Phone className="w-3.5 h-3.5 text-[#D18221]" />
                <span className="text-[#A692A8] hidden md:inline font-mono">CALL:</span>
                <span className="font-mono text-[#FEF9EF] group-hover:text-[#D18221]">{callingNo}</span>
              </a>

              <span className="text-[#34203A]">/</span>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1.5 hover:text-[#D18221] transition-colors group"
                title={`Email: ${email}`}
                data-cursor="pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#D18221]" />
                <span className="font-mono text-[#FEF9EF] group-hover:text-[#D18221] truncate max-w-[170px] sm:max-w-none">
                  {email}
                </span>
              </a>

              <span className="text-[#34203A] hidden lg:inline">/</span>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden lg:flex items-center gap-1.5 hover:text-[#D18221] transition-colors group"
                title="Instagram Profile"
                data-cursor="pointer"
              >
                <Instagram className="w-3.5 h-3.5 text-[#D18221]" />
                <span className="font-mono text-[#FEF9EF] group-hover:text-[#D18221]">@shaimaaaliya</span>
              </a>
            </div>
          </div>

          {/* Expand / Detailed Card Trigger */}
          <div className="flex items-center gap-2 pl-3 shrink-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              id="expand-contact-dock-btn"
              className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#1C131F] border border-[#34203A] hover:border-[#D18221] text-[#FEF9EF] transition-all"
              data-cursor="pointer"
            >
              <span>{isExpanded ? 'Minimize' : 'Full Card'}</span>
              {isExpanded ? <ChevronDown className="w-3 h-3 text-[#D18221]" /> : <ChevronUp className="w-3 h-3 text-[#D18221]" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Line under the persistent bottom bar */}
        <div className="w-full h-[2px] bg-[#34203A]/60">
          <div 
            className="h-full bg-gradient-to-r from-[#58111A] via-[#D18221] to-[#58111A] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* 2. Floating Contact Card */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-14 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] bg-[#140D16] border border-[#34203A] shadow-[0_20px_60px_rgba(0,0,0,0.95)] p-5 sm:p-6 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-[#34203A] pb-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#D18221]">
                  <span className="w-2 h-2 bg-[#58111A] border border-[#7A1926]" />
                  <span>DIRECT ATELIER DOSSIER</span>
                </div>
                <h3 className="text-xl font-serif text-[#FEF9EF] pt-1">
                  {name}
                </h3>
                <p className="text-xs text-[#A692A8] font-mono tracking-wider pt-0.5">
                  Indus Design School · Ahmedabad & Mumbai
                </p>
              </div>

              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 text-[#A692A8] hover:text-[#FEF9EF] transition-colors"
                aria-label="Close Contact Card"
                data-cursor="pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Channels Grid */}
            <div className="space-y-3 font-mono text-xs">
              {/* WhatsApp Item */}
              <div className="p-3 bg-[#1C131F]/70 border border-[#34203A] hover:border-[#10B981]/60 transition-colors flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-none bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#A692A8] uppercase tracking-wider">
                      WhatsApp Instant Chat
                    </div>
                    <div className="text-[#FEF9EF] font-medium tracking-wider truncate">
                      {whatsappNo}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(whatsappNo, 'wa', e)}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF] border border-[#34203A] hover:border-[#D18221] transition-colors"
                    title="Copy WhatsApp Number"
                    data-cursor="pointer"
                  >
                    {copiedField === 'wa' ? (
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 bg-[#10B981]/20 hover:bg-[#10B981] text-[#10B981] hover:text-[#140D16] border border-[#10B981]/50 text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    <span>Message</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Calling Number Item */}
              <div className="p-3 bg-[#1C131F]/70 border border-[#34203A] hover:border-[#D18221]/60 transition-colors flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-none bg-[#D18221]/15 border border-[#D18221]/40 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#D18221]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#A692A8] uppercase tracking-wider">
                      Direct Atelier Line
                    </div>
                    <div className="text-[#FEF9EF] font-medium tracking-wider truncate">
                      {callingNo}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(callingNo, 'call', e)}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF] border border-[#34203A] hover:border-[#D18221] transition-colors"
                    title="Copy Calling Number"
                    data-cursor="pointer"
                  >
                    {copiedField === 'call' ? (
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`tel:+91${cleanCall}`}
                    className="px-2.5 py-1 bg-[#140D16] hover:bg-[#D18221] text-[#D18221] hover:text-[#140D16] border border-[#D18221]/60 text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    <span>Call</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email Item */}
              <div className="p-3 bg-[#1C131F]/70 border border-[#34203A] hover:border-[#58111A]/60 transition-colors flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-none bg-[#58111A]/20 border border-[#7A1926] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-[#FEF9EF]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#A692A8] uppercase tracking-wider">
                      Transmission Email
                    </div>
                    <div className="text-[#FEF9EF] font-medium tracking-wider truncate text-[11px]">
                      {email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={(e) => handleCopy(email, 'email', e)}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF] border border-[#34203A] hover:border-[#D18221] transition-colors"
                    title="Copy Email Address"
                    data-cursor="pointer"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-2.5 py-1 bg-[#140D16] hover:bg-[#58111A] text-[#FEF9EF] border border-[#34203A] hover:border-[#7A1926] text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    <span>Email</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Instagram Item */}
              <div className="p-3 bg-[#1C131F]/70 border border-[#34203A] hover:border-[#D18221]/60 transition-colors flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-none bg-[#58111A]/30 border border-[#7A1926] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4 text-[#D18221]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] text-[#A692A8] uppercase tracking-wider">
                      Editorial Instagram
                    </div>
                    <div className="text-[#FEF9EF] font-medium tracking-wider truncate">
                      @shaimaaaliya
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 bg-[#140D16] hover:bg-[#58111A] text-[#FEF9EF] hover:border-[#7A1926] border border-[#34203A] text-[11px] uppercase tracking-wider font-semibold transition-all flex items-center gap-1"
                    data-cursor="pointer"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Commission Button in Deep Maroon */}
            {onOpenInquiry && (
              <div className="mt-4 pt-4 border-t border-[#34203A] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#D18221]">
                  GRADUATING COMMISSIONS OPEN
                </span>
                <button
                  onClick={() => {
                    setIsExpanded(false);
                    onOpenInquiry();
                  }}
                  className="px-4 py-2 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] text-[#FEF9EF] text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(88,17,26,0.6)] transition-all"
                  data-cursor="pointer"
                >
                  Open Commission Brief
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
