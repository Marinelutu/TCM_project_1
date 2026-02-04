import { useState } from 'react';
import Hero from './components/Hero';
import TrustCredentials from './components/TrustCredentials';
import Services from './components/Services';
import About from './components/About';
import Benefits from './components/Benefits';
import FinalCTA from './components/FinalCTA';
import BookingModal from './components/BookingModal';
import StickyCTA from './components/StickyCTA';
import ScrollAnimation from './components/ScrollAnimation';

import QiTrail from './components/QiTrail';
import Testimonials from './components/Testimonials';
import DiagnosticFunnel from './components/DiagnosticFunnel';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);

  const handleBookConsultation = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-beige selection:bg-gold/30">
      <QiTrail />

      <Hero onBookConsultation={handleBookConsultation} />

      <ScrollAnimation>
        <TrustCredentials />
      </ScrollAnimation>

      <ScrollAnimation>
        <Services />
      </ScrollAnimation>

      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>

      <ScrollAnimation>
        <About />
      </ScrollAnimation>

      <ScrollAnimation>
        <Benefits />
      </ScrollAnimation>

      <ScrollAnimation>
        <FinalCTA onBookConsultation={handleBookConsultation} />
      </ScrollAnimation>

      <StickyCTA onClick={handleBookConsultation} />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <DiagnosticFunnel
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
      />
    </div>
  );
}

export default App;
