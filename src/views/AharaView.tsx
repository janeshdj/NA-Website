import React from 'react';
import { AharaSection } from '../components/sections/AharaSection';

export const AharaView: React.FC = () => {
  return (
    <div className="py-6 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border border-neithal-gold-500/30">
          <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3 py-1 rounded-full border border-neithal-gold-500/30">
            HERITAGE NUTRITION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mt-3">
            Neithal AHARA — Food & Lifestyle Architecture
          </h1>
          <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed mt-2 max-w-3xl">
            Integrating ancient Tamil Sangam and South Indian culinary principles with individual Agni digestive fire balancing. Food as everyday sustenance ("Ahara is Aushadha").
          </p>
        </div>
      </div>

      <AharaSection />
    </div>
  );
};
