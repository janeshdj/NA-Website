import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  variant?: 'light' | 'dark' | 'compact';
  className?: string;
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  showTagline = true,
}) => {
  const isDark = variant === 'dark';
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`flex items-center gap-3.5 select-none cursor-pointer group ${className}`}>
      
      {/* 2X LARGE PROMINENT GOLDEN EMBLEM SEAL CONTAINER */}
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {/* Ambient Gold Glow Aura */}
        <div className="absolute inset-0 rounded-full bg-neithal-gold-500/35 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />

        {/* 2X Large Dark Green Base Disk (76px - 84px scale) */}
        <div className="w-[72px] h-[72px] sm:w-[82px] sm:h-[82px] p-1.5 rounded-full bg-neithal-green-950 border-2 border-neithal-gold-500 shadow-xl flex items-center justify-center relative z-10 overflow-hidden flex-shrink-0">
          {!imgError ? (
            <motion.img
              src="/neithal-logo.png"
              alt="Neithal Ayurveda Golden Emblem"
              className="w-full h-full object-contain filter drop-shadow-sm"
              onError={() => setImgError(true)}
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'easeInOut',
              }}
            />
          ) : (
            /* Fallback Vector Crest */
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full text-neithal-gold-400 p-1"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            >
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="4 3" opacity="0.6" />
              <path
                d="M50 15 C 32 35, 32 60, 50 85 C 68 60, 68 35, 50 15 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M50 30 C 40 45, 42 62, 50 72 M50 30 C 60 45, 58 62, 50 72"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                opacity="0.8"
              />
              <circle cx="50" cy="50" r="5" fill="currentColor" />
            </motion.svg>
          )}
        </div>
      </motion.div>

      {/* BRAND TYPOGRAPHY LOCKUP */}
      <div className="flex flex-col min-w-0">
        
        {/* CLINIC NAME WITH ® ATTACHED NEATLY TO TOP RIGHT OF LETTER L */}
        <div className="flex items-baseline">
          <span
            className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wider ${
              isDark ? 'text-white' : 'text-neithal-green-950'
            }`}
          >
            NEITHA
            <span className="relative inline-block">
              L
              <span className="absolute -top-0.5 sm:top-0 left-full -ml-0.5 sm:-ml-1 text-xs sm:text-sm font-sans font-extrabold text-neithal-gold-500 leading-none select-none">
                ®
              </span>
            </span>
          </span>
        </div>

        {/* SINGLE LINE TAGLINES */}
        {showTagline && (
          <div className="flex flex-col whitespace-nowrap mt-0.5">
            <span
              className={`text-[10px] sm:text-[11px] lg:text-[12px] tracking-wider uppercase font-extrabold ${
                isDark ? 'text-neithal-cream-100' : 'text-neithal-green-950'
              }`}
            >
              TRADITIONAL WISDOM <span className="text-neithal-gold-500 font-bold">|</span> MODERN CARE
            </span>

            <span className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-wider uppercase font-extrabold text-neithal-gold-500 mt-0.5 hidden sm:block">
              CLINIC · PHARMACY · PANCHAKARMA · YOGA
            </span>
          </div>
        )}
      </div>

    </div>
  );
};
