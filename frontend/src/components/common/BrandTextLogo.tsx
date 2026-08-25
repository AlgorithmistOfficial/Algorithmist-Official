import React from 'react';

interface BrandTextLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  height?: number | string;
}

/**
 * Official Algorithmist Text Logo
 * Renders the official text.png asset (tightly cropped wordmark) with SVG vector fallback.
 */
export const BrandTextLogo: React.FC<BrandTextLogoProps> = ({
  className = 'h-7',
  showTagline = true,
  variant = 'auto',
  height
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center overflow-hidden select-none shrink-0 ${className}`}
      style={height ? { height } : undefined}
    >
      <img
        src="/text.png"
        alt="Algorithmist — Logic . Innovation . Impact"
        className={`h-full w-auto max-h-full object-contain ${
          isDark ? 'brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.7)]' : ''
        }`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = '/text.svg';
        }}
      />
    </div>
  );
};
