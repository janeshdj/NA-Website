import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';

export const ReviewGlider: React.FC = () => {
  const { reviews } = useGoogleReviews();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Duplicate dataset to ensure seamless continuous infinite scrolling
  const displayReviews = [...reviews, ...reviews];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  // Faster, ultra-smooth auto-scroll (advance 1 card every 2.2 seconds)
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 2200);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, reviews.length]);

  return (
    <section className="py-12 sm:py-20 bg-neithal-cream-50 border-y border-neithal-border/50 relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[350px] bg-neithal-gold-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Balanced 2-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-neithal-border/60">
          
          {/* Left Column (7 cols): Section Heading */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="PATIENT STORIES & GOOGLE REVIEWS"
              heading="Real patient stories & verified outcomes."
              supporting="Authentic 5-star Google Business reviews from individuals treated at our Heritage Town Puducherry clinic and through global tele-health."
            />
          </div>

          {/* Right Column (5 cols): Google Rating Summary Card & Action Button */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-4 sm:p-5 border-2 border-neithal-gold-500/50 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Live Google Rating Summary */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-neithal-green-950 leading-none">
                4.9
              </span>
              <div>
                <div className="flex items-center gap-0.5 text-neithal-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neithal-gold-500 text-neithal-gold-500" />
                  ))}
                </div>
                <span className="text-xs font-bold text-neithal-text block mt-0.5 whitespace-nowrap">
                  209 Verified Google Reviews
                </span>
              </div>
            </div>

            {/* Write Review CTA Button */}
            <a
              href="https://maps.google.com/?q=Neithal+Ayurveda+Heritage+Town+Puducherry"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-neithal-green-950 text-white text-xs font-extrabold uppercase tracking-wider hover:bg-neithal-green-900 transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap flex-shrink-0 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-4 h-4 text-neithal-gold-400" />
              <span>Write Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-neithal-gold-400" />
            </a>

          </div>
        </div>

        {/* REVIEWS HORIZONTAL SLIDING TRACK WITH HOVER/TOUCH-ACTIVATED MAGIC GLASSMORPHIC ARROWS */}
        <div
          className="relative group overflow-hidden py-3 touch-pan-x"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT GLASSMORPHIC FADE OVERLAY */}
          <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-32 bg-gradient-to-r from-neithal-cream-50 via-neithal-cream-50/80 to-transparent z-20 pointer-events-none" />

          {/* RIGHT GLASSMORPHIC FADE OVERLAY */}
          <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-32 bg-gradient-to-l from-neithal-cream-50 via-neithal-cream-50/80 to-transparent z-20 pointer-events-none" />

          {/* MAGIC GLASSMORPHIC PREV ARROW */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-neithal-green-950/85 backdrop-blur-xl border-2 border-neithal-gold-500/80 text-neithal-gold-400 shadow-2xl flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-neithal-gold-400" />
          </button>

          {/* MAGIC GLASSMORPHIC NEXT ARROW */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-neithal-green-950/85 backdrop-blur-xl border-2 border-neithal-gold-500/80 text-neithal-gold-400 shadow-2xl flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-neithal-gold-400" />
          </button>

          {/* SLIDING CAROUSEL TRACK */}
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: `-${currentIndex * (window.innerWidth < 640 ? 280 + 16 : 340 + 24)}px` }}
            transition={{ type: 'tween', ease: [0.25, 0.1, 0.25, 1.0], duration: 0.7 }}
            style={{ width: 'max-content' }}
          >
            {displayReviews.map((rev, idx) => {
              const realIndex = idx % reviews.length;
              const isActive = realIndex === currentIndex;
              return (
                <div
                  key={`${rev.id}-${idx}`}
                  onClick={() => setCurrentIndex(realIndex)}
                  className={`w-[280px] sm:w-[340px] flex-shrink-0 bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-500 shadow-card hover:shadow-elevated flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'border-neithal-gold-500 ring-2 ring-neithal-gold-500/30 shadow-md scale-[1.01]'
                      : 'border-neithal-gold-500/40 hover:border-neithal-gold-500'
                  }`}
                >
                  <div>
                    {/* Header: Author Photo + Name + Star Rating */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <img
                          src={rev.authorPhoto}
                          alt={rev.authorName}
                          className="w-11 h-11 rounded-full object-cover border-2 border-neithal-gold-500/60 shadow-xs"
                        />
                        <div>
                          <h4 className="font-extrabold text-neithal-green-950 text-sm leading-snug">
                            {rev.authorName}
                          </h4>
                          <span className="text-[11px] text-neithal-text/70 font-semibold block">
                            {rev.relativeTime}
                          </span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 text-neithal-gold-500 bg-neithal-cream-50 px-2 py-0.5 rounded-full border border-neithal-gold-500/30">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-neithal-gold-500 text-neithal-gold-500" />
                        ))}
                      </div>
                    </div>

                    {/* Treatment Tag */}
                    {rev.treatment && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-neithal-green-950/5 text-neithal-green-950 text-[11px] font-extrabold mb-3 border border-neithal-green-950/10">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neithal-gold-500" />
                        <span>{rev.treatment}</span>
                      </div>
                    )}

                    {/* Review Quote Text */}
                    <p className="text-xs sm:text-sm text-neithal-text leading-relaxed font-medium italic line-clamp-4">
                      "{rev.text}"
                    </p>
                  </div>

                  {/* Verified Google Footer */}
                  <div className="pt-3.5 mt-4 border-t border-neithal-border/50 flex items-center justify-between text-[11px] font-bold text-neithal-green-950">
                    <span className="flex items-center gap-1 text-neithal-gold-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neithal-gold-500" />
                      Verified Google Review
                    </span>
                    <span className="text-neithal-text/80">5.0 ★</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
