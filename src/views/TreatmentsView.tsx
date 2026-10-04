import React from 'react';
import { PanchakarmaFeature } from '../components/sections/PanchakarmaFeature';
import { TreatmentsSection } from '../components/sections/TreatmentsSection';

interface TreatmentsViewProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const TreatmentsView: React.FC<TreatmentsViewProps> = ({ onOpenAppointment }) => {
  return (
    <div className="py-6 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border border-neithal-gold-500/30">
          <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3 py-1 rounded-full border border-neithal-gold-500/30">
            CLASSICAL THERAPEUTICS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mt-3">
            Panchakarma & Classical Ayurvedic Therapies
          </h1>
          <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed mt-2 max-w-3xl">
            Authentic 5-fold purification (Vamana, Virechana, Basti, Nasya, Raktamokshana) and restorative body therapies administered under BAMS physician oversight in Heritage Town, Puducherry.
          </p>
        </div>
      </div>

      <PanchakarmaFeature onOpenAppointment={onOpenAppointment} />
      <TreatmentsSection onOpenAppointment={onOpenAppointment} />
    </div>
  );
};
