import type { ReactNode } from 'react';
import { Button } from '../../../components/ui/button';
import { Spinner } from '../../../components/ui/spinner';

interface LocksQueryStateProps {
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
  onRetry: () => void;
  children: ReactNode;
}

export function LocksQueryState({
  isLoading,
  isError,
  errorMessage,
  onRetry,
  children,
}: LocksQueryStateProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <Spinner size="lg" />
        <p className="text-sm text-text-secondary">Loading your locks...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-error/10 border border-error/20 text-error">
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Couldn&apos;t load locks
        </h3>
        <p className="text-sm text-text-secondary max-w-md mb-6">
          {errorMessage ?? 'Something went wrong. Please try again.'}
        </p>
        <Button variant="secondary" onClick={onRetry}>
          Try Again
        </Button>
      </div>
    );
  }

  return <>{children}</>;
}
