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
        // Hidden on mobile, visible from md up
        'hidden md:flex',
        // Layout
        'h-[calc(100vh-2rem)] sticky top-4 flex-col min-h-0',
        // Visual
        'bg-container-dark rounded-2xl border border-border-dark shadow-card',
        // Width: icon-only on tablet, full on desktop
        'w-[68px] lg:w-[250px]',
        // Smooth width transition when browser resizes
        'transition-[width] duration-200'
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
        'flex flex-col items-start gap-2 border-b border-border-dark',
        // Less padding on tablet (icon-only), normal on desktop
        'p-4 lg:p-6'
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
        'flex flex-1 flex-col overflow-y-auto',
        'p-2 lg:p-4',
        '[&>[data-slot=section]+[data-slot=section]]:mt-8'
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
  return (
    <div
      className={clsx(
        // Base
        'relative flex w-full items-center rounded-lg transition-all duration-200',
        'text-base font-medium text-text-secondary',
        // Tablet: center icon, no gap. Desktop: left-align with gap.
        'justify-center lg:justify-start',
        'gap-0 lg:gap-3',
        // Padding: square on tablet, wide on desktop
        'px-0 py-2.5 lg:px-3',
        // States
        'hover:bg-container-light hover:text-text-primary',
        current &&
          'bg-container-light text-text-primary [&>svg]:text-green-primary',
        // Icon
        '[&>svg]:size-5 [&>svg]:shrink-0',
        'hover:[&>svg]:text-green-primary',
        className
      )}
    >
      {children}
      {current && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-primary rounded-l-lg" />
      )}
    </div>
  );
}

// The text label inside a SidebarItem — hidden on tablet, shown on desktop
export function SidebarLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        'truncate',
        // Hide labels on tablet (icon-only), show on desktop
        'hidden lg:inline'
      )}
    />
  );
}

// -------------------------------------------------------------------
// BottomTabBar — only visible on mobile (<768px)
// Wrap your nav items in this for the mobile tab bar.
// -------------------------------------------------------------------

export function BottomTabBar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav
      {...props}
      className={clsx(
        className,
        // Only on mobile
        'md:hidden',
        // Fixed to bottom
        'fixed bottom-0 left-0 right-0 z-50',
        // Visual
        'bg-container-dark border-t border-border-dark',
        // Layout: evenly space tab items
        'flex items-center justify-around',
        'px-2 pb-safe pt-2', // pb-safe respects iPhone home bar
        'h-16'
      )}
    />
  );
}

export function BottomTabItem({
  current,
  icon,
  label,
  className,
}: {
  current?: boolean;
  icon: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-1',
        'min-w-[48px] px-3 py-1 rounded-lg',
        'text-text-secondary transition-colors duration-200',
        current && 'text-green-primary',
        '[&>svg]:size-5 [&>svg]:shrink-0',
        className
      )}
    >
      {icon}
      <span className="text-[10px] font-medium leading-none">{label}</span>
    </div>
  );
}
