import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getCurrentSolarTerm, SolarTerm } from '../utils/solarTerms';

interface HeroProps {
  onStartDiagnostic: () => void;
}

export default function Hero({ onStartDiagnostic }: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const [term, setTerm] = useState<SolarTerm | null>(null);

  useEffect(() => {
    setTerm(getCurrentSolarTerm());
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px) scale(1.1)`;
      }
      if (lightRef.current) {
        lightRef.current.style.transform = `translate(calc(-50% + ${x * 40}px), calc(-50% + ${y * 40}px))`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary text-beige">
      {/* Layer 1: Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[400ms] ease-out will-change-transform"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(2, 44, 34, 0.4), rgba(2, 44, 34, 0.8)), url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80")',
          transform: 'scale(1.1)'
        }}
      />

      {/* Layer 2: Moving Mist */}
      <div className="absolute inset-0 z-0 opacity-20 bg-noise mix-blend-overlay pointer-events-none" aria-hidden="true" />
      <div className="absolute -inset-[100%] z-0 animate-fog-move opacity-30 select-none pointer-events-none" aria-hidden="true">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl transform scale-150" />
      </div>

      {/* Layer 3: Light Follow Effect */}
      <div
        ref={lightRef}
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-soft-light transition-transform duration-[600ms] ease-out will-change-transform"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(253, 230, 138, 0.2) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {term && (
          <div className="mb-6 animate-fade-in">
            <span className="px-4 py-1.5 rounded-full border border-soft-gold/30 bg-soft-gold/10 text-soft-gold text-[10px] tracking-[0.3em] uppercase font-medium">
              Solar Term: {term.name} — {term.translation}
            </span>
          </div>
        )}
        <h1 className="font-display text-5xl md:text-8xl font-thin mb-8 leading-tight tracking-wide animate-fade-in drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-br from-beige via-stone-100 to-stone-400">
          Restore <span className="italic font-normal text-stone-50">Balance</span>.<br />
          Heal Naturally.
        </h1>
        <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90 max-w-3xl mx-auto font-light tracking-widest animate-fade-in-delay text-stone-200">
          Essential wellness through time-honored Traditional Chinese Medicine.
        </p>

        {term && (
          <p className="text-sm md:text-base mb-12 text-soft-gold/80 italic font-light tracking-wide animate-fade-in-delay-2 max-w-2xl mx-auto">
            "Sensei's Seasonal Note: {term.recommendation}"
          </p>
        )}

        <button
          onClick={onStartDiagnostic}
          className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(253,230,138,0.3)] border border-beige/20 hover:border-soft-gold/50 animate-fade-in-delay-2"
        >
          <div className="absolute inset-0 w-full h-full bg-white/5 group-hover:bg-soft-gold/10 transition-colors duration-500 blur-sm" />
          <div className="relative flex items-center gap-4 text-beige tracking-[0.2em] uppercase text-sm font-medium group-hover:text-soft-gold transition-colors duration-300">
            Start AI Diagnostic
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float opacity-60 pointer-events-none" aria-hidden="true">
        <p className="text-[10px] tracking-[0.3em] text-beige/80 mb-4 text-center uppercase">Scroll to Discover</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-beige/50 to-transparent mx-auto" />
      </div>
    </section>
  );
}
