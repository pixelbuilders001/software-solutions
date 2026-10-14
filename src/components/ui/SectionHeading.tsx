import React from 'react';
import { Badge } from './Badge';

interface SectionHeadingProps {
  category?: string;
  badgeVariant?: 'emerald' | 'maroon' | 'gold' | 'neutral';
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  category,
  badgeVariant = 'emerald',
  title,
  description,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {category && (
        <div className="mb-4">
          <Badge variant={badgeVariant}>{category}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#686868] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
