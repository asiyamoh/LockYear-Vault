import clsx from 'clsx';
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  className,
}: BadgeProps) {
  const variantClasses = {
    success: 'bg-green-muted text-success border-success',
    error: 'bg-red-950 text-error border-error',
    warning: 'bg-yellow-950 text-warning border-warning',
    info: 'bg-blue-950 text-info border-info',
    neutral: 'bg-container-light text-text-secondary border-border-dark',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border font-medium',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
