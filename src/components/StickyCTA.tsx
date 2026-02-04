import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

interface StickyTAProps {
  onClick: () => void;
}

export default function StickyCTA({ onClick }: StickyTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-50 bg-[#C9A44C] hover:bg-[#B8934A] text-[#1F3D2B] font-semibold px-6 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-2 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <Calendar className="w-5 h-5" />
      <span>Book Now</span>
    </button>
  );
}
