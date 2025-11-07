import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'icon' | 'text';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 120 120"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern geometric J logo - represents innovation and connection */}
        <circle cx="60" cy="60" r="55" stroke="url(#gradient1)" strokeWidth="3" fill="none" opacity="0.3"/>
        <path
          d="M 60 20 Q 40 40 40 60 Q 40 80 60 80 Q 70 80 75 75"
          stroke="url(#gradient1)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="60" r="8" fill="url(#gradient1)"/>
        <path
          d="M 60 60 L 85 60 L 85 85"
          stroke="url(#gradient1)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
          JasperLabs
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg
        viewBox="0 0 120 120"
        className="w-10 h-10 md:w-12 md:h-12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="55" stroke="url(#gradient2)" strokeWidth="3" fill="none" opacity="0.3"/>
        <path
          d="M 60 20 Q 40 40 40 60 Q 40 80 60 80 Q 70 80 75 75"
          stroke="url(#gradient2)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="60" cy="60" r="8" fill="url(#gradient2)"/>
        <path
          d="M 60 60 L 85 60 L 85 85"
          stroke="url(#gradient2)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
      </svg>
      <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
        JasperLabs
      </span>
    </div>
  );
};

export default Logo;


