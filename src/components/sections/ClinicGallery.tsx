import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { MapPin, Camera, Check } from 'lucide-react';

export const ClinicGallery: React.FC = () => {
  const images = [
    {
      title: 'Heritage Town Exterior',
      caption: '#83 Chetty Street, MG Road Junction, Puducherry',
      url: '/clinic-exterior.jpg',
    },
    {
      title: 'Peaceful Reception & Waiting',
      caption: 'Serene Puducherry atmosphere with traditional teakwood elements & lotus uruli',
      url: '/clinic-reception.jpg',
    },
    {
      title: 'Private Consultation Room',
      caption: 'Unhurried pulse diagnosis (Nadi Pariksha) & root-cause diagnostic space',
      url: '/clinic-consultation.jpg',
    },
    {
      title: 'Panchakarma Therapy Suite',
      caption: 'Authentic teak Droni tables & brass Shirodhara vessels for Abhyanga & Kizhi',
      url: '/clinic-panchakarma.jpg',
    },
    {
      title: 'Authentic Herbal Pharmacy',
      caption: 'Classical Kashayams, Thailams, Arishtams & fresh herb formulations',
      url: '/clinic-pharmacy.jpg',
    },
    {
      title: 'Dedicated Care Team',
      caption: 'Qualified BAMS physicians and experienced patient therapy staff',
      url: '/clinic-team.jpg',
    },
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="py-16 sm:py-24 bg-neithal-cream-100 border-t border-b border-neithal-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLINIC & ATMOSPHERE"
          heading="A space created for care."
          supporting="Located in the heart of Heritage Town, Puducherry, Neithal brings consultation, Panchakarma therapies, pharmacy and wellness together under one roof."
        />

        {/* Interactive Gallery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Featured View */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-card border border-neithal-border h-[380px] sm:h-[480px]">
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neithal-gold-500 mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span>{activeImage.title}</span>
              </div>
              <p className="text-xs text-neithal-muted font-medium">
                {activeImage.caption}
              </p>
            </div>
          </div>

          {/* Thumbnails Grid (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {images.map((img, idx) => {
              const isSelected = img.title === activeImage.title;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative rounded-xl overflow-hidden h-28 border-2 transition-all duration-300 ${
                    isSelected
                      ? 'border-neithal-gold-500 shadow-md scale-102 ring-2 ring-neithal-gold-500/30'
                      : 'border-transparent opacity-80 hover:opacity-100 hover:border-neithal-border'
                  }`}
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-neithal-green-950/20" />
                  {isSelected && (
                    <div className="absolute top-2 right-2 bg-neithal-gold-500 text-neithal-green-950 p-1 rounded-full">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white truncate text-left drop-shadow">
                    {img.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-neithal-border flex flex-wrap items-center justify-between gap-4 text-xs text-neithal-green-950">
          <div className="flex items-center gap-2 font-medium">
            <MapPin className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
            <span>Visit us at #83, Chetty Street, MG Road Junction, Heritage Town, Puducherry – 605001</span>
          </div>
          <a
            href="https://maps.google.com/?q=83+Chetty+Street+Puducherry"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-neithal-cream-100 text-neithal-green-950 font-bold hover:bg-neithal-gold-500 transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
};
