import React from 'react';
import flameIconImg from '../assets/flame-icon.png';

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
      {/* PNG Dual Flame Icon */}
      <img
        src={flameIconImg}
        alt="IK.KO Energy Logo"
        style={{ height: `${height}px`, width: 'auto' }}
        className="flex-shrink-0 object-contain transition-transform duration-300 hover:scale-105"
      />

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center tracking-tight font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <span style={{ color: greenColor, fontSize: size === 'sm' ? '1rem' : size === 'md' ? '1.35rem' : '1.75rem' }}>
              IK
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-[1px] mx-0.5" style={{ backgroundColor: redColor }} />
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
