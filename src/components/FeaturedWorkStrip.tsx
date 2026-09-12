import React from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface FeaturedWorkStripProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const FeaturedWorkStrip: React.FC<FeaturedWorkStripProps> = ({
  projects,
  onSelectProject
}) => {
  // Duplicated items for a continuous flowing strip
  const stripItems = [...projects, ...projects];

  return (
    <section
      id="featured"
      className="border-b border-[#34203A] bg-[#140D16]/70 backdrop-blur-sm py-7 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-3 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#A692A8] font-mono">
        <div className="flex items-center gap-2">
          {/* Deep Maroon marker */}
          <span className="w-2 h-2 bg-[#58111A] border border-[#7A1926]" />
          <span className="text-[#D18221]">SCHEME ENGINE // CURATED ARCHIVAL STRIP</span>
        </div>
        <span className="hidden sm:inline text-[#A692A8]">HOVER TO PAUSE • CLICK TO INSPECT DOSSIER</span>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-5 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap py-2">
          {stripItems.map((item, idx) => (
            <button
              key={`${item.id}-${idx}`}
              onClick={() => onSelectProject(item)}
              className="inline-flex items-center gap-4 px-5 py-3.5 rounded-none bg-[#1C131F]/60 border border-[#34203A] hover:border-[#7A1926] hover:bg-[#1C131F] transition-all duration-300 text-left shrink-0 group/item backdrop-blur-sm shadow-md"
              data-cursor="pointer"
              data-cursor-text="INSPECT"
            >
              <div className="w-12 h-12 overflow-hidden bg-[#140D16] shrink-0 border border-[#34203A]">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover/item:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-3 text-[10px] uppercase font-mono tracking-widest text-[#A692A8]">
                  <span className="text-[#D18221] font-semibold">{item.number}</span>
                  <span className="text-[#FEF9EF]/90">{item.client}</span>
                  <span className="text-[#34203A]">•</span>
                  <span>{item.year}</span>
                </div>
                <div className="font-serif text-base tracking-wide text-[#FEF9EF] group-hover/item:text-[#D18221] transition-colors">
                  {item.title}
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-[#A692A8] group-hover/item:text-[#D18221] group-hover/item:translate-x-1 transition-all ml-4" />
            </button>
          ))}
        </div>
      </div>

      {/* Inline animation keyframe style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
