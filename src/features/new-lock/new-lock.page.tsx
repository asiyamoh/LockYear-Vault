import { useNavigate } from '@tanstack/react-router';
import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { DepositProvider, useDeposit } from './context/deposit-context';
import { Step1SetTerms } from './components/step-1-set-terms';
import { Step2Acknowledgment } from './components/step-2-acknowledgment';
import { Step3FinalReview } from './components/step-3-final-review';
import { NewLockPanel } from './components/new-lock-panel';
import { ConfirmationAlert } from '../../components/ui/confirmation-alert';
import { PromptAlert } from '../../components/ui/prompt-alert';
import { Card } from '../../components/ui/card';

function NewLockContent() {
  const navigate = useNavigate();
  const {
    currentStep,
    showSuccessModal,
    setShowSuccessModal,
    showCancelWarning,
    setShowCancelWarning,
    resetDeposit,
  } = useDeposit();

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    resetDeposit();
    navigate({ to: '/lock-funds' });
  };

  const handleCancelConfirm = () => {
    setShowCancelWarning(false);
    resetDeposit();
    navigate({ to: '/dashboard' });
  };

  const handleCancelClose = () => {
    setShowCancelWarning(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header in Card */}
        <Card variant="dark" padding="lg">
          <div>
            <h1 className="text-display text-text-primary font-bold">
              New Lock
            </h1>
            <p className="text-text-secondary mt-2">
              Each deposit creates a separate lock. Deposits cannot be modified
              later.
            </p>
          </div>
        </Card>

        {/* Step Indicator - Between header and form */}
        <div className="flex items-center gap-3 px-2">
          <span className="text-text-secondary text-sm font-medium whitespace-nowrap">
            Step {currentStep} of 3
          </span>
          <div className="h-px flex-1 bg-border-dark"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Form Steps */}
          <div className="lg:col-span-2">
            {currentStep === 1 && <Step1SetTerms />}
            {currentStep === 2 && <Step2Acknowledgment />}
            {currentStep === 3 && <Step3FinalReview />}
          </div>

          {/* Right Side - New Lock Panel */}
          <div className="lg:col-span-1">
            <NewLockPanel />
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <ConfirmationAlert
        show={showSuccessModal}
        close={handleSuccessClose}
        title="Lock Created Successfully!"
        message="Your deposit has been locked and will be available on the unlock date."
      />

      {/* Cancel Warning */}
      <PromptAlert
        show={showCancelWarning}
        close={handleCancelClose}
        onConfirm={handleCancelConfirm}
        title="Are you sure?"
        message="Your progress will be lost. Do you want to cancel this deposit?"
        confirmText="Yes, Cancel"
        cancelText="No, Continue"
      />
    </DashboardLayout>
  );
}

export function NewLockPage() {
  return (
    <DepositProvider>
      <NewLockContent />
    </DepositProvider>
  );
}
