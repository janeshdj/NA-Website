import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true }) => {
  return (
    <div
      className={twMerge(
        clsx(
          'bg-white rounded-2xl border border-neithal-border overflow-hidden transition-all duration-300 shadow-subtle',
          hoverEffect && 'hover:shadow-card hover:-translate-y-1 hover:border-neithal-gold-500/40',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
