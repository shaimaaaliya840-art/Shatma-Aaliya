import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Works');

  const categories = [
    'All Works',
    'Neelgar Archives',
    'Femme Fatale',
    'Menswear',
    'Indian Textiles'
  ];

  const filteredProjects = activeCategory === 'All Works'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="works" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-[#34203A]">
      {/* Header & Category Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-[#34203A]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D18221] font-mono">
            <span>// ARCHIVAL INDEX</span>
            <span className="text-[#58111A]">✦</span>
            <span className="text-[#A692A8]">2023—2027</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#FEF9EF] tracking-tight">
            Selected Works & Dossiers
          </h2>
          <p className="text-sm text-[#A692A8] max-w-xl font-light">
            A curated index of haute couture capsules, architectural femme fatale gowns, subversive menswear, and indigenous handloom metallurgies.
          </p>
        </div>

        {/* Filter Pills with Deep Maroon Active Accent */}
        <div className="flex flex-wrap items-center gap-2 font-mono">
          {categories.map((category) => {
            const count = category === 'All Works' 
              ? projects.length 
              : projects.filter(p => p.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-none text-xs tracking-[0.15em] uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-[#58111A] text-[#FEF9EF] border-[#7A1926] shadow-[0_0_15px_rgba(88,17,26,0.6)] font-semibold'
                    : 'bg-[#140D16]/70 text-[#A692A8] border-[#34203A] hover:border-[#D18221] hover:text-[#FEF9EF]'
                }`}
                data-cursor="pointer"
              >
                <span>{category}</span>
                <span className="ml-1.5 text-[10px] font-mono opacity-80">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-[#1C131F]/50 border border-[#34203A] hover:border-[#7A1926] p-6 sm:p-8 transition-all duration-300 relative backdrop-blur-md shadow-xl"
              data-cursor="pointer"
              data-cursor-text="INSPECT"
            >
              {/* Corner Framing Marks */}
              <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#58111A] group-hover:border-[#D18221] transition-colors" />
              <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#58111A] group-hover:border-[#D18221] transition-colors" />
              <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#58111A] group-hover:border-[#D18221] transition-colors" />
              <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#58111A] group-hover:border-[#D18221] transition-colors" />

              {/* Card Meta Top */}
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#A692A8] pb-4">
                <span className="text-[#D18221] font-semibold">{project.number}</span>
                <div className="flex items-center gap-3">
                  <span>{project.category}</span>
                  <span className="text-[#34203A]">•</span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Card Visual with Editorial Ratio */}
              <div className="aspect-[16/10] overflow-hidden bg-[#140D16] relative mb-6 border border-[#34203A]">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Important Deep Maroon Tag Pill */}
                <div className="absolute bottom-3 left-3 bg-[#58111A]/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-[#FEF9EF] border border-[#7A1926]">
                  {project.client}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-none bg-[#140D16]/85 backdrop-blur-sm border border-[#34203A] group-hover:border-[#7A1926] group-hover:bg-[#58111A] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-[#FEF9EF] group-hover:text-[#D18221] transition-colors" />
                </div>
              </div>

              {/* Project Title & Narrative */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#FEF9EF] group-hover:text-[#D18221] transition-colors">
                  {project.title}
                </h3>
                <div className="text-xs uppercase font-mono tracking-[0.2em] text-[#D18221]">
                  {project.subtitle}
                </div>
                <p className="text-sm text-[#A692A8] font-light leading-relaxed pt-2 line-clamp-2">
                  {project.excerpt}
                </p>
              </div>

              {/* Tags bottom strip */}
              <div className="mt-6 pt-4 border-t border-[#34203A] flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider uppercase font-mono px-2 py-0.5 bg-[#140D16] text-[#A692A8] border border-[#34203A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
