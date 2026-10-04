import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Ear, Stethoscope, Compass, Sparkles, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface NeithalApproachProps {
  onOpenAppointment: () => void;
}

export const NeithalApproach: React.FC<NeithalApproachProps> = ({ onOpenAppointment }) => {
  const steps = [
    {
      number: '01',
      title: 'LISTEN',
      subtitle: 'Understand the person behind the concern.',
      description: 'We begin with an unhurried consultation, listening deeply to your health history, emotional triggers, daily routine, and personal goals.',
      icon: <Ear className="w-5 h-5 text-neithal-gold-500" />,
    },
    {
      number: '02',
      title: 'ASSESS',
      subtitle: 'Explore symptoms, lifestyle and individual factors.',
      description: 'Senior physicians evaluate pulse (Nadi), tongue, eyes, skin, and metabolic Agni to map your baseline Prakriti and present imbalance (Vikriti).',
      icon: <Stethoscope className="w-5 h-5 text-neithal-gold-500" />,
    },
    {
      number: '03',
      title: 'PERSONALIZE',
      subtitle: 'Develop a care pathway suited to individual needs.',
      description: 'No cookie-cutter packages. Your treatment protocol, herbal prescriptions, and diet guidelines are compounded strictly for your body.',
      icon: <Compass className="w-5 h-5 text-neithal-gold-500" />,
    },
    {
      number: '04',
      title: 'TREAT',
      subtitle: 'Use appropriate Ayurvedic therapies & interventions.',
      description: 'Administering authentic classical therapies—Abhyanga, Kizhi, Shirodhara, or Panchakarma—performed by experienced therapists.',
      icon: <Sparkles className="w-5 h-5 text-neithal-gold-500" />,
    },
    {
      number: '05',
      title: 'RESTORE',
      subtitle: 'Support diet, lifestyle and overall wellbeing.',
      description: 'Integrating South Indian AHARA culinary habits, seasonal daily routines (Dinacharya), and soothing yoga practices.',
      icon: <RefreshCw className="w-5 h-5 text-neithal-gold-500" />,
    },
    {
      number: '06',
      title: 'FOLLOW UP',
      subtitle: 'Review the journey and refine the plan.',
      description: 'Continuous long-term oversight. Regular check-ins adapt treatment intensity as your body regains vital energy (Ojas).',
      icon: <CheckCircle2 className="w-5 h-5 text-neithal-gold-500" />,
    },
  ];

  return (
    <section id="neithal-approach" className="py-16 sm:py-24 bg-neithal-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE NEITHAL APPROACH"
          heading="Healthcare should begin with listening."
          supporting="A structured, individualized approach to care, combining traditional Ayurvedic wisdom with thoughtful modern patient experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-neithal-border shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-extrabold text-neithal-gold-500/80 group-hover:text-neithal-gold-500 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-neithal-cream-50 text-neithal-green-950 border border-neithal-border/40 group-hover:bg-neithal-green-950 group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-neithal-green-950 tracking-wide mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neithal-gold-500 mb-3">
                  {step.subtitle}
                </h4>
                <p className="text-sm text-neithal-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neithal-border/30 flex items-center justify-between text-xs font-semibold text-neithal-muted group-hover:text-neithal-green-950 transition-colors">
                <span>Step {idx + 1} of 6</span>
                <span className="w-2 h-2 rounded-full bg-neithal-gold-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onOpenAppointment}
          >
            Learn More & Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
