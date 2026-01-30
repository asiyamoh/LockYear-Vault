import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '../../../components/ui/card';
import { DatePicker } from '../../../components/ui/date-picker';
import { Button } from '../../../components/ui/button';
import { useDeposit } from '../context/deposit-context';
import { formatDate } from '../../dashboard/formatters';

export function Step1SetTerms() {
  const { formData, updateFormData, nextStep, setShowCancelWarning } =
    useDeposit();

  const [amountInput, setAmountInput] = useState<string>(
    formData.amount ? formData.amount.toString() : ''
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    formData.unlockDate
  );

  // Calculate minimum date (tomorrow)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  // Format currency as user types
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');

    // Allow only one decimal point
    const parts = value.split('.');
    if (parts.length > 2) return;

    // Limit to 2 decimal places
    if (parts[1] && parts[1].length > 2) return;

    setAmountInput(value);

    // Update form data with numeric value
    const numericValue = parseFloat(value) || 0;
    updateFormData({ amount: numericValue > 0 ? numericValue : null });
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    updateFormData({ unlockDate: date });
  };

  const handleContinue = () => {
    if (canContinue) {
      nextStep();
    }
  };

  const handleCancel = () => {
    setShowCancelWarning(true);
  };

  // Format display value with dollar sign
  const displayAmount = amountInput
    ? `$ ${parseFloat(amountInput).toLocaleString('en-US', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}`
    : '$ 0';

  const canContinue =
    formData.amount !== null &&
    formData.amount > 0 &&
    formData.unlockDate !== null;

  return (
    <Card variant="dark" padding="lg">
      <CardHeader
        title="Set Lock Terms"
        subtitle="Enter the amount to deposit and set the lock period."
      />

      {/* Divider line */}
      <div className="border-t border-border-dark my-6" />

      <CardContent className="space-y-6">
        {/* Deposit Amount */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">
            Deposit Amount
          </label>
          <div className="relative">
            <input
              type="text"
              value={amountInput}
              onChange={handleAmountChange}
              placeholder="0"
              className="px-4 py-2 rounded-lg bg-container-light border border-border-dark text-text-primary w-full
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary
                focus:border-border-accent focus:ring-green-primary
                placeholder:text-text-muted"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
              USD
            </div>
          </div>
          {amountInput && (
            <p className="text-sm text-text-secondary">
              Amount: {displayAmount}
            </p>
          )}
        </div>

        {/* Lock Period (Date Picker) */}
        <DatePicker
          label="Lock Period"
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={minDate}
          placeholderText="Select unlock date"
          fullWidth
        />

        {/* Preview Text */}
        {selectedDate && (
          <div className="p-4 rounded-lg bg-container-mid border border-border-dark">
            <p className="text-sm text-text-secondary">
              These funds will be locked until{' '}
              <span className="text-text-primary font-medium">
                {formatDate(selectedDate)}
              </span>
            </p>
          </div>
        )}

        {/* Info Message */}
        <div className="p-4 rounded-lg bg-info/10 border border-info/20">
          <p className="text-sm text-text-secondary">
            Each deposit creates a separate lock and cannot be modified later.
          </p>
        </div>
      </CardContent>

      <CardActions>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleContinue}
          disabled={!canContinue}
        >
          Continue
        </Button>
      </CardActions>
    </Card>
  );
}
