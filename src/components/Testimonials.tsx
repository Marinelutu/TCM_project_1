import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        text: "After years of dealing with chronic back pain and trying numerous treatments, Dr. Zhao's holistic approach finally brought me relief. Her acupuncture sessions are truly transformative.",
        author: "Sarah J.",
        condition: "Chronic Pain Patient"
    },
    {
        text: "The herbal formulations tailored to my needs have improved my energy levels and sleep quality significantly. I feel more balanced than I have in a long time.",
        author: "Michael R.",
        condition: "Wellness Enthusiast"
    },
    {
        text: "I was skeptical about TCM at first, but the results speak for themselves. My stress and anxiety have reduced, and I feel much more centered in my daily life.",
        author: "Elena K.",
        condition: "Stress Management"
    }
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-32 bg-primary overflow-hidden">
            {/* Decorative Blur Backgrounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-12 inline-flex items-center justify-center">
                    <Quote className="w-12 h-12 text-gold/20" />
                </div>

                <div className="min-h-[300px] flex items-center justify-center">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`transition-all duration-1000 absolute w-full max-w-4xl px-6 ${i === activeIndex
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8 pointer-events-none'
                                }`}
                        >
                            <p className="font-display text-2xl md:text-3xl text-beige/90 leading-relaxed font-light italic mb-8">
                                "{t.text}"
                            </p>
                            <div className="space-y-1">
                                <p className="text-gold font-medium tracking-widest uppercase text-sm">{t.author}</p>
                                <p className="text-beige/40 text-xs tracking-[0.2em] uppercase">{t.condition}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center gap-3">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-12 h-1 bg-white/20 rounded-full transition-all duration-500 ${i === activeIndex ? 'bg-gold w-16' : 'hover:bg-white/40'
                                }`}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
