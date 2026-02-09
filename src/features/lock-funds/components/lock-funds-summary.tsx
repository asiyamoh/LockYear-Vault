import { formatCurrency, formatDate } from '../../dashboard/formatters';

interface LockFundsSummaryProps {
  totalLocked: number;
  nextUnlock: Date;
}

export function LockFundsSummary({
  totalLocked,
  nextUnlock,
}: LockFundsSummaryProps) {
  return (
    <div className="py-6">
      {/* Total Locked */}
      <div className="mb-4">
        <div className="flex items-baseline gap-3">
          <span className="text-base text-text-secondary">Total Locked:</span>
          <span className="text-4xl font-bold text-text-primary tabular-nums">
            {formatCurrency(totalLocked)}
          </span>
        </div>
      </div>

      {/* Next Unlock */}
      <div className="flex items-center gap-2 text-text-secondary">
        {/* Calendar/Timer Icon */}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-sm">Next Unlock: {formatDate(nextUnlock)}</span>
      </div>
    </div>
  );
}

export default LockFundsSummary;
