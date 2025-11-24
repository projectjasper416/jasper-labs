import React from 'react';
import logo from '../assets/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'icon' | 'text';
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  if (variant === 'icon') {
    return (
      <img
        src={logo}
        alt="JasperLabs"
        className={className}
      />
    );
  }

  if (variant === 'text') {
    return (
      <div className={`flex items-center ${className}`}>
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
          Jasper Labs
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src={logo}
        alt="Jasper Labs"
        className="h-10 md:h-12 w-auto"
      />
    </div>
  );
};

export default Logo;


