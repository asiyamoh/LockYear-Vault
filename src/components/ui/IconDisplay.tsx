import clsx from 'clsx';
import React from 'react';

interface IconDisplayProps {
  children: React.ReactNode;
  glow?: boolean;
  glowIntensity?: 'sm' | 'md' | 'lg' | 'xl';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function IconDisplay({
  children,
  glow = false,
  glowIntensity = 'lg',
  size = 'lg',
  className,
}: IconDisplayProps) {
  const glowClasses = {
    sm: 'shadow-glow-green-sm',
    md: 'shadow-glow-green',
    lg: 'shadow-glow-green-lg',
    xl: 'shadow-glow-green-xl',
  };

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40',
  };

  return (
    <div
      className={clsx(
        'flex items-center justify-center text-green-primary',
        sizeClasses[size],
        {
          [glowClasses[glowIntensity]]: glow,
        },
        className
      )}
    >
      {children}
    </div>
  );
}

export default IconDisplay;
