import React from 'react';
import { motion } from 'motion/react';
import { PortfolioData, ExperienceItem } from '../types';
import { experienceTimeline, editorialTenets } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

interface AboutAndExperienceProps {
  portfolioData: PortfolioData;
  onOpenInquiry: () => void;
}

export const AboutAndExperience: React.FC<AboutAndExperienceProps> = ({
  portfolioData,
  onOpenInquiry
}) => {
  const neelgar = portfolioData.neelgarHighlight;

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#34203A] space-y-28">
      {/* 1. About / Personal Editorial Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-6">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221] flex items-center gap-2">
            <span>// ABOUT & PERSONAL AESTHETIC</span>
            <span className="text-[#58111A]">✦</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FEF9EF] leading-tight">
            {portfolioData.bioHeadline}
          </h2>

          <div className="relative aspect-[3/4] w-full max-w-md overflow-visible border border-[#34203A] bg-[#140D16] shadow-2xl group">
            {/* Scheme Engine Corner Highlights */}
            <div className="corner-highlight top-left amber" />
            <div className="corner-highlight top-right amber" />
            <div className="corner-highlight bottom-left amber" />
            <div className="corner-highlight bottom-right amber" />

            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
              alt="Shatma Aaliya Portrait"
              className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140D16] via-transparent to-transparent opacity-80 pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#D18221]">
              <span>SHATMA AALIYA</span>
              <span className="badge-maroon px-2 py-0.5 text-[9px]">INDUS DESIGN SCHOOL</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8 lg:pt-14">
          <div className="space-y-6 text-base sm:text-lg text-[#FEF9EF]/90 font-light leading-relaxed">
            {portfolioData.bioParagraphs.map((p, idx) => (
              <p key={idx} className="border-l border-[#58111A] pl-6 text-[#A692A8] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Editorial Tenets */}
          <div className="pt-8 border-t border-[#34203A]">
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221] mb-6">
              THE THREE ATELIER TENETS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {editorialTenets.map((tenet) => (
                <div key={tenet.number} className="bg-[#1C131F]/50 border border-[#34203A] p-5 space-y-2 backdrop-blur-sm shadow-lg hover:border-[#7A1926] transition-colors">
                  <div className="text-xs font-mono text-[#D18221] font-bold">{tenet.number}</div>
                  <div className="text-base font-serif text-[#FEF9EF]">{tenet.title}</div>
                  <div className="text-[10px] font-mono uppercase text-[#A692A8]">{tenet.subtitle}</div>
                  <p className="text-xs text-[#A692A8] leading-normal pt-2 font-light">
                    {tenet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Neelgar Work Experience Feature Highlight */}
      <div id="neelgar-experience" className="bg-[#1C131F]/60 border border-[#7A1926] p-8 sm:p-12 relative overflow-hidden backdrop-blur-md shadow-2xl">
        {/* Scoped decorative watermark */}
        <div className="absolute -right-10 -bottom-10 text-9xl font-serif text-[#140D16] select-none pointer-events-none opacity-40 font-bold tracking-widest">
          NEELGAR
        </div>

        <div className="relative z-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#34203A] pb-6">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#D18221]">
                <span className="w-2.5 h-2.5 bg-[#58111A] border border-[#7A1926] animate-pulse" />
                <span>ATELIER TENURE // 2024—PRESENT</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#FEF9EF] pt-2">
                Neelgar Atelier & Couture
              </h3>
              <div className="text-sm font-mono tracking-widest text-[#D18221] uppercase pt-1">
                {neelgar.role} • Ahmedabad & Mumbai
              </div>
            </div>

            <div className="badge-maroon px-4 py-2 text-xs font-mono tracking-widest uppercase self-start md:self-auto font-bold shadow-[0_0_15px_rgba(88,17,26,0.6)]">
              HAUTE COUTURE ARCHIVE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-lg sm:text-xl font-serif text-[#FEF9EF] italic">
                "{neelgar.tagline}"
              </div>
              <p className="text-sm text-[#A692A8] leading-relaxed font-light">
                {neelgar.summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221]">
                  KEY DELIVERABLES & MONUMENTS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {neelgar.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-[#140D16]/80 border border-[#34203A]">
                      <CheckCircle2 className="w-4 h-4 text-[#D18221] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#FEF9EF] font-light leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] overflow-hidden border border-[#34203A] bg-[#140D16] shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
                  alt="Neelgar Couture Detail"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden border border-[#34203A] bg-[#140D16] mt-6 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                  alt="Neelgar Runway Monograph"
                  className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Complete Chronological Career Timeline */}
      <div id="experience" className="space-y-8">
        <div className="flex items-center justify-between border-b border-[#34203A] pb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221]">
              CURRICULUM VITAE
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#FEF9EF] pt-1">
              Professional & Academic Trajectory
            </h3>
          </div>
          <span className="text-xs font-mono text-[#A692A8]">2023 — 2027</span>
        </div>

        <div className="space-y-6">
          {experienceTimeline.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 border transition-all backdrop-blur-sm ${
                item.isNeelgar
                  ? 'bg-[#1C131F]/80 border-[#7A1926] shadow-[0_0_20px_rgba(88,17,26,0.3)]'
                  : 'bg-[#1C131F]/40 border-[#34203A]'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3">
                <div className="flex items-center gap-3">
                  <h4 className="text-xl font-serif text-[#FEF9EF]">{item.company}</h4>
                  {item.isNeelgar && (
                    <span className="badge-maroon text-[10px] font-mono px-2 py-0.5 font-bold">
                      COUTURE APPRENTICESHIP
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-[#A692A8] tracking-wider uppercase">
                  {item.period} • {item.location}
                </div>
              </div>

              <div className="text-sm font-mono text-[#D18221] uppercase tracking-wider pb-3">
                {item.role}
              </div>

              <p className="text-sm text-[#A692A8] leading-relaxed max-w-3xl font-light">
                {item.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#34203A] flex flex-wrap gap-2">
                {item.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono text-[#FEF9EF] px-2.5 py-1 bg-[#140D16] border border-[#34203A]"
                  >
                    • {deliv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
