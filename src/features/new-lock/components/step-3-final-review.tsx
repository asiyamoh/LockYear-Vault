import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Spinner } from '../../../components/ui/spinner';
import { useDeposit } from '../context/deposit-context';
import { useCreateLock } from '../../locks/hooks/use-create-lock';
import { formatCurrency, formatDate } from '../../dashboard/formatters';

export function Step3FinalReview() {
  const { formData, prevStep, setShowSuccessModal, setShowCancelWarning } =
    useDeposit();
  const createLock = useCreateLock();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleBack = () => {
    prevStep();
  };

  const handleCancel = () => {
    setShowCancelWarning(true);
  };

  const handleConfirm = async () => {
    if (!formData.amount || !formData.unlockDate) {
      return;
    }

    setSubmitError(null);

    try {
      await createLock.mutateAsync({
        amount: formData.amount,
        unlockDate: formData.unlockDate,
      });
      setShowSuccessModal(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to create lock. Please try again.',
      );
    }
  };

  return (
    <Card variant="dark" padding="lg">
      <CardHeader title="Final Review" backButton onBack={handleBack} />

      {/* Divider line */}
      <div className="border-t border-border-dark my-6" />

      <CardContent className="space-y-6">
        {/* Section Title */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Confirm & Add Deposit
          </h3>
        </div>

        {/* Review Items */}
        <div className="space-y-4">
          {/* Deposit Amount */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-container-mid border border-border-dark">
            <div className="flex items-center gap-3">
              <span className="text-text-primary font-medium">
                Deposit Amount
              </span>
            </div>
            <span className="text-text-primary font-bold text-xl">
              {formData.amount ? formatCurrency(formData.amount) : '$0.00'}
            </span>
          </div>

          {/* Unlock Date */}
          <div className="flex items-center justify-between p-4 rounded-lg bg-container-mid border border-border-dark">
            <div className="flex items-center gap-3">
              <span className="text-text-primary font-medium">Unlock Date</span>
            </div>
            <span className="text-text-primary font-bold text-xl">
              {formData.unlockDate ? formatDate(formData.unlockDate) : 'N/A'}
            </span>
          </div>
        </div>

        {submitError && (
          <div className="p-4 rounded-lg bg-error/10 border border-error/20">
            <p className="text-sm text-error">{submitError}</p>
          </div>
        )}
      </CardContent>

      <CardActions>
        <Button
          variant="secondary"
          onClick={handleCancel}
          disabled={createLock.isPending}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleConfirm}
          disabled={createLock.isPending}
        >
          {createLock.isPending ? (
            <span className="inline-flex items-center gap-2">
              <Spinner size="sm" color="white" />
              Confirming...
            </span>
          ) : (
            'Confirm Deposit'
          )}
        </Button>
      </CardActions>
    </Card>
  );
}
