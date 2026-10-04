import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import campsData from '../../data/camps.json';
import { CommunityCamp } from '../../types';
import { Heart, MapPin } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const camps: CommunityCamp[] = campsData;

  return (
    <section className="py-16 sm:py-24 bg-neithal-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="BEYOND THE CLINIC"
          heading="Serving beyond the consultation room."
          supporting="Free community medical camps, youth nutrition workshops, and public yoga initiatives across Puducherry."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {camps.map((camp) => (
            <Card key={camp.id} className="group flex flex-col justify-between h-full">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-neithal-gold-500 text-neithal-green-950 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{camp.date}</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-neithal-muted mb-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-neithal-gold-500" />
                    <span>{camp.location}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors mb-2">
                    {camp.title}
                  </h3>

                  <p className="text-xs text-neithal-muted leading-relaxed">
                    {camp.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neithal-green-950 bg-neithal-cream-100 px-3 py-1 rounded-md border border-neithal-border inline-block">
                  Community Initiative
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
