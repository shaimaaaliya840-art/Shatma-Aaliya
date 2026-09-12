import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Mail, Phone, MessageCircle, Instagram, Copy, Check } from 'lucide-react';
import { PortfolioData } from '../types';

interface FooterProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const email = portfolioData.contactEmail || 'shaimaaaliya840@gmail.com';
  const instagram = portfolioData.socials?.instagram || 'https://www.instagram.com/shaimaaaliya/';

  const cleanWa = whatsappNo.replace(/\D/g, '');
  const cleanCall = callingNo.replace(/\D/g, '');
  const waLink = `https://wa.me/91${cleanWa}?text=${encodeURIComponent(
    `Hello ${portfolioData.name || 'Shatma Aaliya'}, I am inquiring regarding your couture collection and atelier commissions.`
  )}`;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#140D16]/95 backdrop-blur-md border-t border-[#34203A] text-[#FEF9EF]">
      {/* Upper Footer CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-[#34203A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 space-y-6">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221] flex items-center gap-2">
              <span>// INITIATE DIALOGUE</span>
              <span className="text-[#58111A]">✦</span>
              <span className="text-[#A692A8]">GRADUATING COMMISSIONS & ATELIER</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#FEF9EF] leading-tight">
              Provoking Form, <br className="hidden sm:inline" />
              Weaving Danger.
            </h2>

            <p className="text-sm sm:text-base text-[#A692A8] max-w-xl font-light leading-relaxed">
              Available for select couture commissions, editorial styling, archival textile consultations, and runway design engagements.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              {/* Primary Action Button in Deep Maroon */}
              <button
                id="footer-inquire-btn"
                onClick={onOpenInquiry}
                className="group px-8 py-4 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] hover:border-[#D18221] text-xs font-mono uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(88,17,26,0.6)] transition-all flex items-center gap-3 text-[#FEF9EF]"
                data-cursor="pointer"
              >
                <span>Initiate Commission Dossier</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[#D18221]" />
              </button>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border border-[#34203A] hover:border-[#10B981] text-xs font-mono uppercase tracking-[0.2em] text-[#FEF9EF] hover:text-[#10B981] transition-colors flex items-center gap-2 bg-[#1C131F]"
                data-cursor="pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp: {whatsappNo}</span>
              </a>

              <a
                href={`tel:+91${cleanCall}`}
                className="px-6 py-4 border border-[#34203A] hover:border-[#D18221] text-xs font-mono uppercase tracking-[0.2em] text-[#FEF9EF] hover:text-[#D18221] transition-colors flex items-center gap-2 bg-[#1C131F]"
                data-cursor="pointer"
              >
                <Phone className="w-4 h-4 text-[#D18221]" />
                <span>Call: {callingNo}</span>
              </a>
            </div>

            {/* Direct Quick-Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-2xl font-mono text-xs">
              {/* WhatsApp Quick Box */}
              <div className="p-3.5 bg-[#1C131F]/70 border border-[#34203A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <div>
                    <span className="text-[10px] text-[#A692A8] block uppercase">WhatsApp Direct</span>
                    <span className="text-[#FEF9EF] font-medium">{whatsappNo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(whatsappNo, 'footer-wa')}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF]"
                    title="Copy WhatsApp"
                  >
                    {copiedField === 'footer-wa' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 bg-[#10B981]/20 hover:bg-[#10B981] text-[#10B981] hover:text-[#140D16] text-[10px] uppercase font-bold"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Calling Quick Box */}
              <div className="p-3.5 bg-[#1C131F]/70 border border-[#34203A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#D18221]" />
                  <div>
                    <span className="text-[10px] text-[#A692A8] block uppercase">Calling Line</span>
                    <span className="text-[#FEF9EF] font-medium">{callingNo}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(callingNo, 'footer-call')}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF]"
                    title="Copy Phone"
                  >
                    {copiedField === 'footer-call' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`tel:+91${cleanCall}`}
                    className="px-2.5 py-1 bg-[#140D16] hover:bg-[#D18221] text-[#D18221] hover:text-[#140D16] text-[10px] uppercase font-bold border border-[#34203A]"
                  >
                    Dial
                  </a>
                </div>
              </div>

              {/* Email Quick Box */}
              <div className="p-3.5 bg-[#1C131F]/70 border border-[#34203A] flex items-center justify-between sm:col-span-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Mail className="w-3.5 h-3.5 text-[#D18221] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[10px] text-[#A692A8] block uppercase">Official Transmission</span>
                    <span className="text-[#FEF9EF] font-medium truncate block">{email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleCopy(email, 'footer-email')}
                    className="p-1.5 text-[#A692A8] hover:text-[#FEF9EF]"
                    title="Copy Email"
                  >
                    {copiedField === 'footer-email' ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <a
                    href={`mailto:${email}`}
                    className="px-2.5 py-1 bg-[#140D16] hover:bg-[#58111A] text-[#FEF9EF] border border-[#34203A] hover:border-[#7A1926] text-[10px] uppercase font-bold"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221]">
                LOCATIONS & ATELIER BASES
              </div>
              <div className="space-y-1 text-sm font-serif text-[#FEF9EF]">
                <div>Indus Design School • Ahmedabad</div>
                <div>Neelgar Couture Atelier • Mumbai</div>
                <div className="text-xs font-mono text-[#A692A8] pt-1">Graduating Class of 2023–2027</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221]">
                CURATED ARCHIVES & CHANNELS
              </div>
              <div className="flex flex-col gap-2 text-xs font-mono uppercase tracking-wider text-[#A692A8]">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D18221] transition-colors flex items-center justify-between py-1 border-b border-[#34203A] group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Instagram className="w-3.5 h-3.5 text-[#D18221]" />
                    <span className="text-[#FEF9EF]">Instagram Profile</span>
                  </span>
                  <span className="text-[#A692A8] group-hover:text-[#D18221]">@shaimaaaliya</span>
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#10B981] transition-colors flex items-center justify-between py-1 border-b border-[#34203A] group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#FEF9EF]">WhatsApp</span>
                  </span>
                  <span className="text-[#A692A8] group-hover:text-[#10B981]">{whatsappNo}</span>
                </a>
                <a
                  href={`tel:+91${cleanCall}`}
                  className="hover:text-[#D18221] transition-colors flex items-center justify-between py-1 border-b border-[#34203A] group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#D18221]" />
                    <span className="text-[#FEF9EF]">Calling Line</span>
                  </span>
                  <span className="text-[#A692A8] group-hover:text-[#D18221]">{callingNo}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-[#D18221] transition-colors flex items-center justify-between py-1 border-b border-[#34203A] group"
                  data-cursor="pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#D18221]" />
                    <span className="text-[#FEF9EF]">Direct Email</span>
                  </span>
                  <span className="text-[#A692A8] group-hover:text-[#D18221] truncate max-w-[140px]">{email}</span>
                </a>
                <a
                  href={`https://${portfolioData.socials.arena}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D18221] transition-colors flex items-center justify-between py-1 border-b border-[#34203A]"
                  data-cursor="pointer"
                >
                  <span className="text-[#FEF9EF]">Are.na Archive</span>
                  <span className="text-[#A692A8]">/shatma-aaliya</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scheme Engine Massive Typographic Brand Stamp */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-b border-[#34203A] overflow-hidden select-none opacity-85 hover:opacity-100 transition-opacity">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-normal uppercase tracking-tight text-[#FEF9EF]/15 hover:text-[#D18221]/30 transition-colors whitespace-nowrap text-center">
          SHATMA AALIYA
        </h2>
      </div>

      {/* Lower Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono uppercase tracking-wider text-[#A692A8]">
        <div className="flex items-center gap-4">
          <span className="badge-maroon font-serif font-bold text-xs px-2.5 py-0.5">S·A</span>
          <span>© 2026 {portfolioData.name || 'SHATMA AALIYA'}</span>
          <span className="hidden md:inline">• INDUS DESIGN SCHOOL '27</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[#D18221]">SCHEME ENGINE ARCHITECTURE // COUTURE</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#FEF9EF] hover:text-[#D18221] transition-colors"
            data-cursor="pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D18221]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
