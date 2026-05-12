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
    <Card variant="dark" padding="md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <h1 className="text-display text-text-primary truncate">{title}</h1>
          {subtitle && (
            <p className="text-text-secondary mt-1 text-sm">{subtitle}</p>
          )}
        </div>

        {/* Action buttons
            - Mobile: side by side, each takes half the width
            - sm+:    inline, auto width  */}
        {actions && actions.length > 0 && (
          <div className="flex items-center gap-2 sm:gap-3">
            {actions.map(action => (
              <Link
                key={action.to}
                to={action.to}
                className="flex-1 sm:flex-none"
              >
                <Button
                  variant={action.variant || 'primary'}
                  size="sm"
                  className="w-full sm:w-auto sm:size-md"
                >
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
