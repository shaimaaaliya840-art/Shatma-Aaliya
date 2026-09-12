import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, RotateCcw, SlidersHorizontal, Sparkles } from 'lucide-react';

interface AnimatedHeroTitleProps {
  onSelectWord?: (word: string) => void;
}

const DEFAULT_WORDS = [
  'Drapes',
  'Sculpts',
  'Storytells',
  'Solves',
  'Build'
];

interface LetterProps {
  char: string;
  isWineAccent?: boolean;
}

// Interactive letter with 3D tilt & lift physics on hover
export const InteractiveLetter: React.FC<LetterProps> = ({ char, isWineAccent }) => {
  if (char === ' ') {
    return <span className="inline-block w-3 sm:w-4">&nbsp;</span>;
  }

  return (
    <span
      className={`h-letter select-none cursor-default ${
        isWineAccent ? 'wine-accent text-[#F7F4EE]' : ''
      }`}
      data-cursor="pointer"
    >
      {char}
    </span>
  );
};

export const AnimatedHeroTitle: React.FC<AnimatedHeroTitleProps> = () => {
  const [words, setWords] = useState<string[]>(DEFAULT_WORDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMode, setSpeedMode] = useState<'calm' | 'normal' | 'brisk'>('normal');
  const [showControls, setShowControls] = useState(false);
  const [isMagnifierMode, setIsMagnifierMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringLens, setIsHoveringLens] = useState(false);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  // Speed timings in ms
  const speedDelays = {
    calm: 2800,
    normal: 1900,
    brisk: 1100
  };

  // Continuous auto-roll matching zainabkabira.com slot machine mechanism
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, speedDelays[speedMode]);

    return () => clearTimeout(timer);
  }, [currentIndex, isPlaying, speedMode, words.length]);

  const activeWord = words[currentIndex] || words[0];

  // Mouse move handler for optional magnifying lens overlay
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!titleContainerRef.current) return;
    const rect = titleContainerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={titleContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringLens(true)}
      onMouseLeave={() => setIsHoveringLens(false)}
      className="relative flex flex-col gap-3 sm:gap-4 select-none"
    >
      {/* Eyebrow and Orientation Marker matching Zainab Kabira's layout */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.25em] font-mono text-[#D18221]">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#58111A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D18221]" />
          </span>
          <span className="text-[#FEF9EF]">Hello, I’m Shatma Aaliya. A –</span>
        </div>

        {/* Quick Animation Controls Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowControls(!showControls)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#A692A8] hover:text-[#FEF9EF] border border-[#34203A] hover:border-[#D18221] bg-[#1C131F]/80 transition-colors"
            title="Toggle Hero Animation Controls"
            data-cursor="pointer"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#D18221]" />
            <span>Roll Dynamics</span>
          </button>
        </div>
      </div>

      {/* Animation Fine-tuning Toolbar (Collapsible) */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border border-[#34203A] bg-[#1C131F]/95 backdrop-blur-md p-3 mb-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="text-[#D18221]">SPEED:</span>
              {(['calm', 'normal', 'brisk'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSpeedMode(mode)}
                  className={`px-2 py-0.5 uppercase text-[10px] tracking-wider transition-colors ${
                    speedMode === mode
                      ? 'bg-[#58111A] border border-[#7A1926] text-[#FEF9EF]'
                      : 'text-[#A692A8] hover:text-[#FEF9EF] border border-[#34203A]'
                  }`}
                  data-cursor="pointer"
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 px-2 py-0.5 border border-[#34203A] text-[#FEF9EF] hover:border-[#D18221] text-[10px] uppercase tracking-wider"
                data-cursor="pointer"
              >
                {isPlaying ? <Pause className="w-2.5 h-2.5 text-[#D18221]" /> : <Play className="w-2.5 h-2.5 text-[#D18221]" />}
                <span>{isPlaying ? 'Pause Roll' : 'Resume'}</span>
              </button>

              <button
                onClick={() => setIsMagnifierMode(!isMagnifierMode)}
                className={`flex items-center gap-1.5 px-2 py-0.5 border text-[10px] uppercase tracking-wider transition-colors ${
                  isMagnifierMode
                    ? 'border-[#7A1926] bg-[#58111A] text-[#FEF9EF]'
                    : 'border-[#34203A] text-[#A692A8] hover:text-[#FEF9EF]'
                }`}
                data-cursor="pointer"
              >
                <Sparkles className="w-2.5 h-2.5 text-[#D18221]" />
                <span>Lens Effect: {isMagnifierMode ? 'ON' : 'OFF'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Zainab Kabira-Inspired Animated Heading Stack */}
      <div className="relative">
        {/* Rotated Vertical Eyebrow Label (Scheme Engine / Editorial Signature Element) */}
        <div
          aria-hidden="true"
          className="hidden xl:block absolute -left-14 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] font-mono tracking-[0.35em] text-[#D18221] uppercase whitespace-nowrap pointer-events-none"
        >
          COUTURE / SILHOUETTE / ARCHIVE
        </div>

        <h1 className="flex flex-col font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FEF9EF] leading-[1.05]">
          {/* Line 1: 'Fashion Designer who' (with per-letter interactive physics) */}
          <span className="block whitespace-nowrap overflow-visible">
            {'Designer who'.split('').map((char, index) => (
              <InteractiveLetter key={`line1-${index}-${char}`} char={char} />
            ))}
          </span>

          {/* Line 2: The Signature Slot-Machine Roll (#scramble in zainabkabira.com) */}
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mt-1 sm:mt-2">
            <span
              id="scramble"
              className="relative inline-block roll-container h-[1.18em] overflow-hidden align-middle"
              style={{
                verticalAlign: 'middle',
              }}
            >
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={activeWord}
                  initial={{ y: '100%', opacity: 0.2 }}
                  animate={{ y: '0%', opacity: 1 }}
                  exit={{ y: '-100%', opacity: 0.2 }}
                  transition={{
                    // Exact spring-like curve from zainabkabira.com: cubic-bezier(0.22, 1.15, 0.36, 1)
                    duration: 0.56,
                    ease: [0.22, 1.15, 0.36, 1]
                  }}
                  className="inline-flex items-center whitespace-nowrap text-[#D18221] font-display"
                >
                  {activeWord.split('').map((char, i) => (
                    <InteractiveLetter
                      key={`word-${activeWord}-${i}-${char}`}
                      char={char}
                      isWineAccent={true}
                    />
                  ))}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
        </h1>

        {/* Optional Magnifying Glass Lens Effect (active if toggled) */}
        {isMagnifierMode && isHoveringLens && (
          <div
            className="pointer-events-none absolute hidden sm:block w-36 h-36 rounded-full border border-[#D18221]/80 bg-[#140D16]/40 backdrop-blur-[2px] shadow-[0_0_35px_rgba(209,130,33,0.35),inset_0_0_15px_rgba(88,17,26,0.6)] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-opacity duration-150"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-mono tracking-widest text-[#FEF9EF] uppercase bg-[#58111A] px-2 py-0.5 border border-[#7A1926]">
                1.5X LENS
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Word Quick-Jump Chips (Interactive verbal taxonomy) */}
      <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono">
        <span className="text-[#D18221] uppercase tracking-wider text-[10px]">Couture Verbs:</span>
        {words.map((word, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={word}
              onClick={() => {
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`px-2.5 py-0.5 tracking-wider transition-all duration-200 border ${
                isActive
                  ? 'border-[#7A1926] bg-[#58111A] text-[#FEF9EF] font-medium shadow-[0_0_12px_rgba(88,17,26,0.5)]'
                  : 'border-[#34203A] text-[#A692A8] hover:text-[#FEF9EF] hover:border-[#D18221] bg-[#140D16]/60'
              }`}
              data-cursor="pointer"
            >
              {word}
            </button>
          );
        })}
      </div>
    </div>
  );
};
