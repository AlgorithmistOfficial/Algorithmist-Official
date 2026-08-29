import React from 'react';

interface BrandIconProps {
  className?: string;
  size?: number | string;
  variant?: 'color' | 'monochrome' | 'white';
}

/**
 * Official Algorithmist Icon Mark
 * Renders the official icon.png asset with a MainLogo fallback.
 */
export const BrandIcon: React.FC<BrandIconProps> = ({
  className = 'w-10 h-10',
  size,
  variant = 'color'
}) => {
  const isWhite = variant === 'white';
  const isMono = variant === 'monochrome';

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <img
        src="/icon.png"
        alt="Algorithmist Icon"
        className={`w-full h-full object-contain ${
          isWhite ? 'brightness-0 invert' : isMono ? 'grayscale opacity-80' : ''
        }`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/MainLogo.png';
        }}
      />
    </div>
  );
};
