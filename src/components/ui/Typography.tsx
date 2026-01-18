import clsx from 'clsx';
import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: 'display' | 'heading' | 'subheading';
  className?: string;
  children: React.ReactNode;
}

export function Heading({
  as: Component = 'h2',
  variant = 'heading',
  className,
  children,
  ...props
}: HeadingProps) {
  const variantClasses = {
    display: 'text-display text-text-primary',
    heading: 'text-heading text-text-primary',
    subheading: 'text-subheading text-text-primary',
  };

  return (
    <Component
      className={clsx(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'accent';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  className?: string;
  children: React.ReactNode;
}

export function Text({
  variant = 'primary',
  size = 'base',
  className,
  children,
  ...props
}: TextProps) {
  const variantClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
    accent: 'text-text-accent',
  };

  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  return (
    <p
      className={clsx(variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </p>
  );
}

export default { Heading, Text };
