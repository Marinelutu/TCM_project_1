import { Award, Users, Heart, Star } from 'lucide-react';

export default function TrustCredentials() {
  const credentials = [
    { icon: Award, text: 'DTCM Certified' },
    { icon: Award, text: 'Licensed Acupuncturist' },
    { icon: Award, text: 'NCCAOM Diplomate' },
  ];

  const testimonials = [
    {
      text: "Dr. Zhao's holistic approach helped me overcome chronic migraines that I'd struggled with for years. I finally feel like myself again.",
      author: "Sarah M.",
      rating: 5,
    },
    {
      text: "After just a few sessions, my sleep quality improved dramatically. Her knowledge and gentle care are truly remarkable.",
      author: "James T.",
      rating: 5,
    },
    {
      text: "I was skeptical at first, but the results speak for themselves. My stress levels are manageable, and I feel more balanced every day.",
      author: "Linda K.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#4E7C64] mb-4">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">Trusted Expertise</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F3D2B] mb-4">
            14 Years of Healing Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Certified expertise meets compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-[#F5EFE6] rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-[#4E7C64] rounded-full flex items-center justify-center mb-4">
                <credential.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#1F3D2B]">{credential.text}</h3>
            </div>
          ))}
        </div>

        <div className="bg-[#F5EFE6] rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Users className="w-6 h-6 text-[#4E7C64]" />
            <h3 className="font-display text-2xl font-bold text-[#1F3D2B]">What Our Patients Say</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C9A44C] text-[#C9A44C]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-[#1F3D2B]">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
