import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import pharmacyData from '../../data/pharmacy.json';
import { PharmacyItem } from '../../types';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export const PharmacySection: React.FC = () => {
  const items: PharmacyItem[] = pharmacyData;

  const handlePharmacyInquiry = (itemTitle: string) => {
    const text = encodeURIComponent(
      `Hello Neithal Ayurveda, I would like to enquire about availability for "${itemTitle}" from your pharmacy.`
    );
    window.open(`https://wa.me/919488023328?text=${text}`, '_blank');
  };

  return (
    <section id="pharmacy" className="py-20 sm:py-28 bg-neithal-green-950 text-neithal-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="NEITHAL PHARMACY"
          heading="Traditional formulations. Thoughtfully delivered."
          supporting="Classical Kashayams, medicated Thailams, fresh churnas, and proprietary herbal formulations compounded under physician quality oversight."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-neithal-green-900/80 rounded-2xl border border-white/10 overflow-hidden shadow-2xl hover:border-neithal-gold-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950 via-transparent to-transparent" />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-neithal-gold-500 text-neithal-green-950 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neithal-gold-400 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-neithal-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neithal-cream-200/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Button
                  variant="gold"
                  size="sm"
                  className="w-full justify-center"
                  icon={<MessageCircle className="w-3.5 h-3.5" />}
                  onClick={() => handlePharmacyInquiry(item.title)}
                >
                  Inquire via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-neithal-green-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neithal-cream-200">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-neithal-gold-400 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-white text-sm">Authentic & Tested Formulations</h4>
              <p className="text-neithal-cream-200/80">Sourced from certified classical GMP manufacturing units & fresh local botanicals.</p>
            </div>
          </div>
          <a
            href="tel:+919488023328"
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors flex-shrink-0"
          >
            Call Pharmacy Counter
          </a>
        </div>
      </div>
    </section>
  );
};
