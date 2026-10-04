import React, { useState, useEffect } from 'react';
import conditionsData from '../data/conditions.json';
import { ConditionCategory } from '../types';
import { ArrowRight, ShieldAlert, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface ConditionsViewProps {
  onOpenAppointment: (condition?: string, doctorName?: string) => void;
  initialCategory?: string;
  initialQuery?: string;
}

export const ConditionsView: React.FC<ConditionsViewProps> = ({
  onOpenAppointment,
  initialCategory = 'all',
  initialQuery = '',
}) => {
  const categories: ConditionCategory[] = conditionsData;
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);

  useEffect(() => {
    setActiveCategory(initialCategory || 'all');
    setSearchQuery(initialQuery || '');
    if (initialCategory !== 'all' || initialQuery !== '') {
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  }, [initialCategory, initialQuery]);

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    items: cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.ayurvedicPerspective.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => (activeCategory === 'all' || cat.id === activeCategory) && cat.items.length > 0);

  return (
    <div className="py-12 sm:py-20 bg-neithal-cream-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* View Header */}
        <div className="bg-neithal-green-950 text-neithal-cream-50 rounded-3xl p-8 sm:p-12 border border-neithal-gold-500/30 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-3 py-1 rounded-full border border-neithal-gold-500/30">
              CLINICAL CARE DIRECTORY
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight">
              Areas of Care & Clinical Pathways
            </h1>
            <p className="text-sm sm:text-base text-neithal-cream-200/90 leading-relaxed">
              Explore how classical Ayurveda approaches chronic health concerns through root-cause Prakriti diagnostics, Panchakarma, and custom AHARA nutrition.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-neithal-border shadow-subtle">
          {/* Category Pills */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full sm:w-auto touch-pan-x pb-1 sm:pb-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-neithal-green-950 text-neithal-cream-50'
                  : 'bg-neithal-cream-100 text-neithal-muted hover:text-neithal-green-950'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-neithal-green-950 text-neithal-cream-50'
                    : 'bg-neithal-cream-100 text-neithal-muted hover:text-neithal-green-950'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neithal-muted absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search condition..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-neithal-border bg-neithal-cream-50 text-base sm:text-xs focus:outline-none focus:ring-2 focus:ring-neithal-gold-500 text-neithal-green-950"
            />
          </div>
        </div>

        {/* Condition Grid Output */}
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              <div className="border-b border-neithal-border/60 pb-3 flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold text-neithal-green-950">
                  {cat.name}
                </h2>
                <span className="text-xs text-neithal-muted font-semibold">
                  {cat.items.length} Care Pathways
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-neithal-border shadow-subtle hover:shadow-card hover:border-neithal-gold-500/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-serif text-xl font-bold text-neithal-green-950 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-neithal-muted leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="p-3 rounded-xl bg-neithal-cream-50 border border-neithal-border/40 text-xs text-neithal-green-950 space-y-1">
                        <span className="font-bold text-neithal-gold-500 uppercase tracking-wider block text-[10px]">
                          Ayurvedic Care Strategy
                        </span>
                        <p className="text-neithal-muted italic leading-relaxed text-[11px]">
                          "{item.ayurvedicPerspective}"
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neithal-border/40">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full justify-between"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                        onClick={() => {
                          const isSpineOrJoint = cat.id === 'musculoskeletal' || item.name.toLowerCase().includes('sciatica') || item.name.toLowerCase().includes('arthritis');
                          const doctor = isSpineOrJoint ? 'Dr. Sathiyaraj N.' : 'Dr. Saranya K.';
                          onOpenAppointment(item.name, doctor);
                        }}
                      >
                        Inquire Care Pathway
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-white border border-neithal-border flex items-start gap-3 text-xs text-neithal-muted">
          <ShieldAlert className="w-4 h-4 text-neithal-gold-500 flex-shrink-0 mt-0.5" />
          <p>
            Educational Notice: Ayurvedic consultations at Neithal provide individualized care pathways tailored to your body constitution (Prakriti). Specific therapeutic responses vary per individual.
          </p>
        </div>

      </div>
    </div>
  );
};
