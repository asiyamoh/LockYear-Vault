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
      <div className="flex gap-6 p-4 max-w-[1920px] mx-auto">
        {/* Left Sidebar Navigation */}
        <aside className="flex-shrink-0">
          <AppSidebar />
        </aside>

        {/* Main Content Area */}
        <main className={clsx('flex-1 min-w-0', className)}>{children}</main>

        {/* Right Panel (Optional - for forms, etc.) */}
        {rightPanel && (
          <aside className="flex-shrink-0 w-[350px]">{rightPanel}</aside>
        )}
      </div>
    </div>
  );
}

export default DashboardLayout;
