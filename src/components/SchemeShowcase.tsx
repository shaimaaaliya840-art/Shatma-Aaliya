import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight, Sparkles, ChevronRight, Eye } from 'lucide-react';

interface SchemeShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
}

export const SchemeShowcase: React.FC<SchemeShowcaseProps> = ({
  projects,
  onSelectProject,
  onOpenInquiry
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section
      id="spotlight"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#34203A] relative overflow-hidden"
    >
      {/* Top Scheme Engine Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#34203A]">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[#D18221]">
            <span className="w-2 h-2 bg-[#58111A] border border-[#7A1926] animate-ping" />
            <span>SCHEME ENGINE // SPOTLIGHT GALLERY</span>
            <span className="text-[#34203A]">|</span>
            <span className="text-[#A692A8]">SELECT & PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#FEF9EF] tracking-tight">
            Curated Atelier Spotlight
          </h2>
          <p className="text-sm sm:text-base text-[#A692A8] max-w-2xl font-light leading-relaxed">
            Directing focus into the core collections: architectural corsetry, generational handloom alchemy, and subversive tailoring. Hover or tap to focus.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-[#D18221] tracking-wider uppercase hidden sm:inline">
            INDEX 0{activeIndex + 1} / 0{projects.length}
          </span>
          <button
            onClick={onOpenInquiry}
            className="px-5 py-2.5 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] text-xs font-mono uppercase tracking-[0.18em] text-[#FEF9EF] shadow-[0_0_15px_rgba(88,17,26,0.5)] transition-all flex items-center gap-2"
            data-cursor="pointer"
          >
            <span>Commission Look</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D18221]" />
          </button>
        </div>
      </div>

      {/* Main Scheme Engine Interactive Stage */}
      <div className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Project Titles (Scheme Engine typographic list) */}
        <div className="lg:col-span-6 flex flex-col space-y-2">
          {projects.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer p-4 sm:p-5 transition-all duration-300 border-l-2 relative ${
                  isActive
                    ? 'border-[#D18221] bg-[#1C131F]/80 pl-6 shadow-[inset_4px_0_12px_rgba(209,130,33,0.15)]'
                    : 'border-transparent hover:border-[#58111A] pl-4 hover:pl-6 bg-transparent hover:bg-[#1C131F]/30'
                }`}
                data-cursor="pointer"
                data-cursor-text="INSPECT"
              >
                <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A692A8] pb-1.5">
                  <div className="flex items-center gap-3">
                    <span className={`font-semibold transition-colors ${isActive ? 'text-[#D18221]' : 'text-[#A692A8]'}`}>
                      {project.number}
                    </span>
                    <span className="text-[#FEF9EF]/80">{project.client}</span>
                  </div>
                  {isActive && (
                    <span className="badge-maroon px-2 py-0.5 text-[9px] font-mono font-bold tracking-wider animate-pulse">
                      ACTIVE SPOTLIGHT
                    </span>
                  )}
                </div>

                <h3
                  className={`text-xl sm:text-2xl md:text-3xl font-serif font-normal tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#FEF9EF] translate-x-1'
                      : 'text-[#FEF9EF]/60 group-hover:text-[#D18221]'
                  }`}
                >
                  {project.title}
                </h3>

                <p className="text-xs text-[#A692A8] font-light pt-1 line-clamp-1">
                  {project.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Scheme Engine Centerpiece Visual with Pulsing Corner Highlights */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-lg aspect-[16/11] sm:aspect-[16/10] overflow-visible group">
            {/* Scheme Engine Signature Corner Highlights (Pulsing brackets) */}
            <div className="corner-highlight top-left amber animate-scheme-pulse" />
            <div className="corner-highlight top-right amber animate-scheme-pulse" />
            <div className="corner-highlight bottom-left amber animate-scheme-pulse" />
            <div className="corner-highlight bottom-right amber animate-scheme-pulse" />

            {/* Visual Box Container */}
            <div className="w-full h-full relative overflow-hidden bg-[#140D16] border border-[#34203A] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeProject.heroImage}
                    alt={activeProject.title}
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#140D16] via-[#140D16]/40 to-transparent" />

                  {/* Scheme Engine Floating Meta Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end gap-3">
                    <div className="flex items-center justify-between">
                      <span className="badge-maroon px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-bold">
                        {activeProject.category}
                      </span>
                      <span className="text-xs font-mono text-[#D18221] tracking-widest uppercase">
                        {activeProject.year}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs uppercase font-mono tracking-widest text-[#D18221]">
                        {activeProject.client}
                      </div>
                      <div className="text-xl sm:text-2xl font-serif text-[#FEF9EF] pt-0.5">
                        {activeProject.title}
                      </div>
                    </div>

                    <p className="text-xs text-[#FEF9EF]/80 font-light line-clamp-2">
                      {activeProject.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(activeProject)}
                        className="px-4 py-2 bg-[#58111A] hover:bg-[#7A1926] border border-[#7A1926] text-xs font-mono uppercase tracking-[0.2em] text-[#FEF9EF] shadow-[0_0_15px_rgba(88,17,26,0.6)] flex items-center gap-2 transition-all"
                        data-cursor="pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#D18221]" />
                        <span>Inspect Full Dossier</span>
                      </button>

                      <div className="flex gap-2">
                        {activeProject.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-[#140D16]/80 border border-[#34203A] text-[#A692A8]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
