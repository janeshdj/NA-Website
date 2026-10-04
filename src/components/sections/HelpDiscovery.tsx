import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ArrowRight, Activity, Flower, HeartPulse } from 'lucide-react';

interface HelpDiscoveryProps {
  onNavigate?: (view: string, subCategory?: string, searchQuery?: string, targetId?: string) => void;
}

export const HelpDiscovery: React.FC<HelpDiscoveryProps> = ({ onNavigate }) => {
  const choices = [
    {
      title: 'A Health Concern',
      subtitle: 'Explore conditions and how Ayurveda may support your care journey.',
      cta: 'Browse Conditions',
      view: 'conditions',
      icon: <Activity className="w-6 h-6 text-neithal-gold-500" />,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'A Treatment',
      subtitle: 'Discover our therapies and classical 5-fold Panchakarma programs.',
      cta: 'Explore Treatments',
      view: 'treatments',
      icon: <Flower className="w-6 h-6 text-neithal-gold-500" />,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'A Wellness Journey',
      subtitle: 'Support your long-term wellbeing with Ayurveda, therapeutic yoga and AHARA.',
      cta: 'Explore Wellness',
      view: 'ahara',
      icon: <HeartPulse className="w-6 h-6 text-neithal-gold-500" />,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-neithal-cream-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="YOUR WELLBEING MATTERS"
          heading="What would you like help with?"
          supporting="Find the right path for your health journey."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {choices.map((item, idx) => (
            <Card key={idx} className="group flex flex-col justify-between h-full border-neithal-border/70 hover:border-neithal-gold-500">
              <div>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md">
                    {item.icon}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base font-medium text-neithal-text leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="px-7 pb-7 pt-2">
                <button
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(item.view);
                    } else {
                      window.location.hash = item.view;
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors cursor-pointer"
                >
                  <span>{item.cta}</span>
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
