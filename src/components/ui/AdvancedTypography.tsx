import clsx from 'clsx';
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: React.ReactNode;
}

export function Label({
  required = false,
  children,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={clsx('text-sm font-medium text-text-primary', className)}
      {...props}
    >
      {children}
      {required && <span className="text-error ml-1">*</span>}
    </label>
  );
}

interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function Caption({ children, className, ...props }: CaptionProps) {
  return (
    <span
      className={clsx('text-xs text-text-muted', className)}
      {...props}
    >
      {children}
    </span>
  );
}

interface DisplayNumberProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: string | number;
  prefix?: string;
  suffix?: string;
}

export function DisplayNumber({
  value,
  prefix,
  suffix,
  className,
  ...props
}: DisplayNumberProps) {
  return (
    <span
      className={clsx(
        'text-3xl font-bold text-text-primary tabular-nums',
        className
      )}
      {...props}
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export default { Label, Caption, DisplayNumber };
