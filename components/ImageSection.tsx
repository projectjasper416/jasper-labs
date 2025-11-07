import React from 'react';

interface ImageSectionProps {
  imageUrl: string;
  alt: string;
  title?: string;
  subtitle?: string;
  className?: string;
  imagePosition?: 'left' | 'right' | 'center';
}

const ImageSection: React.FC<ImageSectionProps> = ({
  imageUrl,
  alt,
  title,
  subtitle,
  className = '',
  imagePosition = 'center'
}) => {
  const positionClasses = {
    left: 'md:flex-row',
    right: 'md:flex-row-reverse',
    center: 'flex-col'
  };

  return (
    <div className={`flex ${positionClasses[imagePosition]} items-center gap-8 md:gap-12 ${className}`}>
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto rounded-2xl shadow-2xl object-cover"
          loading="lazy"
        />
      </div>
      {(title || subtitle) && (
        <div className="flex-1 space-y-4">
          {title && (
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-slate-300 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSection;


