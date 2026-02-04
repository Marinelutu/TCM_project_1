import { Leaf } from 'lucide-react';

export default function About() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Top Organic Divider (Wave) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]" aria-hidden="true">
        <svg className="relative block w-[calc(100%+1.3px)] h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" className="fill-white" opacity="0.3"></path>
          <path d="M0,0V15.81C13,36.92,54.55,50.15,88.42,48.23c95.21-5.39,150.36-67.68,261-68,110.15-.3,165.79,62.63,261,68a275.64,275.64,0,0,0,88.42-12.42V0Z" className="fill-white"></path>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-gold/20 rounded-[2rem] blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img
                src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?auto=format&fit=crop&q=80"
                alt="Dr. Mei Lin Zhao"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay with noise */}
              <div className="absolute inset-0 bg-noise opacity-10" aria-hidden="true" />
            </div>

            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse-slow" aria-hidden="true" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-60 -z-10" aria-hidden="true" />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 rounded-full mb-8">
              <Leaf className="w-4 h-4 text-secondary" />
              <span className="text-xs font-semibold text-secondary tracking-[0.2em] uppercase">
                Meet Your Practitioner
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-6xl font-normal text-primary mb-8 leading-tight">
              Dr. Mei Lin <span className="italic text-secondary">Zhao</span>
            </h2>

            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-light">
              <p>
                With over <span className="font-medium text-primary">14 years</span> of dedicated practice, Dr. Zhao combines ancient wisdom with modern understanding to guide patients toward optimal wellness. Her patient-centered approach honors the unique healing journey of each individual.
              </p>
              <p>
                Trained in both Traditional Chinese Medicine and integrative health practices, she specializes in treating the root cause of imbalance rather than just symptoms. Dr. Zhao believes that true healing occurs when we address the whole person—body, mind, and spirit.
              </p>
              <p className="bg-stone-50 p-6 rounded-xl border-l-4 border-gold/50 italic text-stone-700">
                "Our bodies have an innate intelligence to heal. My role is simply to remove the obstacles and gently guide that energy back to its natural flow."
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-stone-100 flex items-center gap-4">
              <div className="h-px bg-stone-200 flex-1" />
              <p className="font-display text-2xl text-primary/40 italic">Since 2010</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
