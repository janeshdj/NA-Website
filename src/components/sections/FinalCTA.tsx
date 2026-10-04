import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenAppointment: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAppointment }) => {
  return (
    <section className="py-20 sm:py-24 bg-neithal-green-950 text-neithal-cream-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neithal-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neithal-green-800/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neithal-gold-500/20 text-neithal-gold-300 rounded-full text-xs font-semibold uppercase tracking-widest border border-neithal-gold-500/30">
          <Sparkles className="w-3.5 h-3.5 text-neithal-gold-400" />
          <span>YOUR WELLBEING STARTS HERE</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Begin your journey with Neithal.
        </h2>

        <p className="text-base sm:text-lg text-neithal-cream-200/90 leading-relaxed max-w-2xl mx-auto">
          Speak with our team and discover the right starting point for your care—whether in-person at Heritage Town, Puducherry or via online physician consultation.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onOpenAppointment}
          >
            Book a Consultation
          </Button>

          <a href="tel:+919488023328">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
              icon={<Phone className="w-4 h-4 text-neithal-gold-400" />}
            >
              Call +91 94880 23328
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
