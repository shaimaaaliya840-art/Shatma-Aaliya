import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SchemeShowcaseProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
}

export const SchemeShowcase: React.FC<SchemeShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = containerRef.current;
    const gallery = galleryRef.current;
    if (!section || !gallery) return;

    // We'll map scroll progress to a full rotation (2 * PI)
    const N = projects.length;
    
    // Create an object to hold the current rotation state for GSAP to animate
    const proxy = { angle: 0 };
    
    // Select all text items and image items
    const textItems = gallery.querySelectorAll('.gallery-text-item') as NodeListOf<HTMLDivElement>;
    const imageItems = gallery.querySelectorAll('.gallery-image-item') as NodeListOf<HTMLDivElement>;

    // Calculate layout based on current angle
    const updateLayout = () => {
      const cx = window.innerWidth; // 50% of 200% wide container
      const cy = window.innerHeight / 2;
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.38;
      
      const textR = radius * 2.2;
      const imageR = radius * 0.8;
      const centerAngle = -Math.PI / 2; // 12 o'clock position
      
      let closestIdx = 0;
      let minDiff = Infinity;

      textItems.forEach((item, i) => {
        const itemAngle = (2 * Math.PI / N) * i + proxy.angle;
        const x = cx + textR * Math.cos(itemAngle);
        const y = cy + textR * Math.sin(itemAngle);
        
        gsap.set(item, { left: x, top: y, xPercent: -50, yPercent: -50 });
        
        // Calculate distance to center for opacity
        const dist = Math.abs(((itemAngle - centerAngle + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        const norm = 1 - dist / Math.PI;
        
        if (dist < minDiff) {
          minDiff = dist;
          closestIdx = i;
        }

        const isCenter = dist < 0.4;
        gsap.to(item, {
          opacity: isCenter ? 1 : 0.2 + norm * 0.4,
          duration: 0.1
        });
        
        if (isCenter) {
          item.classList.add('center');
        } else {
          item.classList.remove('center');
        }
      });

      imageItems.forEach((item, i) => {
        const itemAngle = (2 * Math.PI / N) * i + proxy.angle;
        const x = cx + imageR * Math.cos(itemAngle);
        const y = cy + imageR * Math.sin(itemAngle);
        
        const dist = Math.abs(((itemAngle - centerAngle + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        const norm = 1 - dist / Math.PI;
        const isCenter = dist < 0.4;

        gsap.set(item, { 
          left: x, top: y, xPercent: -50, yPercent: -50,
          scale: 0.7 + norm * 0.3
        });

        gsap.to(item, {
          opacity: isCenter ? 1 : 0.15 + norm * 0.5,
          duration: 0.1
        });

        if (isCenter) {
          item.classList.add('center');
        } else {
          item.classList.remove('center');
        }
      });

      setActiveIndex(closestIdx);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    // Click to rotate to item
    textItems.forEach((item, i) => {
      item.addEventListener('click', () => {
        const targetAngle = -(2 * Math.PI / N) * i;
        gsap.to(proxy, {
          angle: targetAngle,
          duration: 0.8,
          ease: 'power3.out',
          onUpdate: updateLayout
        });
      });
    });

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.2,
      onUpdate: (self) => {
        proxy.angle = -(self.progress * Math.PI * 2);
        updateLayout();
      },
      onEnter: () => gallery.classList.add('visible'),
      onLeave: () => gallery.classList.remove('visible'),
      onEnterBack: () => gallery.classList.add('visible'),
      onLeaveBack: () => gallery.classList.remove('visible'),
    });

    return () => {
      window.removeEventListener('resize', updateLayout);
      st.kill();
    };
  }, [projects]);

  return (
    <>
      <section ref={containerRef} id="directors-section" className="relative h-[600vh] z-20 pointer-events-none">
        {/* Floating section label */}
        <div className="gallery-header fixed top-[6.5rem] left-[5vw] z-50 opacity-0 transition-opacity duration-500 pointer-events-none">
          <div className="text-[0.6rem] tracking-[0.3em] uppercase text-[#D18221] mb-2 flex items-center gap-3">
            <span className="block w-6 h-[1px] bg-[#D18221]"></span>
            Couture Auteurs
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[#FEF9EF]">
            Featured<br />Collections
          </h2>
        </div>
        
        {/* Scroll counter */}
        <div className="gallery-counter fixed bottom-[2rem] right-[5vw] z-50 opacity-0 transition-opacity duration-500 text-[0.65rem] tracking-[0.15em] text-[#FEF9EF]/50 font-mono pointer-events-none">
          {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </section>

      {/* FIXED GALLERY */}
      <div 
        ref={galleryRef}
        className="gallery-container fixed top-0 -left-[50%] w-[200%] h-full overflow-hidden z-10 pointer-events-none opacity-0 transition-opacity duration-500"
      >
        <div className="gallery-visible-target pointer-events-auto w-full h-full">
          {projects.map((project, i) => (
            <React.Fragment key={project.id}>
              {/* Text Item */}
              <div 
                className="gallery-text-item absolute w-[50rem] h-[5rem] cursor-pointer z-[2] text-center grid place-items-center transition-colors duration-300 [&.center_p]:text-[#D18221]"
              >
                <p className="w-full text-3xl md:text-5xl uppercase text-[#FEF9EF] font-bold tracking-tight transition-colors duration-300 hover:text-[#FEF9EF]/80">
                  {project.title}
                  <span className="inline text-[0.7rem] tracking-[0.15em] font-normal opacity-60 pl-4 uppercase align-middle">
                    {project.category}
                  </span>
                </p>
              </div>

              {/* Image Item */}
              <div 
                className="gallery-image-item absolute w-[80vw] md:w-[35rem] aspect-video z-[1] rounded-[1.2rem] overflow-hidden [&.center]:z-[4] [&.center]:rounded-xl transition-[border-radius] duration-500 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img 
                  src={project.mainImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
                
                {/* Corner Highlights */}
                <div className="corner-highlights absolute -inset-6 pointer-events-none z-[6] opacity-0 transition-opacity duration-300 [[class*='center']_&]:opacity-100">
                  <div className="absolute top-0 left-0 w-8 h-8 border-2 border-[#FEF9EF] border-r-0 border-b-0 animate-[pulse_2s_ease-in-out_infinite]" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-2 border-[#FEF9EF] border-l-0 border-b-0 animate-[pulse_2s_ease-in-out_infinite]" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-2 border-[#FEF9EF] border-r-0 border-t-0 animate-[pulse_2s_ease-in-out_infinite]" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-2 border-[#FEF9EF] border-l-0 border-t-0 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
