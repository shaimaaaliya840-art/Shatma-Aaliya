import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface PullQuoteAndTestimonialsProps {
  testimonials: Testimonial[];
  pullQuote: {
    quote: string;
    author: string;
    context: string;
  };
}

export const PullQuoteAndTestimonials: React.FC<PullQuoteAndTestimonialsProps> = ({
  testimonials,
  pullQuote
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="manifesto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#34203A]">
      {/* Editorial Pull-Quote - The philosophical core */}
      <div className="py-16 border-b border-[#34203A] relative">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#D18221] mb-8 flex items-center gap-3">
          <span>// CORE MANIFESTO</span>
          <span className="text-[#58111A]">✦</span>
          <span className="text-[#A692A8]">THE PULL-QUOTE</span>
        </div>

        <blockquote className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal italic text-[#FEF9EF] leading-[1.2] max-w-5xl">
          "{pullQuote.quote}"
        </blockquote>

        <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-[#D18221]">
          <span className="text-[#FEF9EF] font-semibold">{pullQuote.author}</span>
          <span className="text-[#34203A]">—</span>
          <span className="text-[#A692A8]">{pullQuote.context}</span>
        </div>
      </div>

      {/* Critical Reception / Testimonials Strip */}
      <div className="pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#D18221] mb-2">
              CRITICAL RECEPTION
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#FEF9EF]">
              Words From Mentors, Maisons & Editors
            </h3>
          </div>

          {/* Controls with Deep Maroon Highlights */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-[#34203A] hover:border-[#7A1926] hover:bg-[#58111A] text-[#FEF9EF] flex items-center justify-center transition-colors bg-[#140D16]"
              aria-label="Previous testimonial"
              data-cursor="pointer"
            >
              <ChevronLeft className="w-5 h-5 text-[#D18221]" />
            </button>
            <div className="text-xs font-mono text-[#D18221] px-2 tabular-nums">
              0{currentIndex + 1} / 0{testimonials.length}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-[#34203A] hover:border-[#7A1926] hover:bg-[#58111A] text-[#FEF9EF] flex items-center justify-center transition-colors bg-[#140D16]"
              aria-label="Next testimonial"
              data-cursor="pointer"
            >
              <ChevronRight className="w-5 h-5 text-[#D18221]" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card with Scheme Engine Corner Highlight Accents */}
        <div className="relative bg-[#1C131F]/60 border border-[#34203A] p-8 sm:p-12 transition-all backdrop-blur-md shadow-2xl">
          <Quote className="w-8 h-8 text-[#58111A]/60 absolute top-6 right-6" />

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#FEF9EF] leading-relaxed font-light">
              "{current.quote}"
            </p>

            <div className="pt-6 border-t border-[#34203A] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-base font-serif text-[#FEF9EF] font-semibold">{current.author}</div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#D18221] pt-0.5">
                  {current.role} • <span className="text-[#FEF9EF]">{current.organization}</span>
                </div>
              </div>
              {/* Important Deep Maroon Badge */}
              <div className="badge-maroon px-2.5 py-1 text-xs font-mono">
                SEASON {current.year}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Small 3-column overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 border transition-all cursor-pointer backdrop-blur-sm ${
                idx === currentIndex
                  ? 'bg-[#1C131F] border-[#7A1926] shadow-[0_0_15px_rgba(88,17,26,0.4)]'
                  : 'bg-[#140D16]/40 border-[#34203A] hover:border-[#D18221] opacity-75'
              }`}
            >
              <div className="text-xs font-mono text-[#D18221] mb-2">{t.organization}</div>
              <div className="text-sm font-serif text-[#FEF9EF] line-clamp-2">"{t.quote}"</div>
              <div className="text-[11px] font-mono text-[#A692A8] mt-3">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
