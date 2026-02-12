import clsx from 'clsx';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'mid' | 'light';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Card({
  variant = 'dark',
  padding = 'lg',
  className,
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    dark: 'bg-container-dark',
    mid: 'bg-container-mid',
    light: 'bg-container-light',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-card-lg',
  };

  return (
    <div
      className={clsx(
        'rounded-2xl border border-border-dark shadow-card',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
  backButton?: boolean;
  onBack?: () => void;
  className?: string;
}

export function CardHeader({
  title,
  subtitle,
  action,
  backButton,
  onBack,
  className,
}: CardHeaderProps) {
  return (
    <div className={clsx('flex items-start justify-between mb-6', className)}>
      <div className="flex items-center gap-4">
        {backButton && (
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-container-light transition-colors"
            aria-label="Go back"
          >
            <svg
              className="w-5 h-5 text-text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div>
          {title && (
            <h2 className="text-heading text-text-primary font-semibold">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-text-secondary mt-1">{subtitle}</p>
          )}
        </div>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  centered?: boolean;
}

export function CardContent({
  children,
  centered = false,
  className,
  ...props
}: CardContentProps) {
  return (
    <div
      className={clsx(
        'space-y-4',
        { 'flex flex-col items-center text-center': centered },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
}

export function CardActions({
  children,
  orientation = 'horizontal',
  className,
  ...props
}: CardActionsProps) {
  return (
    <div
      className={clsx(
        'mt-8 flex gap-3',
        {
          'flex-row items-center justify-end': orientation === 'horizontal',
          'flex-col items-stretch': orientation === 'vertical',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
