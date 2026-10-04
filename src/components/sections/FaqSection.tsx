import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import faqsData from '../../data/faqs.json';
import { ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = faqsData;
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faqs" className="py-10 sm:py-14 bg-neithal-cream-50 border-t border-b border-neithal-border/60 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-neithal-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Compact Clean Header */}
        <div className="mb-6 pb-4 border-b border-neithal-border/60">
          <SectionHeading
            eyebrow="CLINICAL INSIGHTS & FAQs"
            heading="Curious about your care? Discover how it works."
            supporting="Physician-reviewed answers to key questions on pulse diagnosis, Panchakarma detox, and safe integrative care."
          />
        </div>

        {/* 6-CARD GRID WITH UNIFORM EQUAL CARD HEIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden shadow-subtle hover:shadow-card cursor-pointer group flex flex-col justify-between h-full min-h-[140px] sm:min-h-[144px] ${
                  isOpen
                    ? 'border-neithal-gold-500 ring-2 ring-neithal-gold-500/20'
                    : 'border-neithal-border/70 hover:border-neithal-gold-500/60'
                }`}
                onClick={() => setOpenId(isOpen ? null : faq.id)}
              >
                {/* Card Header Teaser */}
                <div className="p-5 sm:p-6 flex items-start justify-between gap-4 h-full">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-gold-600 bg-neithal-cream-50 px-2.5 py-0.5 rounded-md border border-neithal-gold-500/30">
                        {faq.category}
                      </span>
                      <span className="text-[10px] font-bold text-neithal-text/60">
                        • 1 min read
                      </span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-extrabold text-neithal-green-950 group-hover:text-neithal-gold-600 transition-colors leading-snug">
                      {faq.question}
                    </h4>
                  </div>

                  <div className={`p-2 rounded-full bg-neithal-cream-50 text-neithal-green-950 border border-neithal-border/60 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-90 bg-neithal-gold-500 text-neithal-green-950' : 'group-hover:translate-x-1'}`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Expandable Answer Drawer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-5 sm:px-6 pb-6 pt-0 border-t border-neithal-border/40"
                    >
                      <div className="mt-4 p-4 rounded-xl bg-neithal-cream-50/80 border border-neithal-border/50 space-y-3">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-neithal-green-950 uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4 text-neithal-gold-500" />
                          <span>Physician Verified Answer</span>
                        </div>
                        <p className="text-xs sm:text-sm text-neithal-text leading-relaxed font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

          {/* 6TH CARD: SPECIAL HEALTH INQUIRY CARD (MATCHES EXACT UNIFORM HEIGHT OF CARDS 1-5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-neithal-green-950 text-white rounded-2xl border-2 border-neithal-gold-500/60 shadow-card hover:shadow-elevated transition-all duration-300 relative overflow-hidden group min-h-[140px] sm:min-h-[144px] flex flex-col justify-between h-full"
          >
            {/* Ambient Gold Glow Ribbon */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-neithal-gold-500/15 rounded-bl-full pointer-events-none" />

            <a
              href="https://wa.me/919488023328"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 flex flex-col justify-between h-full w-full relative z-10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neithal-gold-400 bg-neithal-gold-500/20 px-2.5 py-0.5 rounded-md border border-neithal-gold-500/40">
                      SPECIAL INQUIRY
                    </span>
                    <span className="text-[10px] font-bold text-neithal-cream-100/70">
                      • Instant Guidance
                    </span>
                  </div>

                  <h4 className="font-serif text-lg sm:text-xl font-extrabold text-white group-hover:text-neithal-gold-400 transition-colors leading-snug">
                    Have a specific health query not listed here?
                  </h4>

                  <p className="text-xs text-neithal-cream-100/80 font-medium">
                    Connect directly with our expert consultants for confidential medical guidance.
                  </p>
                </div>

                <div className="p-2.5 rounded-full bg-neithal-gold-500 text-neithal-green-950 group-hover:bg-neithal-gold-400 group-hover:scale-110 transition-all flex-shrink-0 shadow-md">
                  <ArrowRight className="w-4 h-4 text-neithal-green-950" />
                </div>
              </div>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
