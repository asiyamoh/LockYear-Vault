import { Link } from '@tanstack/react-router';
import { Button } from './button';
import { Card } from './card';

interface PageHeaderAction {
  label: string;
  to: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: PageHeaderAction[];
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <Card variant="dark" padding="lg">
      <div className="flex items-center justify-between gap-4">
        {/* Left side - Title and subtitle */}
        <div className="flex-1">
          <h1 className="text-display text-text-primary">{title}</h1>
          {subtitle && <p className="text-text-secondary mt-1">{subtitle}</p>}
        </div>

        {/* Right side - Action buttons */}
        {actions && actions.length > 0 && (
          <div className="flex items-center gap-3">
            {actions.map(action => (
              <Link key={action.to} to={action.to}>
                <Button variant={action.variant || 'primary'} size="md">
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

export default PageHeader;
