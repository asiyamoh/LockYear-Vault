import { Card } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import { formatCurrency, formatDate } from '../../dashboard/formatters';
import { useDeposit } from '../context/deposit-context';

export function NewLockPanel() {
  const { formData } = useDeposit();

  const hasAmount = formData.amount !== null && formData.amount > 0;
  const hasDate = formData.unlockDate !== null;

  return (
    <Card variant="mid" padding="lg" className="sticky top-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-green-primary/10">
            <LockClosedIcon className="h-8 w-8 text-green-primary" />
          </div>
          <h2 className="text-xl font-semibold text-text-primary">New Lock</h2>
        </div>

        {/* Summary Items */}
        <div className="space-y-4">
          {/* Lock Count */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-primary" />
            <p className="text-text-secondary text-sm">
              You will create{' '}
              <span className="text-text-primary font-medium">1 new lock</span>.
            </p>
          </div>

          {/* Unlock Date */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-primary" />
            <p className="text-text-secondary text-sm">
              {hasDate ? (
                <>
                  Funds locked until{' '}
                  <span className="text-text-primary font-medium">
                    {formatDate(formData.unlockDate!)}
                  </span>
                </>
              ) : (
                'Funds release on unlock date'
              )}
            </p>
          </div>

          {/* Early Withdrawals */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-primary" />
            <p className="text-text-secondary text-sm">No early withdrawals.</p>
          </div>

          {/* Support */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-primary" />
            <p className="text-text-secondary text-sm">
              Support cannot unlock.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border-dark" />

        {/* Amount Display */}
        <div className="space-y-2">
          <p className="text-sm text-text-secondary">Deposit Amount</p>
          <p className="text-3xl font-bold text-text-primary">
            {hasAmount ? formatCurrency(formData.amount!) : '$0.00'}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-border-dark">
          <p className="text-sm text-text-secondary">Status:</p>
          <Badge variant="warning" size="sm">
            PENDING_CONFIRMATION
          </Badge>
        </div>
      </div>
    </Card>
  );
}
