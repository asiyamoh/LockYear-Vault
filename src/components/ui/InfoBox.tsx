import clsx from 'clsx';
import React from 'react';

interface InfoBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function InfoBox({ children, className }: InfoBoxProps) {
  return (
    <div
      className={clsx(
        'w-full bg-container-mid rounded-lg p-4 space-y-3',
        className
      )}
    >
      {children}
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

export function InfoItem({ label, value, className }: InfoItemProps) {
  return (
    <div className={clsx('flex justify-between items-center', className)}>
      <span className="text-sm text-text-muted">{label}</span>
      <span className="text-sm text-text-primary font-medium">{value}</span>
    </div>
  );
}

export default { InfoBox, InfoItem };
