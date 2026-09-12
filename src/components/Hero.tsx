import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ChevronRight, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';
import { AnimatedHeroTitle } from './AnimatedHeroTitle';
import { HeroAudioCapsule } from './HeroAudioCapsule';

interface HeroProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ portfolioData, onOpenInquiry }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#34203A]"
    >
      {/* Top Editorial Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-[0.25em] text-[#A692A8] border-b border-[#34203A] pb-6"
      >
        <div className="flex items-center gap-3">
          {/* Important Deep Maroon Live Pulse Marker */}
          <span className="w-2.5 h-2.5 rounded-full bg-[#58111A] border border-[#7A1926] animate-ping" />
          <span className="text-[#FEF9EF] font-mono">{portfolioData.availability || 'INDUS DESIGN SCHOOL · CLASS OF 2023–2027'}</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden sm:inline text-[#D18221]">{portfolioData.city || 'AHMEDABAD & MUMBAI'}</span>
          <span className="text-[#A692A8] font-mono">[ 23°01'N 72°35'E ]</span>
        </div>
      </motion.div>

      {/* Main Editorial Statement with Preserved Animated Hero Title System */}
      <div className="my-auto py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-[#D18221] font-mono flex items-center gap-2">
            <span className="text-[#58111A] font-bold">//</span>
            <span>{portfolioData.title || 'FASHION DESIGNER · INDUS DESIGN SCHOOL 2023–2027'}</span>
          </div>

          {/* Animated Hero Title System (Completely Preserved: slot roll + interactive tilt letters + physics) */}
          <AnimatedHeroTitle />

          <p className="text-base sm:text-lg text-[#FEF9EF]/90 max-w-2xl font-light leading-relaxed pt-1">
            {portfolioData.heroSecondary ||
              'Graduating fashion design student at Indus Design School (Class of 2023–2027). Interrogating the razor-sharp tension between seductive femme fatale architecture, subversive menswear, and the generational alchemy of Neelgar couture.'}
          </p>

          {/* Action CTAs: Deep Maroon on Primary Explore & Scheme Engine Underline */}
          <div className="flex flex-wrap items-center gap-5 pt-3">
            <a
              href="#spotlight"
              id="hero-explore-works"
              className="group px-7 py-3.5 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] hover:border-[#D18221] shadow-[0_0_20px_rgba(88,17,26,0.6)] text-xs font-mono uppercase tracking-[0.2em] text-[#FEF9EF] transition-all duration-200 flex items-center gap-3"
              data-cursor="pointer"
              data-cursor-text="SPOTLIGHT"
            >
              <span>Explore Spotlight Archive</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#D18221] group-hover:text-[#FEF9EF]" />
            </a>

            <a
              href="#neelgar-experience"
              id="hero-neelgar-link"
              className="px-6 py-3.5 border border-[#34203A] hover:border-[#D18221] text-xs font-mono uppercase tracking-[0.2em] text-[#FEF9EF]/80 hover:text-[#D18221] transition-colors duration-200 flex items-center gap-2 bg-[#1C131F]/50"
              data-cursor="pointer"
            >
              <span>Neelgar Couture Tenure</span>
              <span className="text-[10px] font-mono text-[#D18221]">[2024—PRES]</span>
            </a>
          </div>

          {/* Interactive Vintage Couture Audio Capsule (Completely Preserved) */}
          <div className="pt-2 max-w-xl">
            <HeroAudioCapsule />
          </div>
        </motion.div>

        {/* Right Editorial Vignette / Focus Card with Scheme Engine Corner Crop Marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col justify-end"
        >
          <div className="relative group border border-[#34203A] hover:border-[#7A1926] p-5 bg-[#1C131F]/60 backdrop-blur-md transition-all duration-300 shadow-2xl">
            {/* Scheme Engine Pulsing Corner Highlights */}
            <div className="corner-highlight top-left maroon animate-scheme-pulse" />
            <div className="corner-highlight top-right maroon animate-scheme-pulse" />
            <div className="corner-highlight bottom-left maroon animate-scheme-pulse" />
            <div className="corner-highlight bottom-right maroon animate-scheme-pulse" />

            <div className="aspect-[4/5] overflow-hidden relative mb-4 bg-[#140D16] border border-[#34203A]/60">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop"
                alt="Editorial Couture Archive"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D16] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.2em] font-mono uppercase text-[#D18221]">
                <span>NEELGAR ARCHIVE</span>
                <span>FIG. 01 — NOCTURNE</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 text-left">
              <div className="flex items-center justify-between text-[11px] tracking-widest text-[#A692A8] uppercase font-mono">
                <span>GRADUATION THESIS</span>
                {/* Deep Maroon Badge on Important Status */}
                <span className="badge-maroon px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider">
                  INDUS '27
                </span>
              </div>
              <p className="font-serif text-base text-[#FEF9EF] font-normal leading-snug">
                "Nocturne Couture: Silhouettes in Obsidian & Handloom Silk"
              </p>
              <div className="text-[11px] text-[#A692A8] pt-1 font-light">
                Directing archival Indian textiles into predatory, high-contrast femme fatale mythologies.
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Coordinates & Anchor Prompt */}
      <div className="pt-6 border-t border-[#34203A] flex flex-wrap items-center justify-between gap-6 text-xs text-[#A692A8] uppercase tracking-[0.2em] font-mono">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
          <div>
            <div className="text-[#FEF9EF] font-serif text-lg font-normal">Indus '27</div>
            <div className="text-[10px] text-[#D18221] font-mono pt-0.5">Degree Candidate</div>
          </div>
          <div>
            <div className="text-[#FEF9EF] font-serif text-lg font-normal">Neelgar</div>
            <div className="text-[10px] text-[#D18221] font-mono pt-0.5">Couture Apprentice</div>
          </div>
          <div className="hidden sm:block">
            <div className="text-[#FEF9EF] font-serif text-lg font-normal">06+ Works</div>
            <div className="text-[10px] text-[#D18221] font-mono pt-0.5">Curated Dossiers</div>
          </div>
        </div>

        <a
          href="#spotlight"
          className="flex items-center gap-2 text-[#D18221] hover:text-[#FEF9EF] transition-colors py-2"
          data-cursor="pointer"
        >
          <span>Scroll To Spotlight</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
