import { Brain, Moon, Activity, Sparkles } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Brain,
      title: 'Reduce Stress',
      description: 'Experience profound relaxation and mental clarity as treatments calm your nervous system and restore emotional balance.',
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Moon,
      title: 'Improve Sleep',
      description: 'Enjoy deeper, more restorative sleep naturally by addressing the underlying imbalances disrupting your rest.',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Activity,
      title: 'Relieve Pain',
      description: 'Find lasting relief from chronic pain through gentle, effective treatments that support your body natural healing.',
      image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Sparkles,
      title: 'Balance Hormones',
      description: 'Restore hormonal harmony and vitality with personalized treatments designed for your unique needs.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section className="py-20 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4E7C64] mb-4">
            <Sparkles className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">Your Wellness Benefits</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F3D2B] mb-4">
            Transform Your Health Naturally
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the lasting benefits of holistic healing
          </p>
        </div>

        <div className="space-y-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300`}
            >
              <div className="md:w-1/2 h-80 md:h-96 relative overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="w-16 h-16 bg-[#4E7C64] rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#1F3D2B] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
