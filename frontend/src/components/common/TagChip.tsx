import React from 'react';
import { motion } from 'motion/react';

interface TagChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  count?: number;
  variant?: 'default' | 'accent' | 'subtle';
  size?: 'sm' | 'md';
  id?: string;
}

export const TagChip: React.FC<TagChipProps> = ({
  label,
  active = false,
  onClick,
  count,
  variant = 'default',
  size = 'md',
  id
}) => {
  const isClickable = !!onClick;

  const getVariantStyles = () => {
    if (active) {
      return 'bg-[#172940] text-white border-[#172940] shadow-sm font-semibold';
    }

    switch (variant) {
      case 'accent':
        return 'bg-[#F2A97E]/15 text-[#D96725] border-[#F2A97E]/30 hover:bg-[#F2A97E]/25';
      case 'subtle':
        return 'bg-white/60 text-[#344257] border-white/80 hover:bg-white/90 hover:text-[#172940]';
      case 'default':
      default:
        return 'bg-white/80 text-[#344257] border-slate-200 hover:border-[#344257]/40 hover:text-[#172940] shadow-[0_1px_3px_rgba(0,0,0,0.03)]';
    }
  };

  const sizeClass = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3.5 py-1.5 text-xs sm:text-sm';

  return (
    <motion.button
      id={id}
      type="button"
      whileHover={isClickable ? { scale: 1.03 } : undefined}
      whileTap={isClickable ? { scale: 0.97 } : undefined}
      onClick={onClick}
      disabled={!isClickable}
      className={`inline-flex items-center gap-1.5 rounded-full border transition-all duration-200 select-none whitespace-nowrap ${sizeClass} ${getVariantStyles()} ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span
          className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
            active ? 'bg-white/20 text-white' : 'bg-[#172940]/10 text-[#344257]'
          }`}
        >
          {count}
        </span>
      )}
    </motion.button>
  );
};
