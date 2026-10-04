import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import treatmentsData from '../../data/treatments.json';
import { Treatment } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface TreatmentsSectionProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const TreatmentsSection: React.FC<TreatmentsSectionProps> = ({ onOpenAppointment }) => {
  const treatments: Treatment[] = treatmentsData;

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-neithal-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="EXPLORE NEITHAL CARE"
          heading="Care designed around you."
          supporting="Four core care pillars tailored to restore balance, vitality, and systemic physiological health."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="group flex flex-col justify-between h-full">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-neithal-gold-500 text-neithal-green-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                    {treatment.category}
                  </span>
                </div>

                <div className="p-8">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors mb-3">
                    {treatment.name}
                  </h3>
                  <p className="text-sm font-medium text-neithal-gold-500 mb-3">
                    {treatment.shortDescription}
                  </p>
                  <p className="text-sm text-neithal-muted leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2 flex items-center justify-between border-t border-neithal-border/40">
                <div className="flex items-center gap-1.5 text-xs text-neithal-green-950 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-neithal-gold-500" />
                  <span>Physician Consultation</span>
                </div>

                <button
                  onClick={() => {
                    const isPanchakarmaOrSpine = treatment.name.toLowerCase().includes('panchakarma') || treatment.name.toLowerCase().includes('spine') || treatment.name.toLowerCase().includes('basti');
                    const doctor = isPanchakarmaOrSpine ? 'Dr. Sathiyaraj N.' : 'Dr. Saranya K.';
                    onOpenAppointment(treatment.name, doctor);
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-neithal-green-950 hover:text-neithal-gold-500 transition-colors cursor-pointer"
                >
                  <span>Book Care</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
