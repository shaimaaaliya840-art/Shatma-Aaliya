import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInquiry
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0C070D]/90 backdrop-blur-md"
        />

        {/* Modal Window with Scheme Engine Corner Highlight Brackets */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-5xl bg-[#140D16] border border-[#34203A] shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden scheme-frame"
        >
          <span className="corner-highlight top-left" />
          <span className="corner-highlight top-right" />
          <span className="corner-highlight bottom-left" />
          <span className="corner-highlight bottom-right" />

          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-[#34203A] flex items-center justify-between bg-[#1C131F]">
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-[#D18221]">
              <span className="text-[#FEF9EF] font-bold">{project.number}</span>
              <span>// {project.category}</span>
              <span className="hidden sm:inline text-[#34203A]">•</span>
              <span className="hidden sm:inline text-[#FEF9EF]">{project.client}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#D18221] hover:text-[#FEF9EF] hover:bg-[#34203A] transition-colors"
              aria-label="Close Dossier"
              data-cursor="pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-10">
            {/* Title & Metadata */}
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] font-mono text-[#D18221] flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-[#58111A]" />
                EDITORIAL CASE DOSSIER • {project.year}
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FEF9EF]">
                {project.title}
              </h2>
              <div className="text-sm font-mono tracking-widest uppercase text-[#D18221]">
                {project.subtitle}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="aspect-[16/9] w-full overflow-hidden border border-[#34203A] bg-[#0C070D]">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover grayscale contrast-115 hover:scale-102 transition-transform duration-700"
              />
            </div>

            {/* Quick Spec Matrix */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#1C131F] border border-[#34203A]">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#D18221] tracking-widest">Client</div>
                <div className="text-sm font-serif text-[#FEF9EF] pt-1">{project.client}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#D18221] tracking-widest">Year</div>
                <div className="text-sm font-serif text-[#FEF9EF] pt-1">{project.year}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#D18221] tracking-widest">Discipline</div>
                <div className="text-sm font-serif text-[#FEF9EF] pt-1">{project.category}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase text-[#D18221] tracking-widest">Role</div>
                <div className="text-sm font-serif text-[#FEF9EF] pt-1">{project.role}</div>
              </div>
            </div>

            {/* Detailed Narrative Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D18221]">
                  01. The Challenge
                </div>
                <p className="text-sm text-[#FEF9EF]/80 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D18221]">
                  02. Silhouette Architecture
                </div>
                <p className="text-sm text-[#FEF9EF]/80 leading-relaxed font-light">
                  {project.concept}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D18221]">
                  03. The Runway Outcome
                </div>
                <p className="text-sm text-[#FEF9EF]/80 leading-relaxed font-light">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Metrics if available */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-6 bg-[#1C131F] border border-[#34203A]">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221] mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#58111A]" />
                  PROVABLE IMPACT & CRITICAL TRACTION
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="border-l-2 border-[#58111A] pl-4">
                      <div className="text-2xl font-serif text-[#FEF9EF]">{m.value}</div>
                      <div className="text-[11px] font-mono uppercase text-[#D18221] pt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-4 pt-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#D18221]">
                  STILLS FROM THE ARCHIVE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="aspect-[4/5] overflow-hidden border border-[#34203A] bg-[#0C070D]">
                      <img
                        src={img}
                        alt={`${project.title} detail ${i + 1}`}
                        className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Strip */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#34203A]">
              {project.tags.map((t) => (
                <span key={t} className="text-xs font-mono tracking-widest uppercase px-3 py-1 bg-[#1C131F] text-[#D18221] border border-[#34203A]">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer CTA */}
          <div className="px-6 py-4 border-t border-[#34203A] bg-[#1C131F] flex items-center justify-between">
            <button
              onClick={onClose}
              className="text-xs font-mono uppercase tracking-widest text-[#D18221] hover:text-[#FEF9EF] transition-colors"
            >
              ← Back to Overview
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#58111A] hover:bg-[#7A1926] text-[#FEF9EF] border border-[#7A1926] shadow-[0_0_15px_rgba(88,17,26,0.4)] text-xs font-mono uppercase tracking-widest transition-all hover:scale-102"
              data-cursor="pointer"
            >
              <span>Commission Similar Silhouette</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
