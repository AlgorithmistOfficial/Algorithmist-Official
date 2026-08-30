import React from 'react';

interface BrandTextLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark' | 'auto';
  height?: number | string;
  cropWhitespace?: boolean;
}

/**
 * Official Algorithmist Text Logo
 * Renders the requested TextLogo.png asset with a stable vector wordmark fallback.
 */
export const BrandTextLogo: React.FC<BrandTextLogoProps> = ({
  className = 'h-7',
  showTagline = true,
  variant = 'auto',
  height,
  cropWhitespace = false
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center overflow-hidden select-none shrink-0 ${className}`}
      style={height ? { height } : undefined}
    >
      <img
        src="/TextLogo.png"
        alt="Algorithmist — Logic . Innovation . Impact"
        className={`h-full ${cropWhitespace ? 'w-full object-cover' : 'w-auto object-contain'} max-h-full ${
          isDark ? 'brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.7)]' : ''
        }`}
        onError={(e) => {
          const image = e.currentTarget as HTMLImageElement;
          if (!image.src.endsWith('/text-logo.svg')) {
            image.src = '/text-logo.svg';
          }
        }}
      />
    </div>
  );
};
