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
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4E7C64] mb-4">
            <Leaf className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">Our Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F3D2B] mb-4">
            Personalized Healing Pathways
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Traditional Chinese Medicine treatments tailored to your wellness journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#4E7C64] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[#1F3D2B] transition-colors duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#1F3D2B] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
