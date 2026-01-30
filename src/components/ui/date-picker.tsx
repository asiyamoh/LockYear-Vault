import clsx from 'clsx';
import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date-picker-styles.css';

interface DatePickerProps {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholderText?: string;
  disabled?: boolean;
}

export const DatePicker = forwardRef<ReactDatePicker, DatePickerProps>(
  function DatePicker(
    {
      label,
      error,
      helperText,
      fullWidth = false,
      selected,
      onChange,
      minDate,
      maxDate,
      placeholderText = 'Select date',
      disabled = false,
    },
    ref
  ) {
    return (
      <div className={clsx('flex flex-col gap-2', { 'w-full': fullWidth })}>
        {label && (
          <label className="text-sm font-medium text-text-primary">
            {label}
          </label>
        )}
        <ReactDatePicker
          ref={ref}
          selected={selected}
          onChange={onChange}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText={placeholderText}
          disabled={disabled}
          dateFormat="MMMM d, yyyy"
          className={clsx(
            'px-4 py-2 rounded-lg bg-container-light border text-text-primary w-full',
            'transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary',
            'placeholder:text-text-muted',
            {
              'border-border-dark focus:border-border-accent focus:ring-green-primary':
                !error,
              'border-error focus:border-error focus:ring-error': error,
              'opacity-50 cursor-not-allowed': disabled,
            }
          )}
          wrapperClassName={fullWidth ? 'w-full' : ''}
        />
        {error && <p className="text-sm text-error">{error}</p>}
        {helperText && !error && (
          <p className="text-sm text-text-muted">{helperText}</p>
        )}
      </div>
    );
  }
);

export default DatePicker;
