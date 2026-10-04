import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import aharaData from '../../data/ahara.json';
import { AharaPillar } from '../../types';
import { Utensils, Sparkles } from 'lucide-react';

export const AharaSection: React.FC = () => {
  const pillars: AharaPillar[] = aharaData;

  return (
    <section id="ahara" className="py-16 sm:py-24 bg-neithal-cream-100 border-t border-b border-neithal-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NEITHAL AHARA"
          heading="Food is part of the journey."
          supporting="Discover a thoughtful approach to food, nutrition and everyday living inspired by Ayurvedic principles and adapted to modern life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl border border-neithal-border overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-neithal-green-950 uppercase tracking-widest flex items-center gap-1">
                    <Utensils className="w-3 h-3 text-neithal-gold-500" />
                    <span>{pillar.subtitle}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neithal-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-neithal-gold-500">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ayurvedic Culinary Wisdom</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heritage South Indian Culinary Highlight */}
        <div className="mt-12 bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 lg:p-10 border border-neithal-gold-500/30 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400">
              Puducherry & South Indian Traditions
            </span>
            <h3 className="font-serif text-3xl font-bold text-white leading-snug">
              "Ahara is Aushadha" — Food as Everyday Sustenance
            </h3>
            <p className="text-sm text-neithal-cream-200/90 leading-relaxed">
              We guide patients in utilizing native herbs, South Indian traditional spices (turmeric, pepper, ginger, curry leaves), and fermented rice preparations to sustain digestive Agni without drastic diet restrictions.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neithal-gold-500 text-neithal-green-950 text-xs font-bold uppercase tracking-wider hover:bg-neithal-gold-400 transition-all shadow-md"
            >
              <span>Request AHARA Guidance</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
