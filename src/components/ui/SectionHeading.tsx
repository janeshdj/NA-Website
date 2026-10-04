import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  supporting?: string;
  align?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  supporting,
  align = 'left',
  dark = false,
}) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : align === 'right' ? 'text-right ml-auto' : 'text-left';

  return (
    <div className={`max-w-4xl mb-12 ${alignment}`}>
      {eyebrow && (
        <div className="mb-3">
          <Badge variant={dark ? 'outline' : 'gold'} className="font-extrabold px-3 py-1 shadow-sm">
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] ${dark ? 'text-white' : 'text-neithal-green-950'}`}>
        {heading}
      </h2>
      {supporting && (
        <p className={`mt-4 text-base sm:text-lg font-medium leading-relaxed ${dark ? 'text-neithal-cream-200' : 'text-neithal-text'}`}>
          {supporting}
        </p>
      )}
    </div>
  );
};
