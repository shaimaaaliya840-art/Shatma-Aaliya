import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Disc } from 'lucide-react';

export const HeroAudioCapsule: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(24);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:38');
  const duration = '2:45';
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Soft procedural ambient couture drone sound when play is pressed
  useEffect(() => {
    if (isPlaying && !isMuted) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // Low warm ambient frequency (55Hz - A1 deep meditative tone)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(55, ctx.currentTime);
        
        // Very subtle volume (gentle background presence)
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.03, ctx.currentTime + 1.2);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
      } catch (err) {
        console.warn('Audio synthesis not permitted or unsupported', err);
      }
    } else {
      if (gainNodeRef.current && audioContextRef.current) {
        try {
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.3);
          setTimeout(() => {
            oscillatorRef.current?.stop();
            audioContextRef.current?.close();
            audioContextRef.current = null;
          }, 300);
        } catch {
          // ignore
        }
      }
    }

    return () => {
      if (audioContextRef.current) {
        try {
          audioContextRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, [isPlaying, isMuted]);

  // Track progress ticker
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = (prev + 1) % 100;
          const secs = Math.floor((next / 100) * 165);
          const m = Math.floor(secs / 60);
          const s = (secs % 60).toString().padStart(2, '0');
          setCurrentTime(`${m}:${s}`);
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div
      className="border border-[#443E3A] bg-[#110D0B]/85 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5 shadow-2xl relative group hover:border-[#8B553F] transition-all duration-300"
      data-cursor="pointer"
    >
      {/* Dual Spool Wheels (inspired by Zainab Kabira's disk-l and disk-r) */}
      <div className="flex items-center gap-3">
        {/* Left Reel */}
        <div
          className={`w-12 h-12 rounded-full border-2 border-[#8B553F] bg-[#110D0B] relative flex items-center justify-center transition-transform duration-700 ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '4s' }}
        >
          <div className="w-5 h-5 rounded-full border border-[#C0957B]/60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C0957B]" />
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#443E3A]/80 -translate-y-1/2" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#443E3A]/80 -translate-x-1/2" />
        </div>

        {/* Magnetic Tape Ribbon */}
        <div className="w-8 h-[2px] bg-gradient-to-r from-[#8B553F] via-[#C0957B] to-[#8B553F] opacity-70" />

        {/* Right Reel */}
        <div
          className={`w-12 h-12 rounded-full border-2 border-[#8B553F] bg-[#110D0B] relative flex items-center justify-center transition-transform duration-700 ${
            isPlaying ? 'animate-spin' : ''
          }`}
          style={{ animationDuration: '4s' }}
        >
          <div className="w-5 h-5 rounded-full border border-[#C0957B]/60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C0957B]" />
          </div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#443E3A]/80 -translate-y-1/2" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#443E3A]/80 -translate-x-1/2" />
        </div>
      </div>

      {/* Center Track Audio Info & Slider */}
      <div className="flex-1 w-full flex flex-col gap-2 text-left">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C0957B] animate-pulse" />
            <p className="text-xs font-mono uppercase tracking-wider text-[#F7F4EE]">
              Runway Score: Femme Fatale
            </p>
          </div>
          <span className="text-[10px] font-mono text-[#8B553F]">[ATELIER TAPE]</span>
        </div>

        {/* Interactive Scrub Track */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setProgress(pct);
          }}
          className="relative h-1.5 bg-[#443E3A] cursor-pointer rounded-none overflow-hidden"
        >
          <div
            className="h-full bg-gradient-to-r from-[#8B553F] to-[#C0957B] transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-[#C0957B]/80">
          <span>{currentTime}</span>
          <span className="text-[#8B553F]">BPM: 118 · NOCTURNE</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Control Action Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-9 h-9 rounded-full border border-[#8B553F] hover:border-[#C0957B] bg-[#443E3A]/40 flex items-center justify-center text-[#F7F4EE] hover:text-[#C0957B] transition-colors shadow-md"
          title={isPlaying ? 'Pause Atelier Audio' : 'Play Atelier Audio'}
          data-cursor="pointer"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-1.5 text-[#8B553F] hover:text-[#C0957B] transition-colors"
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          data-cursor="pointer"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </div>
  );
};
