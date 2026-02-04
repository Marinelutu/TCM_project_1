export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Mei Lin Zhao"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A44C] rounded-full opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4E7C64] rounded-full opacity-20 -z-10" />
          </div>

          <div>
            <div className="inline-block px-4 py-2 bg-[#F5EFE6] rounded-full mb-6">
              <span className="text-sm font-semibold text-[#4E7C64] tracking-wide uppercase">
                Meet Your Practitioner
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1F3D2B] mb-6">
              Dr. Mei Lin Zhao
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                With over 14 years of dedicated practice, Dr. Zhao combines ancient wisdom with modern understanding to guide patients toward optimal wellness. Her patient-centered approach honors the unique healing journey of each individual.
              </p>
              <p>
                Trained in both Traditional Chinese Medicine and integrative health practices, she specializes in treating the root cause of imbalance rather than just symptoms. Dr. Zhao believes that true healing occurs when we address the whole person—body, mind, and spirit.
              </p>
              <p>
                Her compassionate care has helped hundreds of patients find relief from chronic conditions, restore vitality, and rediscover their natural state of balance and well-being.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="font-display text-xl text-[#1F3D2B] italic">
                "Every patient deserves personalized care that respects their unique path to wellness."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
