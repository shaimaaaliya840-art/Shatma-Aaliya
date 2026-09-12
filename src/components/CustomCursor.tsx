import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * Custom Femme Fatale Cursor in Wine Red (#3E1011).
 * Strictly scoped to cursor, hover states, logo, and one hero moment.
 * Automatically disabled on touch devices.
 */
export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor]');
      if (interactive) {
        setIsHovered(true);
        const customText = interactive.getAttribute('data-cursor-text');
        setCursorText(customText || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Center Precision Deep Maroon (#58111A) Dot with Amber Glow */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(88,17,26,0.9)]"
        style={{ backgroundColor: '#58111A', border: '1px solid #7A1926' }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovered ? 0 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: "spring",
          stiffness: 1300,
          damping: 50,
          mass: 0.1
        }}
      />

      {/* Trailing Deep Maroon Ring / Focus Halo with Scheme Engine Amber Ochre (#D18221) interior text */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          border: '1.5px solid #58111A',
          boxShadow: isHovered ? '0 0 20px rgba(88, 17, 26, 0.5), 0 0 8px rgba(209, 130, 33, 0.4)' : 'none'
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovered ? (cursorText ? 84 : 56) : 34,
          height: isHovered ? (cursorText ? 84 : 56) : 34,
          backgroundColor: isHovered ? 'rgba(88, 17, 26, 0.5)' : 'rgba(88, 17, 26, 0.1)',
          borderColor: isHovered ? '#D18221' : '#58111A',
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.35
        }}
      >
        {cursorText && (
          <span className="text-[9px] tracking-[0.2em] uppercase font-mono font-semibold text-[#FEF9EF] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
