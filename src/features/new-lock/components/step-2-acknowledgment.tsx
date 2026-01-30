import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { useDeposit } from '../context/deposit-context';
import { formatDate } from '../../dashboard/formatters';

export function Step2Acknowledgment() {
  const { formData, nextStep, prevStep } = useDeposit();

  const [checkboxes, setCheckboxes] = useState({
    lockedUntil: false,
    separateLock: false,
    noEarlyWithdrawal: false,
  });

  const handleCheckboxChange = (field: keyof typeof checkboxes) => {
    setCheckboxes(prev => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleBack = () => {
    prevStep();
  };

  const handleContinue = () => {
    if (allChecked) {
      nextStep();
    }
  };

  const allChecked =
    checkboxes.lockedUntil &&
    checkboxes.separateLock &&
    checkboxes.noEarlyWithdrawal;

  return (
    <Card variant="dark" padding="lg">
      <CardHeader title="Before you continue" backButton onBack={handleBack} />

      {/* Divider line */}
      <div className="border-t border-border-dark my-6" />

      <CardContent className="space-y-6">
        {/* Checkbox 1 */}
        <Checkbox
          checked={checkboxes.lockedUntil}
          onChange={() => handleCheckboxChange('lockedUntil')}
          label={`This deposit will be locked until ${formData.unlockDate ? formatDate(formData.unlockDate) : 'date'}`}
        />

        {/* Checkbox 2 */}
        <Checkbox
          checked={checkboxes.separateLock}
          onChange={() => handleCheckboxChange('separateLock')}
          label="This deposit creates a separate lock"
          description="Deposits cannot be combined or adjusted after confirmation."
        />

        {/* Checkbox 3 */}
        <Checkbox
          checked={checkboxes.noEarlyWithdrawal}
          onChange={() => handleCheckboxChange('noEarlyWithdrawal')}
          label="No early withdrawals are permitted"
          description="Funds are released only at maturity or as required by law."
        />

        {/* Bottom Text */}
        <div className="pt-4 border-t border-border-dark">
          <p className="text-sm text-text-secondary text-center">
            Please acknowledge the above before proceeding.
          </p>
        </div>
      </CardContent>

      <CardActions>
        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>
        <Button
          variant="primary"
          onClick={handleContinue}
          disabled={!allChecked}
        >
          Continue
        </Button>
      </CardActions>
    </Card>
  );
}
