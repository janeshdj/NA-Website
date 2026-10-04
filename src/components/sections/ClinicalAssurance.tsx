import React from 'react';
import { ShieldCheck, Leaf, Stethoscope, Sparkles } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export const ClinicalAssurance: React.FC = () => {
  const { t } = useLanguage();

  const standards = [
    {
      title: t.gmpCertifiedOils,
      desc: 'Classical formulations prepared according to Charaka & Sushruta Samhita guidelines.',
      icon: <Leaf className="w-5 h-5 text-neithal-green-950 group-hover:text-neithal-gold-400 transition-colors" />,
    },
    {
      title: t.physicianSupervised,
      desc: 'Every Panchakarma therapy session is evaluated and prescribed by qualified BAMS doctors.',
      icon: <Stethoscope className="w-5 h-5 text-neithal-green-950 group-hover:text-neithal-gold-400 transition-colors" />,
    },
    {
      title: t.singlePatientSterile,
      desc: 'Strict clinical hygiene protocols with single-patient sterile linens & equipment.',
      icon: <ShieldCheck className="w-5 h-5 text-neithal-green-950 group-hover:text-neithal-gold-400 transition-colors" />,
    },
    {
      title: t.zeroSynthetics,
      desc: 'Pure botanical ingredients with batch purity certification and zero unlabelled additives.',
      icon: <Sparkles className="w-5 h-5 text-neithal-green-950 group-hover:text-neithal-gold-400 transition-colors" />,
    },
  ];

  return (
    <section className="bg-neithal-cream-100 py-14 sm:py-20 border-t border-b border-neithal-border/60 relative overflow-hidden">
      {/* Background Ambient Gold Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-neithal-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-neithal-gold-600 bg-neithal-gold-100/90 px-4 py-1.5 rounded-full border border-neithal-gold-500/40 shadow-xs inline-block mb-3">
            CLINICAL SAFETY & QUALITY ASSURANCE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neithal-green-950 leading-tight">
            {t.clinicalSafetyAssurance}
          </h3>
          <p className="text-xs sm:text-sm text-neithal-muted font-medium leading-relaxed mt-2 max-w-2xl mx-auto">
            Charaka & Sushruta Samhita formulation protocols, BAMS physician oversight, and 100% sterile single-patient care.
          </p>
        </div>

        {/* 4 Crisp White & Gold Quality Assurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-neithal-gold-500/40 shadow-card hover:shadow-elevated hover:border-neithal-gold-500 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Gold Ribbon Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-neithal-gold-500/10 rounded-bl-full pointer-events-none" />

              <div>
                {/* Gold Icon Badge */}
                <div className="p-3.5 rounded-2xl bg-neithal-gold-100/80 border border-neithal-gold-500/40 w-fit mb-5 group-hover:bg-neithal-green-950 shadow-sm transition-all duration-300">
                  {item.icon}
                </div>

                {/* High Contrast Deep Emerald Serif Title */}
                <h4 className="font-serif text-xl sm:text-2xl font-extrabold text-neithal-green-950 group-hover:text-neithal-gold-600 transition-colors leading-snug">
                  {item.title}
                </h4>

                {/* Highly Legible Dark Body Text */}
                <p className="text-xs sm:text-sm text-neithal-text leading-relaxed font-medium mt-2">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer Stamp */}
              <div className="mt-6 pt-4 border-t border-neithal-border/50 flex items-center gap-1.5 text-[11px] font-extrabold text-neithal-green-950 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-neithal-gold-500 flex-shrink-0" />
                <span>Verified Clinical Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
