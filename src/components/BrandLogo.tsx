import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  showText = true,
  size = 'md',
}) => {
  // Height and width scaling
  const sizeMap = {
    sm: { height: 32, iconWidth: 32, textClass: 'text-base font-extrabold' },
    md: { height: 42, iconWidth: 42, textClass: 'text-xl font-black' },
    lg: { height: 52, iconWidth: 52, textClass: 'text-2xl font-black' },
    xl: { height: 64, iconWidth: 64, textClass: 'text-3xl font-black' },
  };

  const { height, iconWidth, textClass } = sizeMap[size];

  // Colors
  const greenColor = '#18A84E';
  const redColor = '#DD3F39';
  const textColorSecondary = variant === 'dark' ? '#FFFFFF' : '#333333';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* SVG Dual Flame Icon */}
      <svg
        width={iconWidth}
        height={height}
        viewBox="0 0 100 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Green Flame Gradient */}
          <linearGradient id="greenFlameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="50%" stopColor="#18A84E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>

          {/* Red Flame Gradient */}
          <linearGradient id="redFlameGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#DD3F39" />
            <stop offset="100%" stopColor="#B91C1C" />
          </linearGradient>

          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Green Flame Swirl */}
        <path
          d="M 65 10 C 65 10 50 25 45 42 C 40 58 48 72 60 78 C 68 82 72 80 68 88 C 64 96 50 102 38 98 C 28 95 24 82 28 72 C 32 62 42 52 42 38 C 42 22 28 15 28 15 C 28 15 20 28 20 45 C 20 68 32 88 52 98 C 72 108 92 95 90 72 C 88 52 75 32 65 10 Z"
          fill="url(#greenFlameGrad)"
          filter="url(#subtleGlow)"
        />

        {/* Inner Red Flame Swirl */}
        <path
          d="M 28 35 C 28 35 15 50 12 68 C 9 85 20 102 38 108 C 48 112 55 110 50 116 C 44 122 28 122 18 114 C 8 106 2 90 8 75 C 14 60 28 48 28 35 Z"
          fill="url(#redFlameGrad)"
          filter="url(#subtleGlow)"
        />
        
        {/* Flame Accent Curve */}
        <path
          d="M 25 80 C 22 88 24 96 32 102 C 38 106 42 105 38 109 C 32 113 20 110 14 102 C 8 92 12 82 25 80 Z"
          fill="#B91C1C"
        />
      </svg>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center tracking-tight font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span style={{ color: greenColor, fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.35rem' : '1.75rem' }}>
              IK
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full mx-0.5" style={{ backgroundColor: redColor }} />
            <span style={{ color: greenColor, fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.35rem' : '1.75rem' }}>
              KO
            </span>
          </div>
          <span
            className="tracking-wider uppercase font-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: redColor,
              fontSize: size === 'sm' ? '0.625rem' : size === 'md' ? '0.75rem' : '0.95rem',
              letterSpacing: '0.12em',
              marginTop: '1px',
            }}
          >
            ENERGY LTD
          </span>
        </div>
      )}
    </div>
  );
};
