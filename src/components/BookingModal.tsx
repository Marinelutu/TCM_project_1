import { X, Calendar, User, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import { useState } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/50 backdrop-blur-md animate-fade-in" role="dialog" aria-modal="true">
      <div className="relative bg-[#fafaf9] rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in border border-white/50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" aria-hidden="true" />

        <div className="sticky top-0 bg-[#fafaf9]/80 backdrop-blur-md z-20 p-6 px-8 border-b border-stone-100 flex justify-between items-center rounded-t-[2rem]">
          <div>
            <h2 className="font-display text-3xl text-primary">Book Consultation</h2>
            <p className="text-sm text-secondary tracking-wider uppercase mt-1">Begin your wellness journey</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="hover:bg-stone-200/50 p-2 rounded-full transition-colors duration-300 text-stone-500 hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 relative z-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="name" className="block text-xs font-semibold text-secondary tracking-widest uppercase mb-2 ml-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden="true" />
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all placeholder:text-stone-300 text-stone-700"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-secondary tracking-widest uppercase mb-2 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden="true" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all placeholder:text-stone-300 text-stone-700"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-secondary tracking-widest uppercase mb-2 ml-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden="true" />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all placeholder:text-stone-300 text-stone-700"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="preferredDate" className="block text-xs font-semibold text-secondary tracking-widest uppercase mb-2 ml-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" aria-hidden="true" />
                    <input
                      id="preferredDate"
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all text-stone-700"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-xs font-semibold text-secondary tracking-widest uppercase mb-2 ml-1">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-stone-400" aria-hidden="true" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all placeholder:text-stone-300 text-stone-700 resize-none"
                      placeholder="Health concerns (Optional)"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary text-beige font-medium tracking-widest uppercase py-4 rounded-xl text-sm transition-all duration-300 shadow-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-beige/30 border-t-beige rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : 'Confirm Booking'}
                </button>
                <p className="text-xs text-stone-400 text-center mt-4">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-display text-3xl text-primary mb-4">
                Request Received
              </h3>
              <p className="text-lg text-stone-600 mb-2 font-light">
                Thank you for choosing Dr. Zhao's practice.
              </p>
              <p className="text-stone-500 font-light">
                We will be in touch shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
