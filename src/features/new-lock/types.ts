export interface DepositFormData {
  amount: number | null;
  unlockDate: Date | null;
}

export type DepositStep = 1 | 2 | 3;

export interface DepositContextType {
  // Form data
  formData: DepositFormData;
  updateFormData: (data: Partial<DepositFormData>) => void;

  // Navigation
  currentStep: DepositStep;
  goToStep: (step: DepositStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  canProceedToStep: (step: DepositStep) => boolean;

  // Modals
  showSuccessModal: boolean;
  setShowSuccessModal: (show: boolean) => void;
  showCancelWarning: boolean;
  setShowCancelWarning: (show: boolean) => void;

  // Actions
  resetDeposit: () => void;
  confirmDeposit: () => void;
}
