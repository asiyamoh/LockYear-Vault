import { LockItem } from '../../../components/ui/lock-item';
import { Lock } from '../../dashboard/types';
import { formatCurrency, formatDate } from '../../dashboard/formatters';

interface IndividualLocksViewProps {
  locks: Lock[];
}

export function IndividualLocksView({ locks }: IndividualLocksViewProps) {
  return (
    <>
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-text-primary">
          Individual Deposits
        </h2>
        <p className="text-sm text-text-muted mt-2">
          {locks.length} {locks.length === 1 ? 'lock' : 'locks'} scheduled
        </p>
      </div>

      {/* Individual Lock Cards */}
      <div className="space-y-4">
        {locks.map(lock => (
          <LockItem
            key={lock.id}
            icon={
              <svg
                className="w-6 h-6"
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
    </>
  );
}

export default IndividualLocksView;
