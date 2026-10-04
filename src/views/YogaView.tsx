import React from 'react';
import yogaData from '../data/yoga.json';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Sun, ArrowRight } from 'lucide-react';

interface YogaViewProps {
  onOpenAppointment: () => void;
}

export const YogaView: React.FC<YogaViewProps> = ({ onOpenAppointment }) => {
  const programs = yogaData;

  return (
    <div className="py-12 sm:py-20 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 space-y-12">
        
        {/* Header */}
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border-2 border-neithal-gold-500/40 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3.5 py-1 rounded-full border border-neithal-gold-500/30">
              KB-07 · YOGA & LIFESTYLE ARCHITECTURE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight">
              Therapeutic Yoga & Mind–Body Balance
            </h1>
            <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed">
              Condition-linked therapeutic movement, pranayama breathwork, and Dinacharya daily rhythms prescribed by senior BAMS physicians to complement your care plan.
            </p>
          </div>
        </div>

        {/* Yoga Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((prog) => (
            <Card key={prog.id} className="group flex flex-col justify-between h-full border-neithal-border/80 hover:border-neithal-gold-500">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/80 via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-neithal-gold-500 text-neithal-green-950 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    {prog.level}
                  </span>

                  <span className="absolute bottom-4 left-4 right-4 text-xs font-bold text-neithal-gold-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sun className="w-4 h-4 text-neithal-gold-400" />
                    <span>{prog.goal}</span>
                  </span>
                </div>

                <div className="p-8 space-y-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors">
                    {prog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neithal-text font-medium leading-relaxed">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-neithal-border/40">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-neithal-green-950 block">
                      Core Asana Sequence:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {prog.asanas.map((asana, idx) => (
                        <span key={idx} className="px-3 py-1 bg-neithal-cream-100 border border-neithal-border text-neithal-green-950 rounded-lg text-xs font-bold">
                          {asana}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-neithal-cream-50 border border-neithal-border/40 text-xs font-semibold text-neithal-green-950 space-y-1">
                    <span className="font-bold text-neithal-gold-500 uppercase tracking-wider block text-[10px]">
                      Pranayama & Duration
                    </span>
                    <p className="text-neithal-text">
                      <strong>Pranayama:</strong> {prog.pranayama} · <strong>Schedule:</strong> {prog.duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-8 pb-8 pt-2">
                <Button
                  variant="gold"
                  size="md"
                  className="w-full justify-center font-bold"
                  icon={<ArrowRight className="w-4 h-4" />}
                  onClick={onOpenAppointment}
                >
                  Request Therapeutic Yoga Guidance
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};
