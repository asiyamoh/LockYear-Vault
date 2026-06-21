import { useEffect, useState } from 'react';
import { Card } from '../../../components/ui/card';
import { Countdown } from '../../../components/ui/countdown';
import { VaultSummary } from '../types';
import { calculateCountdown, formatCurrency, formatDate } from '../formatters';

interface VaultSummaryCardProps {
  vaultData: VaultSummary;
}

export function VaultSummaryCard({ vaultData }: VaultSummaryCardProps) {
  const [countdown, setCountdown] = useState(
    calculateCountdown(vaultData.nextUnlockDate ?? new Date()),
  );

  useEffect(() => {
    if (!vaultData.nextUnlockDate) {
      return;
    }

    const interval = setInterval(() => {
      setCountdown(calculateCountdown(vaultData.nextUnlockDate!));
    }, 1000);

    return () => clearInterval(interval);
  }, [vaultData.nextUnlockDate]);

  const hasUpcomingUnlock = vaultData.nextUnlockDate !== null;

  return (
    <Card variant="dark" padding="md" className="h-full">
      {/* Header — less bottom margin on mobile */}
      <div className="mb-6 md:mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-text-primary">
          Your Vault
        </h2>
      </div>

      {/* Balance — hero number scales down on mobile */}
      <div className="text-center mb-8 md:mb-14">
        <p className="text-xs sm:text-sm text-text-muted uppercase tracking-wider mb-2 md:mb-3">
          Total Locked Balance
        </p>
        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary tabular-nums">
          {formatCurrency(vaultData.totalBalance)}
        </h3>
      </div>

      {/* Divider */}
      <div className="border-t border-border-dark mb-8 md:mb-14" />

      {/* Next Unlock */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-green-primary flex-shrink-0"
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
          <div className="text-center">
            <p className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider mb-1">
              Next Unlock
            </p>
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-text-primary">
              {hasUpcomingUnlock
                ? formatDate(vaultData.nextUnlockDate!)
                : 'No upcoming unlocks'}
            </h4>
          </div>
        </div>

        {hasUpcomingUnlock && (
          <Countdown
            days={countdown.days}
            hours={countdown.hours}
            minutes={countdown.minutes}
            seconds={countdown.seconds}
            className="mt-4 md:mt-8"
          />
        )}
      </div>
    </Card>
  );
}

export default VaultSummaryCard;
