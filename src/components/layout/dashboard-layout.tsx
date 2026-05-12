import { ReactNode } from 'react';
import { AppSidebar } from '../navigation/app-sidebar';
import clsx from 'clsx';

interface DashboardLayoutProps {
  children: ReactNode;
  rightPanel?: ReactNode;
  className?: string;
}

export function DashboardLayout({
  children,
  rightPanel,
  className,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-bg-primary">
      <div className="flex max-w-[1920px] mx-auto gap-4 lg:gap-6 p-3 md:p-4">
        {/* Sidebar — hides itself on mobile, icon-only on tablet, full on desktop */}
        <aside className="flex-shrink-0">
          <AppSidebar />
        </aside>

        {/* Main content */}
        <main className={clsx('flex-1 min-w-0 pb-20 md:pb-4', className)}>
          {children}
        </main>

        {/* Optional right panel */}
        {rightPanel && (
          <aside className="flex-shrink-0 w-[350px] hidden xl:block">
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}

export default DashboardLayout;
