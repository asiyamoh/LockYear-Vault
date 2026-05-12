import { Link } from '@tanstack/react-router';
import { Card } from '../../../components/ui/card';
import { LockItem } from '../../../components/ui/lock-item';
import { Lock } from '../types';
import { formatCurrency, formatDate } from '../formatters';

interface UpcomingLocksCardProps {
  locks: Lock[];
  maxDisplay?: number;
}

export function UpcomingLocksCard({
  locks,
  maxDisplay = 4,
}: UpcomingLocksCardProps) {
  const displayedLocks = locks.slice(0, maxDisplay);
  const hasMore = locks.length > maxDisplay;

  return (
    <Card variant="dark" padding="md" className="h-full">
      {/* Header */}
      <div className="mb-5 md:mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-text-primary">
          Upcoming Unlocks
        </h2>
        <p className="text-sm text-text-muted mt-1 md:mt-2">
          {locks.length} {locks.length === 1 ? 'lock' : 'locks'} scheduled
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border-dark mb-5 md:mb-8" />

      {/* Locks List — tighter spacing on mobile */}
      <div className="space-y-3 md:space-y-4">
        {displayedLocks.map(lock => (
          <LockItem
            key={lock.id}
            icon={
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            }
            title={lock.period}
            amount={formatCurrency(lock.amount)}
            unlockDate={formatDate(lock.unlockDate)}
          />
        ))}
      </div>

      {/* View All */}
      {hasMore && (
        <>
          <div className="border-t border-border-dark mt-5 md:mt-8 mb-4 md:mb-6" />
          <Link
            to="/lock-funds"
            className="block w-full text-center text-green-primary hover:text-green-hover font-medium text-sm transition-colors uppercase tracking-wider"
          >
            View All {locks.length} Locks →
          </Link>
        </>
      )}
    </Card>
  );
}

export default UpcomingLocksCard;
