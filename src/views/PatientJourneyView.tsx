import React from 'react';
import journeyData from '../data/patient-journey.json';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PatientJourneyViewProps {
  onOpenAppointment: () => void;
}

export const PatientJourneyView: React.FC<PatientJourneyViewProps> = ({ onOpenAppointment }) => {
  const steps = journeyData;

  return (
    <div className="py-12 sm:py-20 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border-2 border-neithal-gold-500/40 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3.5 py-1 rounded-full border border-neithal-gold-500/30">
              KB-08 · CLINICAL CARE & PATIENT 360
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight">
              One Patient. One Connected Care Journey.
            </h1>
            <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed">
              How discovery, BAMS pulse diagnosis, Panchakarma therapy execution, AHARA nutrition, and long-term Patient 360 follow-ups work together as a unified healthcare system.
            </p>
          </div>
        </div>

        {/* 6 Steps Connected Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border-2 border-neithal-border hover:border-neithal-gold-500 shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-4xl font-extrabold text-neithal-gold-500">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-green-950 bg-neithal-gold-100 px-3 py-1 rounded-full border border-neithal-gold-500/30">
                    {item.phase}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-neithal-green-950 mb-3 group-hover:text-neithal-gold-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neithal-text font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neithal-border/40 flex items-center justify-between text-xs font-bold text-neithal-green-950">
                <span>Phase {idx + 1} of 6</span>
                <CheckCircle2 className="w-4 h-4 text-neithal-gold-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 border-2 border-neithal-gold-500/50 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-serif text-3xl font-extrabold text-neithal-green-950">
              Ready to begin your personalized care journey?
            </h3>
            <p className="text-sm font-medium text-neithal-text leading-relaxed">
              Schedule an unhurried 45-minute consultation with senior BAMS physicians at Heritage Town, Puducherry or online tele-health.
            </p>
          </div>
          <Button
            variant="gold"
            size="lg"
            className="px-8 font-extrabold uppercase tracking-wider flex-shrink-0"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onOpenAppointment}
          >
            Start Your Journey
          </Button>
        </div>

      </div>
    </div>
  );
};
