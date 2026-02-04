# Dr. Mei Lin Zhao - Traditional Chinese Medicine Website

A modern, conversion-focused single-page website for a Traditional Chinese Medicine practitioner. Built with React, TypeScript, Tailwind CSS, and Vite.

## Overview

This website prototype showcases Dr. Mei Lin Zhao's Traditional Chinese Medicine practice with a focus on trust-building, clear service presentation, and multiple conversion opportunities through strategically placed consultation booking CTAs.

## Design Specifications

### Color Palette
- **Primary**: Forest Green (#1F3D2B)
- **Secondary**: Jade Green (#4E7C64)
- **Background**: Warm Beige (#F5EFE6)
- **Accent**: Muted Gold (#C9A44C)
- **Text**: Dark charcoal for optimal readability

### Typography
- **Headlines**: Playfair Display (serif, elegant)
- **Body Text**: Inter (clean, highly readable)
- **Line Spacing**: 150% for body text, 120% for headings

### Visual Style
- Clean, minimalist layout with generous white space
- Natural imagery from Pexels (bamboo, tea, clinic settings)
- Professional photography with warm, natural tones
- Smooth scroll animations and hover interactions

## Features

### Page Sections

1. **Hero Section**
   - Full-width background with nature-inspired imagery
   - Clear value proposition: "Restore Balance. Heal Naturally."
   - Prominent CTA button for booking consultations
   - Animated scroll indicator

2. **Trust & Credentials**
   - 14 years of experience highlight
   - Professional certifications (DTCM, L.Ac, NCCAOM)
   - Three authentic patient testimonials with 5-star ratings
   - Trust badges in visually appealing grid

3. **Services Grid**
   - Six service cards with custom icons
   - Services: Acupuncture, Herbal Medicine, Stress Relief, Sleep Support, Pain Management, Hormonal Balance
   - Hover effects with smooth transitions
   - Clear, benefit-focused descriptions

4. **About the Practitioner**
   - Professional headshot (placeholder)
   - Warm, personal bio emphasizing experience and compassion
   - Patient-centered approach messaging
   - Inspirational quote

5. **Benefits Section**
   - Four key patient outcomes with imagery
   - Alternating layout for visual interest
   - Benefits: Reduce Stress, Improve Sleep, Relieve Pain, Balance Hormones
   - Hover effects on images

6. **Final CTA Section**
   - Inspirational quote: "Your wellness journey starts with a single step."
   - Large, prominent booking button
   - Contact information (phone, email, address)
   - Full-width background image with overlay

### Interactive Elements

- **Booking Modal**: Full-featured form for consultation requests
- **Sticky CTA Button**: Mobile-only floating button that appears on scroll
- **Scroll Animations**: Fade-in effects as sections enter viewport
- **Hover States**: Interactive elements throughout with smooth transitions
- **Smooth Scrolling**: Enhanced user experience with CSS smooth scroll

## Technology Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful, consistent icons

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with main CTA
│   ├── TrustCredentials.tsx  # Credentials and testimonials
│   ├── Services.tsx          # Service grid with hover effects
│   ├── About.tsx             # Practitioner bio and photo
│   ├── Benefits.tsx          # Patient outcomes section
│   ├── FinalCTA.tsx          # Final conversion section
│   ├── BookingModal.tsx      # Consultation booking form
│   ├── StickyCTA.tsx         # Mobile sticky button
│   └── ScrollAnimation.tsx   # Intersection observer wrapper
├── App.tsx                   # Main application component
├── index.css                 # Global styles and animations
└── main.tsx                  # Application entry point
```

## Design Decisions

### User Experience
- Multiple CTAs (4 total) placed strategically throughout the page
- Sticky mobile CTA appears after hero section for easy access
- Smooth animations provide polish without distraction
- Clear visual hierarchy guides visitors toward booking

### Conversion Optimization
- Trust indicators early in the page flow
- Testimonials with specific outcomes build credibility
- Service descriptions focus on benefits, not technical details
- Final CTA section creates urgency with inspirational messaging

### Responsive Design
- Mobile-first approach with breakpoints at sm, md, and lg
- Sticky CTA button only on mobile for better UX
- Images and layouts adapt seamlessly across devices
- Touch-friendly button sizes and spacing

### Accessibility
- Semantic HTML throughout
- Proper alt text for all images
- Sufficient color contrast ratios
- Keyboard navigation support

## Future Enhancements

Potential additions for production deployment:
- Integration with real booking system or calendar API
- Form validation and submission to backend
- Google Analytics or tracking integration
- Live chat widget for immediate questions
- Blog section for SEO and thought leadership
- Multi-language support
- Patient portal integration

## Performance

- Optimized images from Pexels CDN
- Minimal JavaScript bundle size
- Lazy loading for images below the fold
- CSS animations using GPU acceleration
- Production build gzipped to ~52KB JS

## Browser Support

Modern browsers supporting ES2020:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a prototype project for demonstration purposes.

## Credits

- Images: [Pexels](https://www.pexels.com)
- Icons: [Lucide React](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)
