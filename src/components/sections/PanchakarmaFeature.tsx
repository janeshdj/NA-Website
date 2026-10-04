import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import panchakarmaData from '../../data/panchakarma.json';
import { PanchakarmaProcedure } from '../../types';
import { ArrowRight, Flame, Sun, Activity, Wind, HeartPulse, CheckCircle } from 'lucide-react';

interface PanchakarmaFeatureProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const PanchakarmaFeature: React.FC<PanchakarmaFeatureProps> = ({ onOpenAppointment }) => {
  const procedures: PanchakarmaProcedure[] = panchakarmaData;
  const [selectedId, setSelectedId] = useState<string>(procedures[0].id);

  const selectedProcedure = procedures.find((p) => p.id === selectedId) || procedures[0];

  // Helper to render relevant specialized icon art for each Panchakarma procedure
  const getProcedureIcon = (id: string, isActive: boolean) => {
    const iconClass = `w-4 h-4 ${isActive ? 'text-neithal-green-950' : 'text-neithal-gold-400'}`;
    switch (id) {
      case 'vamana':
        return <Flame className={iconClass} />;
      case 'virechana':
        return <Sun className={iconClass} />;
      case 'basti':
        return <Activity className={iconClass} />;
      case 'nasya':
        return <Wind className={iconClass} />;
      case 'raktamokshana':
        return <HeartPulse className={iconClass} />;
      default:
        return <Flame className={iconClass} />;
    }
  };

  return (
    <section id="panchakarma" className="py-20 sm:py-28 bg-neithal-green-950 text-neithal-cream-50 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neithal-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neithal-green-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TRADITIONAL AYURVEDIC THERAPY"
          heading="Panchakarma"
          supporting="A structured Ayurvedic therapeutic approach traditionally used as part of individualized care under professional physician supervision."
          dark
        />

        {/* 5 Procedures Horizontal Badge Navigation with Centered Subtitle & Relevant Icons */}
        <div className="flex overflow-x-auto no-scrollbar gap-3 sm:gap-3.5 pb-4 mb-8 sm:mb-10 border-b border-white/10 touch-pan-x">
          {procedures.map((proc) => {
            const isActive = proc.id === selectedId;
            return (
              <button
                key={proc.id}
                onClick={() => setSelectedId(proc.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-center transition-all duration-300 flex flex-col items-center justify-center min-w-[145px] sm:min-w-[170px] flex-shrink-0 ${
                  isActive
                    ? 'bg-neithal-gold-500 text-neithal-green-950 shadow-lg scale-102 font-extrabold'
                    : 'bg-neithal-green-900/80 text-neithal-cream-200 hover:bg-neithal-green-800 border border-white/10'
                }`}
              >
                {/* Top Row: Relevant Icon + Name */}
                <div className="flex items-center gap-1.5 justify-center mb-0.5">
                  {getProcedureIcon(proc.id, isActive)}
                  <span className="text-xs font-extrabold tracking-wider uppercase">{proc.name}</span>
                </div>

                {/* Bottom Line: Centered English Subtitle */}
                <span className={`text-[10px] sm:text-[11px] font-medium tracking-tight text-center ${
                  isActive ? 'text-neithal-green-950/80' : 'text-neithal-gold-400/80'
                }`}>
                  {proc.englishTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center bg-neithal-green-900/60 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-white/10 shadow-2xl backdrop-blur-md">
          {/* Left Procedure Info (6 cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-block px-3 py-1 bg-neithal-gold-500/20 text-neithal-gold-300 rounded-full text-xs font-semibold uppercase tracking-widest border border-neithal-gold-500/30">
              {selectedProcedure.sanskritName}
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-tight">
              {selectedProcedure.name} — <span className="text-neithal-gold-400">{selectedProcedure.englishTitle}</span>
            </h3>

            <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed">
              {selectedProcedure.description}
            </p>

            {/* Key Benefits List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neithal-gold-400">
                Therapeutic Intent & Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {selectedProcedure.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neithal-cream-100">
                    <CheckCircle className="w-4 h-4 text-neithal-gold-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                className="w-full sm:w-auto justify-center py-3.5 text-sm"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onOpenAppointment(`Panchakarma: ${selectedProcedure.name}`, 'Dr. Sathiyaraj N.')}
              >
                Book Panchakarma Evaluation
              </Button>
            </div>
          </div>

          {/* Right Immersive Image (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group h-[260px] xs:h-[300px] sm:h-[400px]">
              <img
                src={selectedProcedure.image}
                alt={selectedProcedure.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-neithal-green-950/80 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/10 text-[11px] sm:text-xs text-neithal-cream-200">
                Administered under senior BAMS physician supervision in Heritage Town, Puducherry.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
