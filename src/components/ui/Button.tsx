import * as Headless from '@headlessui/react';
import clsx from 'clsx';
import React, { forwardRef } from 'react';

export const styles = {
  base: [
    'relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg text-base font-semibold cursor-pointer',
    'transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-bg-primary',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    '[&>[data-slot=icon]]:size-5 [&>[data-slot=icon]]:shrink-0',
  ],
  variants: {
    primary: [
      'bg-green-primary text-white border border-green-primary',
      'hover:bg-green-hover hover:border-green-hover',
      'active:bg-green-active active:border-green-active',
      'disabled:hover:bg-green-primary',
    ],
    secondary: [
      'bg-container-light text-text-primary border border-border-light',
      'hover:bg-container-hover hover:border-border-light',
      'active:bg-container-dark',
    ],
    outline: [
      'bg-transparent text-green-primary border border-green-primary',
      'hover:bg-green-muted hover:border-green-hover',
      'active:bg-green-muted',
    ],
    ghost: [
      'bg-transparent text-text-secondary border border-transparent',
      'hover:text-text-primary hover:bg-container-light',
      'active:bg-container-mid',
    ],
    danger: [
      'bg-error text-white border border-error',
      'hover:bg-red-600 hover:border-red-600',
      'active:bg-red-700',
    ],
  },
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
};

type ButtonProps = {
  variant?: keyof typeof styles.variants;
  size?: keyof typeof styles.sizes;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<Headless.ButtonProps, 'className' | 'children'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, loading, ...props },
  ref
) {
  const classes = clsx(
    className,
    styles.base,
    styles.variants[variant],
    styles.sizes[size]
  );

  function renderChildrenWithLoading() {
    return (
      <>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <div className={clsx('contents', { invisible: loading })}>
          {children}
        </div>
      </>
    );
  }

  return (
    <Headless.Button
      {...props}
      className={classes}
      ref={ref}
      disabled={loading || props.disabled}
    >
      {renderChildrenWithLoading()}
    </Headless.Button>
  );
});

export default Button;
