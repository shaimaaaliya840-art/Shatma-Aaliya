import React, { useEffect, useRef } from 'react';

/**
 * SchemeEngine-inspired full-viewport animated orbital background.
 * Soft, slow-moving, continuous circular/orbital blobs of color that drift
 * and blend into one another like liquid silk or smoke, looping seamlessly.
 *
 * Strictly respects the palette:
 * - Canvas Base: #110D0B (Black Sheep)
 * - Blobs: #443E3A (Joesmithite), #8B553F (Brown Patina), #C0957B (Maple Sugar)
 * - NOTE: Wine Red (#3E1011) is strictly excluded to satisfy the scope rule.
 */
export const OrbitalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Orbital blob configuration
    // Each blob revolves around a floating center with smooth continuous orbital motion
    interface Blob {
      baseAngle: number;
      speed: number;
      orbitRadiusX: number;
      orbitRadiusY: number;
      centerXFactor: number;
      centerYFactor: number;
      radius: number;
      breathSpeed: number;
      color: string; // rgba representation
      opacity: number;
    }

    const blobs: Blob[] = [
      {
        baseAngle: 0,
        speed: 0.00035,
        orbitRadiusX: 0.28,
        orbitRadiusY: 0.22,
        centerXFactor: 0.35,
        centerYFactor: 0.4,
        radius: 0.44,
        breathSpeed: 0.0005,
        color: '88, 17, 26', // Deep Maroon (#58111A)
        opacity: 0.28
      },
      {
        baseAngle: Math.PI * 0.7,
        speed: -0.00028,
        orbitRadiusX: 0.32,
        orbitRadiusY: 0.26,
        centerXFactor: 0.65,
        centerYFactor: 0.55,
        radius: 0.48,
        breathSpeed: 0.00045,
        color: '74, 27, 115', // Royal Deep Plum (#4A1B73)
        opacity: 0.26
      },
      {
        baseAngle: Math.PI * 1.3,
        speed: 0.00025,
        orbitRadiusX: 0.24,
        orbitRadiusY: 0.3,
        centerXFactor: 0.5,
        centerYFactor: 0.32,
        radius: 0.36,
        breathSpeed: 0.0006,
        color: '209, 130, 33', // Scheme Engine Amber Ochre (#D18221)
        opacity: 0.16
      },
      {
        baseAngle: Math.PI * 1.8,
        speed: -0.00032,
        orbitRadiusX: 0.22,
        orbitRadiusY: 0.18,
        centerXFactor: 0.25,
        centerYFactor: 0.7,
        radius: 0.40,
        breathSpeed: 0.0004,
        color: '49, 13, 72', // Dark Violet (#310D48)
        opacity: 0.30
      },
      {
        baseAngle: Math.PI * 0.4,
        speed: 0.00038,
        orbitRadiusX: 0.35,
        orbitRadiusY: 0.25,
        centerXFactor: 0.75,
        centerYFactor: 0.3,
        radius: 0.38,
        breathSpeed: 0.00055,
        color: '103, 20, 32', // Rich Vivid Maroon (#671420)
        opacity: 0.22
      }
    ];

    let lastTime = performance.now();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const render = (time: number) => {
      const elapsed = time;

      // Base: #140D16 (Scheme Engine Deep Aubergine Obsidian)
      ctx.fillStyle = '#140D16';
      ctx.fillRect(0, 0, width, height);

      // Blending mode for seamless silk / smoke diffusion
      ctx.globalCompositeOperation = 'screen';

      const minDim = Math.min(width, height);
      const maxDim = Math.max(width, height);

      blobs.forEach((blob) => {
        // Continuous circular/orbital revolution
        const angle = blob.baseAngle + elapsed * blob.speed;
        
        // Slow hypnotic breathing pulsation
        const breath = Math.sin(elapsed * blob.breathSpeed) * 0.08;
        const currentRadius = (blob.radius + breath) * maxDim;

        // Position coordinates along orbital ellipses
        const cx = (blob.centerXFactor + Math.cos(angle) * blob.orbitRadiusX) * width;
        const cy = (blob.centerYFactor + Math.sin(angle) * blob.orbitRadiusY) * height;

        // Radial gradient with gaussian soft-falloff
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(currentRadius, 20));
        grad.addColorStop(0, `rgba(${blob.color}, ${blob.opacity})`);
        grad.addColorStop(0.35, `rgba(${blob.color}, ${blob.opacity * 0.65})`);
        grad.addColorStop(0.7, `rgba(${blob.color}, ${blob.opacity * 0.2})`);
        grad.addColorStop(1, `rgba(${blob.color}, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Reset composite operation
      ctx.globalCompositeOperation = 'source-over';

      // Subtle atmospheric noise / vignette overlay to keep text ultra sharp
      ctx.fillStyle = 'rgba(20, 13, 22, 0.38)';
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="schemeengine-orbital-canvas"
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0 filter blur-[40px] md:blur-[65px] opacity-90 transition-opacity duration-1000"
    />
  );
};
