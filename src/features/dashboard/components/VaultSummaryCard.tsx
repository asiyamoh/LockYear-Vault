import { useEffect, useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Countdown } from '../../../components/ui/Countdown';
import { VaultSummary } from '../types';
import { calculateCountdown, formatCurrency, formatDate } from '../formatters';

interface VaultSummaryCardProps {
  vaultData: VaultSummary;
}

export function VaultSummaryCard({ vaultData }: VaultSummaryCardProps) {
  const [countdown, setCountdown] = useState(
    calculateCountdown(vaultData.nextUnlockDate)
  );

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown(vaultData.nextUnlockDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [vaultData.nextUnlockDate]);

  return (
    <Card variant="dark" padding="lg" className="h-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-text-primary">Your Vault</h2>
      </div>

      {/* Total Balance Section - Hero */}
      <div className="text-center mb-16">
        <p className="text-sm text-text-muted uppercase tracking-wider mb-3">
          Total Locked Balance
        </p>
        <h3 className="text-6xl md:text-7xl font-bold text-text-primary mb-2 tabular-nums">
          {formatCurrency(vaultData.totalBalance)}
        </h3>
      </div>

      {/* Hairline Divider */}
      <div className="border-t border-border-dark mb-16"></div>

      {/* Next Unlock Section */}
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          {/* Professional Outlined Hourglass Icon */}
          <svg
            className="w-8 h-8 text-green-primary"
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
            <p className="text-xs text-text-muted uppercase tracking-wider mb-1">
              Next Unlock
            </p>
            <h4 className="text-xl font-semibold text-text-primary">
              {formatDate(vaultData.nextUnlockDate)}
            </h4>
          </div>
        </div>

        {/* Countdown Display */}
        <Countdown
          days={countdown.days}
          hours={countdown.hours}
          minutes={countdown.minutes}
          seconds={countdown.seconds}
          className="mt-8"
        />
      </div>
    </Card>
  );
}

export default VaultSummaryCard;
