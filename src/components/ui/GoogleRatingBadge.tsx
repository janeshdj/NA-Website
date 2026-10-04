import React from 'react';
import { Star, Info } from 'lucide-react';
import { useGoogleReviews } from '../../hooks/useGoogleReviews';

interface GoogleRatingBadgeProps {
  variant?: 'dark' | 'light' | 'pill';
  className?: string;
  showLink?: boolean;
}

export const GoogleRatingBadge: React.FC<GoogleRatingBadgeProps> = ({
  variant = 'dark',
  className = '',
  showLink = true,
}) => {
  const { rating, totalReviews } = useGoogleReviews();

  const isDark = variant === 'dark';

  const badgeContent = (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 shadow-sm ${
        isDark
          ? 'bg-neithal-green-950/90 text-white border-neithal-gold-500/50 hover:border-neithal-gold-400'
          : 'bg-white text-neithal-green-950 border-neithal-gold-500/40 hover:border-neithal-gold-500 shadow-md'
      } ${className}`}
    >
      {/* Google G Emblem / Star Rating Number */}
      <span className="font-serif text-lg font-extrabold tracking-tight leading-none text-neithal-gold-400 sm:text-xl">
        {rating.toFixed(1)}
      </span>

      {/* 5 Golden Stars */}
      <div className="flex items-center gap-0.5 text-neithal-gold-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-neithal-gold-400 text-neithal-gold-400 flex-shrink-0" />
        ))}
      </div>

      {/* Review Count & Info */}
      <span className="text-xs sm:text-sm font-bold tracking-tight opacity-90 whitespace-nowrap">
        {totalReviews} reviews
      </span>

      {/* Info Icon */}
      <div
        title="Verified Live Google Business Profile Reviews for Neithal Ayurveda Puducherry"
        className="text-neithal-gold-400/80 hover:text-neithal-gold-400 flex-shrink-0 ml-0.5"
      >
        <Info className="w-3.5 h-3.5" />
      </div>
    </div>
  );

  if (showLink) {
    return (
      <a
        href="https://maps.google.com/?q=Neithal+Ayurveda+Heritage+Town+Puducherry"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block group cursor-pointer"
        title="View live reviews on Google Business Profile"
      >
        {badgeContent}
      </a>
    );
  }

  return badgeContent;
};
