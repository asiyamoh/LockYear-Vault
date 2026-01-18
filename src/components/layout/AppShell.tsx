import clsx from 'clsx';
import React from 'react';

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div
      className={clsx(
        'min-h-screen w-full bg-bg-primary flex items-center justify-center p-8',
        className
      )}
    >
      {children}
    </div>
  );
}

export default AppShell;
