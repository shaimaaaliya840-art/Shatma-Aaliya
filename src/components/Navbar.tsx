import React, { useState, useEffect } from 'react';
import { Menu, X, Sliders, ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { PortfolioData } from '../types';

interface NavbarProps {
  portfolioData: PortfolioData;
  onOpenCustomizer: () => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  portfolioData,
  onOpenCustomizer,
  onOpenInquiry
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState('');

  const whatsappNo = portfolioData.whatsappNumber || '8404916721';
  const callingNo = portfolioData.callingNumber || '6351283152';
  const cleanWa = whatsappNo.replace(/\D/g, '');
  const cleanCall = callingNo.replace(/\D/g, '');
  const waLink = `https://wa.me/91${cleanWa}?text=${encodeURIComponent(
    `Hello ${portfolioData.name || 'Shatma Aaliya'}, I am inquiring regarding your couture collection.`
  )}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setIstTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: 'Featured', href: '#featured' },
    { label: 'Dossiers', href: '#works' },
    { label: 'Neelgar Archive', href: '#neelgar-experience' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Trajectory', href: '#experience' }
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#140D16]/95 backdrop-blur-md border-b border-[#34203A] py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Scheme Engine Split Nav - Left Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-[0.22em] text-[#FEF9EF]/80">
          <a
            href="#spotlight"
            className="transition-colors duration-200 hover:text-[#D18221] py-1 relative group"
            data-cursor="pointer"
          >
            <span>Spotlight</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D18221] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#works"
            className="transition-colors duration-200 hover:text-[#D18221] py-1 relative group"
            data-cursor="pointer"
          >
            <span>Works</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D18221] transition-all duration-200 group-hover:w-full" />
          </a>
          <a
            href="#neelgar-experience"
            className="transition-colors duration-200 hover:text-[#D18221] py-1 relative group"
            data-cursor="pointer"
          >
            <span>Atelier Archive</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D18221] transition-all duration-200 group-hover:w-full" />
          </a>
        </nav>

        {/* Center Brand Identity (Scheme Engine Architectural Aesthetic) */}
        <a
          href="#"
          id="nav-logo"
          className="group flex items-center gap-3 tracking-wider transition-all duration-200"
          data-cursor="pointer"
        >
          {/* Important Deep Maroon Monogram Badge */}
          <span className="w-8 h-8 rounded-none bg-[#58111A] border border-[#7A1926] group-hover:border-[#D18221] flex items-center justify-center text-xs font-serif transition-all duration-200 shadow-[0_0_12px_rgba(88,17,26,0.5)]">
            <span className="text-[#FEF9EF] font-bold tracking-normal">S</span>
            <span className="text-[#D18221] px-0.5">·</span>
            <span className="text-[#FEF9EF] font-bold tracking-normal">A</span>
          </span>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] uppercase text-xs md:text-sm text-[#FEF9EF] group-hover:text-[#D18221] transition-colors font-medium">
              {portfolioData.name || 'SHATMA AALIYA'}
            </span>
            <span className="text-[8.5px] tracking-[0.28em] text-[#D18221] uppercase font-mono">
              COUTURE // INDUS '27
            </span>
          </div>
        </a>

        {/* Scheme Engine Split Nav - Right Links & Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono uppercase tracking-[0.22em] text-[#FEF9EF]/80 pr-2">
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-[#D18221] py-1 relative group"
              data-cursor="pointer"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D18221] transition-all duration-200 group-hover:w-full" />
            </a>
            <a
              href="#footer"
              className="transition-colors duration-200 hover:text-[#D18221] py-1 relative group"
              data-cursor="pointer"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D18221] transition-all duration-200 group-hover:w-full" />
            </a>
          </nav>

          <div className="text-right border-l border-[#34203A] pl-4 hidden xl:block">
            <div className="text-[9.5px] tracking-[0.2em] text-[#A692A8] uppercase font-mono">AHMEDABAD / IST</div>
            <div className="text-xs font-mono text-[#D18221] tabular-nums tracking-wider">{istTime || '18:45:00'}</div>
          </div>

          {/* Quick Direct WhatsApp Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-1.5 border border-[#34203A] hover:border-[#10B981] bg-[#140D16]/80 text-xs font-mono text-[#FEF9EF] hover:text-[#10B981] transition-all"
            title={`WhatsApp: ${whatsappNo}`}
            data-cursor="pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="hidden md:inline text-[11px] font-mono">{whatsappNo}</span>
          </a>

          {/* Quick Customizer Toggle Pill */}
          <button
            id="open-customizer-btn"
            onClick={onOpenCustomizer}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono tracking-wider uppercase bg-[#140D16]/80 text-[#A692A8] hover:text-[#FEF9EF] hover:border-[#D18221] border border-[#34203A] transition-all duration-200"
            title="Edit Portfolio Specifics"
            data-cursor="pointer"
          >
            <Sliders className="w-3 h-3 text-[#D18221]" />
            <span className="hidden lg:inline">Tune</span>
          </button>

          {/* Primary Action Button in Deep Maroon (#58111A) */}
          <button
            id="nav-inquire-btn"
            onClick={onOpenInquiry}
            className="group flex items-center gap-2 px-4 py-2 rounded-none text-xs font-mono uppercase tracking-[0.2em] bg-[#58111A] hover:bg-[#7A1926] text-[#FEF9EF] border border-[#7A1926] hover:border-[#D18221] shadow-[0_0_15px_rgba(88,17,26,0.6)] transition-all duration-200"
            data-cursor="pointer"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D18221] group-hover:text-[#FEF9EF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex sm:hidden items-center gap-2.5">
          <button
            id="mobile-customizer-btn"
            onClick={onOpenCustomizer}
            className="p-2 text-[#D18221] hover:text-[#FEF9EF]"
            title="Customize"
          >
            <Sliders className="w-4 h-4 text-[#D18221]" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#FEF9EF] hover:text-[#D18221] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#140D16] border-b border-[#34203A] px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-4 text-xs font-mono uppercase tracking-[0.22em] text-[#FEF9EF]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#34203A]/60 hover:text-[#D18221] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:+91${cleanCall}`}
                className="p-2.5 bg-[#1C131F] border border-[#34203A] text-[#FEF9EF] hover:text-[#D18221] flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#D18221]" />
                <span>Call Line</span>
              </a>
            </div>

            <div className="text-xs text-[#A692A8] tracking-widest uppercase">
              AHMEDABAD / IST: <span className="font-mono text-[#D18221]">{istTime}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 bg-[#58111A] border border-[#7A1926] hover:bg-[#7A1926] text-xs uppercase tracking-[0.2em] font-medium text-center text-[#FEF9EF] shadow-[0_0_15px_rgba(88,17,26,0.6)]"
            >
              Initiate Commission Dossier
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
