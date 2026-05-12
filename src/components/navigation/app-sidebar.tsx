import {
  HomeIcon,
  LockClosedIcon,
  PlusCircleIcon,
  ClockIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { Link } from '@tanstack/react-router';
import {
  BottomTabBar,
  BottomTabItem,
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '../ui/sidebar';
import { Logo } from '../ui/logo';

const navigationItems = [
  { name: 'Dashboard', to: '/dashboard', icon: HomeIcon },
  { name: 'Lock Funds', to: '/lock-funds', icon: LockClosedIcon },
  { name: 'New Lock', to: '/new-lock', icon: PlusCircleIcon },
  { name: 'Activity', to: '/activity', icon: ClockIcon },
  { name: 'Legal & Support', to: '/legal-support', icon: DocumentTextIcon },
];

export function AppSidebar() {
  return (
    <>
      {/* ── Desktop / Tablet sidebar (md+) ─────────────────────────── */}
      <Sidebar>
        <SidebarHeader>
          <span className="hidden lg:block">
            <Logo size="md" />
          </span>

          <span className="lg:hidden flex items-center justify-center w-full">
            <Logo size="sm" showText={false} />
          </span>
        </SidebarHeader>

        <SidebarBody>
          <SidebarSection>
            {navigationItems.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.to} to={item.to}>
                  {({ isActive }: { isActive: boolean }) => (
                    <SidebarItem current={isActive}>
                      <Icon />
                      {/* SidebarLabel is hidden on tablet, shown on desktop */}
                      <SidebarLabel>{item.name}</SidebarLabel>
                    </SidebarItem>
                  )}
                </Link>
              );
            })}
          </SidebarSection>
        </SidebarBody>
      </Sidebar>

      {/* ── Mobile bottom tab bar (< md) ────────────────────────────── */}
      <BottomTabBar>
        {navigationItems.map(item => {
          const Icon = item.icon;
          return (
            <Link key={item.to} to={item.to}>
              {({ isActive }: { isActive: boolean }) => (
                <BottomTabItem
                  current={isActive}
                  icon={<Icon />}
                  label={item.name === 'Legal & Support' ? 'Legal' : item.name}
                />
              )}
            </Link>
          );
        })}
      </BottomTabBar>
    </>
  );
}

export default AppSidebar;
