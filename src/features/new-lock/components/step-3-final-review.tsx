import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { useDeposit } from '../context/deposit-context';
import { formatCurrency, formatDate } from '../../dashboard/formatters';

export function Step3FinalReview() {
  const { formData, prevStep, confirmDeposit, setShowCancelWarning } =
    useDeposit();

  const handleBack = () => {
    prevStep();
  };

  const handleCancel = () => {
    setShowCancelWarning(true);
  };

  const handleConfirm = () => {
    confirmDeposit();
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
      </CardContent>

      <CardActions>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm Deposit
        </Button>
      </CardActions>
    </Card>
  );
}
