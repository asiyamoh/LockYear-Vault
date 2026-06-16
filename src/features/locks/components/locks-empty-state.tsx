import { Link } from '@tanstack/react-router';
import { Button } from '../../../components/ui/button';

interface LocksEmptyStateProps {
  title?: string;
  description?: string;
}

export function LocksEmptyState({
  title = 'No active locks yet',
  description = 'Create your first lock to start securing funds until your chosen unlock date.',
}: LocksEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-container-light border border-border-dark text-green-primary">
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary max-w-md mb-8">{description}</p>

      <Link to="/new-lock">
        <Button variant="primary">Create New Lock</Button>
      </Link>
    </div>
  );
}
