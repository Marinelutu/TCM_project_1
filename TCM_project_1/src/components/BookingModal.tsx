import { X, Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';
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

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="sticky top-0 bg-[#1F3D2B] text-white p-6 rounded-t-2xl flex justify-between items-center">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Book Your Consultation</h2>
            <p className="text-sm opacity-90">Begin your wellness journey today</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] mb-2">
                  <User className="w-4 h-4 text-[#4E7C64]" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4E7C64] focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] mb-2">
                  <Mail className="w-4 h-4 text-[#4E7C64]" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4E7C64] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] mb-2">
                  <Phone className="w-4 h-4 text-[#4E7C64]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4E7C64] focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] mb-2">
                  <Calendar className="w-4 h-4 text-[#4E7C64]" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4E7C64] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B] mb-2">
                  <MessageSquare className="w-4 h-4 text-[#4E7C64]" />
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#4E7C64] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your health concerns or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A44C] hover:bg-[#B8934A] text-[#1F3D2B] font-bold py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Confirm Booking
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll contact you within 24 hours to confirm your appointment
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#4E7C64] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold text-[#1F3D2B] mb-4">
                Booking Request Received!
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                Thank you for choosing Dr. Zhao's Traditional Chinese Medicine practice.
              </p>
              <p className="text-gray-500">
                We'll be in touch shortly to confirm your consultation.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
