import clsx from 'clsx';
import React, { forwardRef } from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, description, error, className, ...props }, ref) {
    return (
      <div className={clsx('flex items-start gap-3', className)}>
        <div className="flex items-center h-5">
          <input
            ref={ref}
            type="checkbox"
            className={clsx(
              'w-5 h-5 rounded border cursor-pointer',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary',
              {
                'bg-container-light border-border-dark text-green-primary focus:ring-green-primary':
                  !error,
                'border-error focus:ring-error': error,
              }
            )}
            {...props}
          />
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label className="text-sm font-medium text-text-primary cursor-pointer">
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-text-secondary">{description}</p>
            )}
            {error && <p className="text-sm text-error">{error}</p>}
          </div>
        )}
      </div>
    );
  }
);

export default Checkbox;
