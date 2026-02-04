import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onBookConsultation: () => void;
}

export default function Hero({ onBookConsultation }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates -1 to 1
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary text-beige">
      {/* Layer 1: Parallax Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(2, 44, 34, 0.4), rgba(2, 44, 34, 0.8)), url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80")', // Misty forest
          transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) scale(1.1)`
        }}
      />

      {/* Layer 2: Moving Mist (Simulation with noise/gradients) */}
      <div className="absolute inset-0 z-0 opacity-20 bg-noise mix-blend-overlay" />
      <div className="absolute -inset-[100%] z-0 animate-fog-move opacity-30 select-none pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent blur-3xl transform scale-150" />
      </div>

      {/* Layer 3: Light Follow Effect */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-soft-light transition-transform duration-200 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(253, 230, 138, 0.2) 0%, transparent 70%)',
          left: '50%',
          top: '50%',
          transform: `translate(calc(-50% + ${mousePos.x * 40}px), calc(-50% + ${mousePos.y * 40}px))`
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-display text-5xl md:text-8xl font-thin mb-8 leading-tight tracking-wide animate-fade-in drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-br from-beige via-stone-100 to-stone-400">
          Restore <span className="italic font-normal text-stone-50">Balance</span>.<br />
          Heal Naturally.
        </h1>
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto font-light tracking-widest animate-fade-in-delay text-stone-200">
          Essential wellness through time-honored Traditional Chinese Medicine.
        </p>

        <button
          onClick={onBookConsultation}
          className="group relative px-10 py-4 bg-transparent overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_0_50px_-10px_rgba(253,230,138,0.3)] border border-beige/20 hover:border-soft-gold/50 animate-fade-in-delay-2"
        >
          <div className="absolute inset-0 w-full h-full bg-white/5 group-hover:bg-soft-gold/10 transition-colors duration-500 blur-sm" />
          <div className="relative flex items-center gap-4 text-beige tracking-[0.2em] uppercase text-sm font-medium group-hover:text-soft-gold transition-colors duration-300">
            Book Consultation
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float opacity-60">
        <p className="text-[10px] tracking-[0.3em] text-beige/80 mb-4 text-center uppercase">Scroll to Discover</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-beige/50 to-transparent mx-auto" />
      </div>
    </section>
  );
}
