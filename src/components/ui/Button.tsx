import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neithal-gold-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const variants = {
    primary: 'bg-neithal-green-950 hover:bg-neithal-green-900 text-neithal-cream-50 shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-neithal-cream-100 hover:bg-neithal-cream-200 text-neithal-green-950 border border-neithal-border',
    gold: 'bg-neithal-gold-500 hover:bg-neithal-gold-400 text-neithal-green-950 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5',
    outline: 'border border-neithal-green-950/30 text-neithal-green-950 hover:bg-neithal-green-950 hover:text-white',
    ghost: 'text-neithal-green-950 hover:bg-neithal-cream-100/60',
  };

  const sizes = {
    sm: 'h-9 px-4 text-xs gap-1.5',
    md: 'h-11 px-6 text-sm gap-2',
    lg: 'h-13 px-8 text-base gap-2.5',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
