import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '', fullHeight = false }) => {
  return (
    <section
      id={id}
      className={`${fullHeight ? 'min-h-screen' : 'py-20 md:py-32'} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;


