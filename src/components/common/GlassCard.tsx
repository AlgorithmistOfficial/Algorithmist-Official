import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'accent' | 'subtle';
  hoverEffect?: boolean;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  hoverEffect = true,
  className = '',
  padding = 'lg',
  id,
  ...motionProps
}) => {
  const getPaddingClass = () => {
    switch (padding) {
      case 'none':
        return 'p-0';
      case 'sm':
        return 'p-4';
      case 'md':
        return 'p-6';
      case 'xl':
        return 'p-8 sm:p-10';
      case 'lg':
      default:
        return 'p-6 sm:p-8';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'dark':
        return 'bg-[#172940]/90 text-white border-white/10 shadow-2xl backdrop-blur-xl';
      case 'accent':
        return 'bg-gradient-to-br from-[#D96725]/10 via-white/80 to-[#F2A97E]/10 text-[#172940] border-[#D96725]/30 shadow-xl backdrop-blur-xl';
      case 'subtle':
        return 'bg-white/40 text-[#172940] border-white/60 shadow-sm backdrop-blur-md';
      case 'light':
      default:
        return 'bg-white/75 text-[#172940] border-white/80 shadow-[0_8px_30px_rgb(23,41,64,0.06)] backdrop-blur-xl';
    }
  };

  return (
    <motion.div
      id={id}
      whileHover={
        hoverEffect
          ? {
              y: -4,
              boxShadow:
                variant === 'dark'
                  ? '0 20px 40px -10px rgba(0,0,0,0.5)'
                  : '0 20px 35px -5px rgba(23,41,64,0.12)',
              borderColor: variant === 'accent' ? 'rgba(217,103,37,0.5)' : 'rgba(255,255,255,0.95)'
            }
          : undefined
      }
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`rounded-2xl border ${getVariantStyles()} ${getPaddingClass()} transition-colors duration-200 relative overflow-hidden ${className}`}
      {...motionProps}
    >
      {/* Subtle glass reflection highlight */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl border border-white/20" />
      {children}
    </motion.div>
  );
};
