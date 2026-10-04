import React from 'react';
import { Stethoscope, Sparkles, HeartPulse, Utensils, Sun, Pill } from 'lucide-react';

export const ServiceStrip: React.FC = () => {
  const services = [
    {
      title: 'AYURVEDA',
      subtitle: 'Consultation & Care',
      icon: <Stethoscope className="w-5 h-5 text-neithal-gold-500" />,
      href: '#treatments',
    },
    {
      title: 'PANCHAKARMA',
      subtitle: 'Detox & Rejuvenation',
      icon: <Sparkles className="w-5 h-5 text-neithal-gold-500" />,
      href: '#panchakarma',
    },
    {
      title: 'THERAPIES',
      subtitle: 'Traditional Treatments',
      icon: <HeartPulse className="w-5 h-5 text-neithal-gold-500" />,
      href: '#treatments',
    },
    {
      title: 'AHARA',
      subtitle: 'Food & Lifestyle',
      icon: <Utensils className="w-5 h-5 text-neithal-gold-500" />,
      href: '#ahara',
    },
    {
      title: 'YOGA',
      subtitle: 'Mind–Body Balance',
      icon: <Sun className="w-5 h-5 text-neithal-gold-500" />,
      href: '#treatments',
    },
    {
      title: 'PHARMACY',
      subtitle: 'Authentic Formulations',
      icon: <Pill className="w-5 h-5 text-neithal-gold-500" />,
      href: '#pharmacy',
    },
  ];

  return (
    <section className="bg-neithal-cream-100 border-t border-b border-neithal-border/60 py-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-6 gap-4 pb-2 lg:pb-0">
          {services.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="flex-shrink-0 w-48 lg:w-auto p-4 rounded-2xl bg-white hover:bg-neithal-cream-50 border border-neithal-border/70 hover:border-neithal-gold-500 transition-all duration-300 shadow-subtle hover:shadow-card group flex items-center gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-neithal-cream-100 group-hover:bg-neithal-green-950 group-hover:text-white transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-extrabold tracking-widest uppercase text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-neithal-text truncate font-semibold mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
