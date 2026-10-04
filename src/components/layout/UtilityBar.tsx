import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const UtilityBar: React.FC = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpenNow(hour >= 9 && hour < 21);
    };
    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-neithal-green-950 text-neithal-cream-50 text-xs py-2 px-4 sm:px-6 lg:px-12 border-b border-neithal-gold-500/30 select-none">
      <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-2.5">
        {/* Left: Location & Real-Time Open Status */}
        <div className="flex flex-wrap items-center gap-3 text-neithal-cream-100 font-medium tracking-wide">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-neithal-gold-400 flex-shrink-0" />
            <span className="truncate max-w-[240px] sm:max-w-none">
              {t.locationHeader}
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-bold border border-neithal-gold-500/40">
            <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className={isOpenNow ? 'text-emerald-300' : 'text-neithal-cream-100'}>
              {isOpenNow ? t.openNow : t.closedNow}
            </span>
          </div>
        </div>

        {/* Right: Direct Call & Language Toggle */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto font-medium">
          <a
            href="tel:+919488023328"
            className="flex items-center gap-1.5 font-bold text-neithal-gold-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-neithal-gold-400" />
            <span className="text-xs">+91 94880 23328</span>
          </a>

          {/* BILINGUAL LANGUAGE SWITCHER TOGGLE */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neithal-gold-500 text-neithal-green-950 font-extrabold uppercase text-[11px] tracking-wider hover:bg-neithal-gold-400 transition-all shadow-sm"
            title="Switch Language / மொழியை மாற்றவும்"
          >
            <Globe className="w-3.5 h-3.5 text-neithal-green-950" />
            <span>{lang === 'en' ? 'தமிழ் (TA)' : 'English (EN)'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
