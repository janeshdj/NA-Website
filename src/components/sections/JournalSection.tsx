import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import journalData from '../../data/journal.json';
import { Article } from '../../types';
import { Clock, ArrowRight, Calendar } from 'lucide-react';

export const JournalSection: React.FC = () => {
  const articles: Article[] = journalData;

  return (
    <section id="journal" className="py-16 sm:py-24 bg-neithal-cream-100 border-t border-b border-neithal-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE NEITHAL JOURNAL"
          heading="Understand your health. Learn from Ayurveda."
          supporting="Physician-written educational insights on Panchakarma, AHARA food wisdom, seasonal health, and chronic illness management."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <Card key={art.id} className="group flex flex-col justify-between h-full">
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neithal-green-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-neithal-green-950 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {art.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-neithal-muted mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neithal-gold-500" />
                      {art.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-neithal-gold-500" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors mb-2 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neithal-muted leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href={`#journal-${art.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-neithal-green-950 group-hover:text-neithal-gold-500 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
