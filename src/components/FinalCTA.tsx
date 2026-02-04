import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface FinalCTAProps {
  onBookConsultation: () => void;
}

export default function FinalCTA({ onBookConsultation }: FinalCTAProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(31, 61, 43, 0.85), rgba(78, 124, 100, 0.85)), url("https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <div className="w-1 h-12 bg-[#C9A44C] mx-auto mb-8" />
          <p className="font-display text-3xl md:text-4xl font-light italic mb-4 leading-relaxed">
            "Your wellness journey starts with a single step."
          </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Begin Your Healing Journey Today
        </h2>
        <p className="text-xl mb-10 opacity-95">
          Take the first step toward natural wellness and lasting vitality
        </p>

        <button
          onClick={onBookConsultation}
          className="bg-[#C9A44C] hover:bg-[#B8934A] text-[#1F3D2B] font-bold px-12 py-5 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 mb-12"
        >
          Book Your Consultation
          <ArrowRight className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/30">
          <div className="flex flex-col items-center">
            <Phone className="w-6 h-6 mb-3 text-[#C9A44C]" />
            <p className="text-sm opacity-75 mb-1">Call Us</p>
            <p className="font-semibold">(555) 123-4567</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-6 h-6 mb-3 text-[#C9A44C]" />
            <p className="text-sm opacity-75 mb-1">Email</p>
            <p className="font-semibold">hello@drzhaotcm.com</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6 mb-3 text-[#C9A44C]" />
            <p className="text-sm opacity-75 mb-1">Visit</p>
            <p className="font-semibold">123 Wellness Way, Suite 200</p>
          </div>
        </div>
      </div>
    </section>
  );
}
