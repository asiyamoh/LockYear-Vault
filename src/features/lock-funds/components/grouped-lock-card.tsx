import { formatCurrency, formatDate } from '../../dashboard/formatters';

interface GroupedLockCardProps {
  period: string;
  totalAmount: number;
  unlockDate: Date;
  lockCount: number;
}

export function GroupedLockCard({
  period,
  totalAmount,
  unlockDate,
}: GroupedLockCardProps) {
  return (
    <div className="p-4 bg-container-light rounded-lg border border-border-dark flex items-center gap-4">
      {/* Lock Icon */}
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-green-primary">
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
      </div>

      {/* Period and Unlock Date */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-text-primary mb-1">
          {period}
        </h3>
        <p className="text-xs text-text-muted">
          Unlocks {formatDate(unlockDate)}
        </p>
      </div>

      {/* Amount */}
      <div className="flex-shrink-0">
        <span className="text-sm font-bold text-text-primary tabular-nums">
          {formatCurrency(totalAmount)}
        </span>
      </div>
    </div>
  );
}

export default GroupedLockCard;
