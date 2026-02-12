import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, helperText, fullWidth = false, className, ...props },
  ref
) {
  return (
    <div className={clsx('flex flex-col gap-2', { 'w-full': fullWidth })}>
      {label && (
        <label className="text-sm font-medium text-text-primary">{label}</label>
      )}
      <input
        ref={ref}
        className={clsx(
          'px-4 py-2 rounded-lg bg-container-light border text-text-primary',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary',
          'placeholder:text-text-muted',
          {
            'border-border-dark focus:border-border-accent focus:ring-green-primary':
              !error,
            'border-error focus:border-error focus:ring-error': error,
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-error">{error}</p>}
      {helperText && !error && (
        <p className="text-sm text-text-muted">{helperText}</p>
      )}
    </div>
  );
});

export default Input;
