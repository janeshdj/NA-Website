import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'green' | 'cream' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className }) => {
  const base = 'inline-flex items-center px-3 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full';
  
  const variants = {
    gold: 'bg-neithal-gold-100 text-neithal-green-950 border border-neithal-gold-500/30',
    green: 'bg-neithal-green-950 text-neithal-cream-50',
    cream: 'bg-neithal-cream-100 text-neithal-green-950 border border-neithal-border',
    outline: 'border border-neithal-gold-500/50 text-neithal-gold-500 bg-transparent',
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], className))}>
      {children}
    </span>
  );
};
