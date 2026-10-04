import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import conditionsData from '../../data/conditions.json';
import { ConditionCategory } from '../../types';
import { ArrowRight, ChevronRight, ShieldAlert } from 'lucide-react';

interface ConditionDiscoveryProps {
  onSelectCondition: (name: string) => void;
}

export const ConditionDiscovery: React.FC<ConditionDiscoveryProps> = ({ onSelectCondition }) => {
  const categories: ConditionCategory[] = conditionsData;
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  const selectedCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="conditions" className="py-16 sm:py-24 bg-neithal-cream-100 border-t border-b border-neithal-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="AREAS OF CARE"
          heading="Care that begins with understanding."
          supporting="Every person is different. Explore our areas of care and learn how Neithal approaches health concerns through an individualized Ayurvedic perspective."
        />

        {/* Category Selector Tabs */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 mb-8 border-b border-neithal-border/60">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-neithal-green-950 text-neithal-cream-50 shadow-md scale-102'
                    : 'bg-white text-neithal-muted hover:text-neithal-green-950 hover:bg-neithal-cream-50'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {selectedCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-neithal-border shadow-subtle hover:shadow-card hover:border-neithal-gold-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neithal-gold-500 bg-neithal-gold-100 px-2.5 py-1 rounded-full">
                    {selectedCategory.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-neithal-muted" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-neithal-green-950 mb-2">
                  {item.name}
                </h3>

                <p className="text-sm text-neithal-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="p-3.5 rounded-xl bg-neithal-cream-50 border border-neithal-border/40 text-xs text-neithal-green-950 space-y-1">
                  <span className="font-bold text-neithal-gold-500 uppercase tracking-wider block text-[10px]">
                    Ayurvedic Perspective
                  </span>
                  <p className="text-neithal-muted italic leading-relaxed">
                    "{item.ayurvedicPerspective}"
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-neithal-border/40">
                <button
                  onClick={() => onSelectCondition(item.name)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-neithal-green-950 hover:text-neithal-gold-500 transition-colors w-full justify-between"
                >
                  <span>Inquire About Care Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Medical Disclaimer Badge */}
        <div className="mt-10 p-4 rounded-xl bg-white/70 border border-neithal-border/60 flex items-start gap-3 text-xs text-neithal-muted">
          <ShieldAlert className="w-4 h-4 text-neithal-gold-500 flex-shrink-0 mt-0.5" />
          <p>
            Educational Notice: Ayurvedic consultations at Neithal provide individualized care pathways tailored to your body constitution (Prakriti). Specific therapeutic responses vary per individual.
          </p>
        </div>
      </div>
    </section>
  );
};
