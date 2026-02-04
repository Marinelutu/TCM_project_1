import { Activity, Leaf, Sparkles, Moon, Heart, Droplets } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Activity,
      title: 'Acupuncture',
      description: 'Precise needle therapy to restore energy flow and promote natural healing throughout the body.',
    },
    {
      icon: Leaf,
      title: 'Herbal Medicine',
      description: 'Custom herbal formulations tailored to your unique constitution and health goals.',
    },
    {
      icon: Sparkles,
      title: 'Stress Relief',
      description: 'Holistic techniques to calm the nervous system and restore inner peace and balance.',
    },
    {
      icon: Moon,
      title: 'Sleep Support',
      description: 'Natural approaches to improve sleep quality and address insomnia at its root cause.',
    },
    {
      icon: Heart,
      title: 'Pain Management',
      description: 'Drug-free solutions for chronic pain, including back pain, headaches, and joint discomfort.',
    },
    {
      icon: Droplets,
      title: 'Hormonal Balance',
      description: 'Gentle therapies to support hormonal health throughout all life stages and transitions.',
    },
  ];

  return (
    <section className="relative py-32 bg-beige overflow-hidden">
      {/* Top Organic Divider (Wave) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[150px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-beige"></path>
        </svg>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 text-secondary mb-6 animate-fade-in">
            <Leaf className="w-5 h-5 rotate-12" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase">Our Services</span>
            <Leaf className="w-5 h-5 -rotate-12" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-normal text-primary mb-6 animate-fade-in-delay">
            Personalized <span className="italic">Healing</span> Pathways
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-delay-2">
            Comprehensive Traditional Chinese Medicine treatments tailored to your wellness journey, grounded in ancient wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-sm p-10 rounded-2xl border border-white/60 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(201,164,76,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-500 text-secondary group-hover:text-gold">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-primary mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed font-light group-hover:text-stone-800">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Petals/Leaves (Decoration) */}
      <div className="absolute top-40 right-10 opacity-20 animate-float pointer-events-none">
        <Leaf className="w-12 h-12 text-secondary rotate-45" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 animate-pulse-slow pointer-events-none">
        <Leaf className="w-24 h-24 text-gold -rotate-12" />
      </div>
    </section>
  );
}
