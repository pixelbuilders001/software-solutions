import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'maroon' | 'gold' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variantStyles = {
    emerald: 'bg-[#EAF4EE] text-[#176B50] border-[#CDE5D8]',
    maroon: 'bg-[#F7ECEF] text-[#800020] border-[#E8CCD5]',
    gold: 'bg-[#FAF4E8] text-[#8C6A23] border-[#EEDFBF]',
    neutral: 'bg-[#EFEFEA] text-[#4A4A45] border-[#E3E3DD]',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};
