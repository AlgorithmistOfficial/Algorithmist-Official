import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accentLight';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  id?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  isLoading = false,
  fullWidth = false,
  id,
  className = '',
  disabled,
  ...props
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-xs font-semibold rounded-xl gap-1.5';
      case 'lg':
        return 'px-8 py-3.5 text-base font-semibold rounded-2xl gap-2.5';
      case 'md':
      default:
        return 'px-6 py-2.5 text-sm font-semibold rounded-xl gap-2';
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-[#172940] text-white hover:bg-[#344257] active:bg-[#0f1b2b] shadow-md border border-[#172940] hover:shadow-lg';
      case 'outline':
        return 'bg-white/60 text-[#172940] border border-[#344257]/30 hover:border-[#172940] hover:bg-white/90 shadow-sm';
      case 'ghost':
        return 'bg-transparent text-[#344257] hover:text-[#172940] hover:bg-black/5 active:bg-black/10';
      case 'accentLight':
        return 'bg-[#F2A97E]/20 text-[#D96725] border border-[#F2A97E]/40 hover:bg-[#F2A97E]/30';
      case 'primary':
      default:
        return 'bg-[#D96725] text-white hover:bg-[#c2571c] active:bg-[#aa4914] shadow-[0_4px_14px_0_rgba(217,103,37,0.39)] hover:shadow-[0_6px_20px_rgba(217,103,37,0.45)] border border-[#D96725]';
    }
  };

  return (
    <motion.button
      id={id}
      whileHover={disabled || isLoading ? undefined : { scale: 1.02 }}
      whileTap={disabled || isLoading ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.15 }}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none whitespace-nowrap ${getSizeStyles()} ${getVariantStyles()} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : (
        <>
          {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
          <span>{children}</span>
          {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />}
        </>
      )}
    </motion.button>
  );
};
