import React from 'react';
import { ShieldCheck, Users, Flower2 } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-neithal-gold-500" />,
      title: 'Trusted Care',
      subtitle: 'Since 2019',
    },
    {
      icon: <Users className="w-5 h-5 text-neithal-gold-500" />,
      title: 'Personalized',
      subtitle: 'Treatment Plans',
    },
    {
      icon: <Flower2 className="w-5 h-5 text-neithal-gold-500" />,
      title: 'Holistic',
      subtitle: 'Mind · Body · Life',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neithal-border/60">
      {indicators.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-neithal-cream-100 text-neithal-green-950 border border-neithal-border/60 flex-shrink-0 shadow-sm">
            {item.icon}
          </div>
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-neithal-green-950">
              {item.title}
            </h4>
            <p className="text-xs text-neithal-text font-semibold">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
