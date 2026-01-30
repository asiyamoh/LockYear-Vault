import {
  HomeIcon,
  LockClosedIcon,
  PlusCircleIcon,
  ClockIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { Link } from '@tanstack/react-router';
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarSection,
} from '../ui/sidebar';
import { Logo } from '../ui/logo';

const navigationItems = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Lock Funds',
    to: '/lock-funds',
    icon: LockClosedIcon,
  },
  {
    name: 'New Lock',
    to: '/new-lock',
    icon: PlusCircleIcon,
  },
  {
    name: 'Activity',
    to: '/activity',
    icon: ClockIcon,
  },
  {
    name: 'Legal & Support',
    to: '/legal-support',
    icon: DocumentTextIcon,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <Logo size="md" />
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
                    <span>{item.name}</span>
                  </SidebarItem>
                )}
              </Link>
            );
          })}
        </SidebarSection>
      </SidebarBody>
    </Sidebar>
  );
}

export default AppSidebar;
