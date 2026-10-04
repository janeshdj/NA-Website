import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { TrustIndicators } from './TrustIndicators';
import { GoogleRatingBadge } from '../ui/GoogleRatingBadge';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onNavigate?: (view: string, subCategory?: string, searchQuery?: string, targetId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointment, onNavigate }) => {
  return (
    <section id="hero" className="relative bg-neithal-cream-50 overflow-hidden pt-8 pb-16 lg:py-20 border-b border-neithal-border/40">
      {/* Decorative Golden Emblem Watermark Glow */}
      <motion.div
        className="absolute top-10 right-10 w-[500px] h-[500px] opacity-10 pointer-events-none hidden lg:block"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
      >
        <img src="/neithal-logo.png" alt="Neithal Watermark" className="w-full h-full object-contain filter drop-shadow-2xl" />
      </motion.div>

      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-neithal-gold-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-neithal-green-800/10 rounded-full blur-3xl pointer-events-none" />

      {/* Expanded Container Width to 1440px */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center min-h-[520px] sm:min-h-[580px]">
          
          {/* Left Narrative Column (5 cols / 12) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 sm:space-y-7">
            
            {/* Eyebrow Badge & Live Google Rating Badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Badge variant="gold" className="px-3 py-1 text-[11px] sm:text-xs font-extrabold tracking-widest text-neithal-green-950 shadow-sm border border-neithal-gold-500/40">
                <Sparkles className="w-3.5 h-3.5 text-neithal-gold-500 mr-1" />
                AYURVEDA FOR A BETTER TOMORROW
              </Badge>
              <GoogleRatingBadge variant="light" />
            </div>

            {/* High-Contrast Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neithal-green-950 leading-[1.1]">
                Traditional Wisdom. <br />
                <span className="text-neithal-green-800">Modern Care.</span>
              </h1>

              {/* Crisp Dark Supporting Copy */}
              <p className="text-base sm:text-xl font-medium text-neithal-text leading-relaxed pt-1">
                A more personal approach to Ayurvedic care.
              </p>

              {/* High-Contrast Secondary Descriptor Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 bg-neithal-green-950 text-neithal-gold-400 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-widest pt-1">
                Ayurveda · Panchakarma · Pharmacy · Yoga
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full">
              <Button
                variant="primary"
                size="lg"
                className="bg-neithal-green-950 text-white hover:bg-neithal-green-900 font-bold px-8 shadow-md justify-center py-3.5 text-sm"
                icon={<ArrowRight className="w-4 h-4 text-neithal-gold-400" />}
                onClick={onOpenAppointment}
              >
                Book a Consultation
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="border-neithal-green-950/40 text-neithal-green-950 font-bold px-6 justify-center w-full sm:w-auto py-3.5 text-sm hover:bg-neithal-green-950 hover:text-white transition-all cursor-pointer"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('treatments');
                  } else {
                    window.location.hash = 'treatments';
                  }
                }}
              >
                Explore Treatments
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-2 sm:pt-4">
              <TrustIndicators />
            </div>

            {/* Bottom Location Indicator */}
            <div className="flex items-center gap-2 text-xs font-bold text-neithal-green-950 pt-2 border-t border-neithal-border/50">
              <MapPin className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
              <span>Heritage Town, Puducherry · Established 2019</span>
            </div>
          </div>

          {/* Right Immersive Human Clinic Image (7 cols / 12) */}
          <div className="lg:col-span-7 xl:col-span-7 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border border-neithal-border/80 group">
              
              {/* Main Clinic Doctor Image */}
              <img
                src="/hero-consultation.jpg"
                alt="Neithal Ayurveda Doctor Consultation in Heritage Town Puducherry"
                className="w-full h-[320px] xs:h-[380px] sm:h-[500px] lg:h-[560px] object-cover transform group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/90 via-neithal-green-950/20 to-transparent" />

              {/* FLOATING HIGH-CONTRAST PURE WHITE & GOLD DOCTOR CARD */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white shadow-2xl rounded-xl sm:rounded-2xl p-3 sm:p-5 border-2 border-neithal-gold-500/60 flex items-center justify-between gap-3 sm:gap-4 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-neithal-gold-500 flex-shrink-0 shadow-md bg-neithal-green-950">
                    <img
                      src="/dr-saranya.jpg"
                      alt="Dr. Saranya K. Senior Ayurveda Physician"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg sm:text-2xl font-extrabold text-neithal-green-950 leading-tight">
                      Dr. Saranya K. & Team
                    </h4>
                    <p className="text-[11px] sm:text-sm text-neithal-text font-bold mt-0.5">
                      Senior Ayurveda Physicians · BAMS
                    </p>
                  </div>
                </div>

                <div className="hidden xs:block text-right flex-shrink-0">
                  <span className="inline-block px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-neithal-gold-500 text-neithal-green-950 rounded-xl text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shadow-sm">
                    In-Person & Online
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
