import React from 'react';
import { NeithalApproach } from '../components/sections/NeithalApproach';
import { DoctorsSection } from '../components/sections/DoctorsSection';
import { ClinicGallery } from '../components/sections/ClinicGallery';
import { CommunitySection } from '../components/sections/CommunitySection';

interface AboutViewProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenAppointment }) => {
  return (
    <div className="py-6 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border border-neithal-gold-500/30">
          <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3 py-1 rounded-full border border-neithal-gold-500/30">
            OUR HERITAGE & INSTITUTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mt-3">
            About Neithal Ayurveda
          </h1>
          <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed mt-2 max-w-3xl">
            Established in 2019 in Heritage Town, Puducherry. Rooted in traditional Tamil and classical Ayurveda, Neithal brings consultation, Panchakarma, pharmacy, and yoga together under a calm, modern healthcare environment.
          </p>
        </div>
      </div>

      <NeithalApproach onOpenAppointment={onOpenAppointment} />
      <DoctorsSection onOpenAppointment={onOpenAppointment} />
      <ClinicGallery />
      <CommunitySection />
    </div>
  );
};
