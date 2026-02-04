import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onBookConsultation: () => void;
}

export default function Hero({ onBookConsultation }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 61, 43, 0.5), rgba(31, 61, 43, 0.6)), url("https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Restore Balance. Heal Naturally.
        </h1>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 animate-fade-in-delay">
          Experience the gentle power of Traditional Chinese Medicine to harmonize your body, mind, and spirit through time-honored healing practices.
        </p>
        <button
          onClick={onBookConsultation}
          className="bg-[#C9A44C] hover:bg-[#B8934A] text-[#1F3D2B] font-semibold px-10 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 animate-fade-in-delay-2"
        >
          Book Consultation
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}
