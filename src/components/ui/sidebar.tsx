import clsx from 'clsx';
import React from 'react';

export function Sidebar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav
      {...props}
      className={clsx(
        className,
        'h-[calc(100vh-4rem)] sticky top-4 flex min-h-0 flex-col bg-container-dark rounded-2xl border border-border-dark shadow-card w-[250px]'
      )}
    />
  );
}

export function SidebarHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col items-start gap-2 border-b border-border-dark p-6'
      )}
    />
  );
}

export function SidebarBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'
      )}
    />
  );
}

export function SidebarFooter({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'flex flex-col border-t border-border-dark p-4'
      )}
    />
  );
}

export function SidebarSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      data-slot="section"
      className={clsx(className, 'flex flex-col gap-1')}
    />
  );
}

export function SidebarDivider({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'hr'>) {
  return (
    <hr
      {...props}
      className={clsx(className, 'my-4 border-t border-border-dark')}
    />
  );
}

export function SidebarSpacer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, 'mt-8 flex-1')}
    />
  );
}

export function SidebarItem({
  current,
  className,
  children,
}: {
  current?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = clsx(
    // Base styles
    'relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-all duration-200',
    // Text color
    'text-text-secondary',
    // Hover state
    'hover:bg-container-light hover:text-text-primary',
    // Active/current state
    current &&
      'bg-container-light text-text-primary [&>svg]:text-green-primary',
    // Icon styles
    '[&>svg]:size-5 [&>svg]:shrink-0',
    // Hover icon color
    'hover:[&>svg]:text-green-primary',
    className
  );

  return (
    <div className={classes}>
      {children}
      {current && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-primary rounded-l-lg" />
      )}
    </div>
  );
}

export function SidebarLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'truncate')} />;
}
