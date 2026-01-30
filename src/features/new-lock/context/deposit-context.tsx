import React, { createContext, useContext, useState, useCallback } from 'react';
import { DepositFormData, DepositStep, DepositContextType } from '../types';

const DepositContext = createContext<DepositContextType | undefined>(undefined);

const initialFormData: DepositFormData = {
  amount: null,
  unlockDate: null,
};

export function DepositProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<DepositFormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState<DepositStep>(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelWarning, setShowCancelWarning] = useState(false);

  const updateFormData = useCallback((data: Partial<DepositFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  }, []);

  const canProceedToStep = useCallback(
    (step: DepositStep): boolean => {
      if (step === 1) return true;

      if (step === 2) {
        // Can proceed to step 2 if amount and unlock date are set
        return (
          formData.amount !== null &&
          formData.amount > 0 &&
          formData.unlockDate !== null
        );
      }

      if (step === 3) {
        // Can proceed to step 3 if step 2 requirements are met
        // (Step 2 will handle checkbox validation)
        return (
          formData.amount !== null &&
          formData.amount > 0 &&
          formData.unlockDate !== null
        );
      }

      return false;
    },
    [formData]
  );

  const goToStep = useCallback(
    (step: DepositStep) => {
      if (canProceedToStep(step)) {
        setCurrentStep(step);
      }
    },
    [canProceedToStep]
  );

  const nextStep = useCallback(() => {
    if (currentStep < 3) {
      const nextStepNum = (currentStep + 1) as DepositStep;
      goToStep(nextStepNum);
    }
  }, [currentStep, goToStep]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as DepositStep);
    }
  }, [currentStep]);

  const resetDeposit = useCallback(() => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setShowSuccessModal(false);
    setShowCancelWarning(false);
  }, []);

  const confirmDeposit = useCallback(() => {
    // This is where you'll add backend integration later
    // For now, just show success modal
    setShowSuccessModal(true);
  }, []);

  const value: DepositContextType = {
    formData,
    updateFormData,
    currentStep,
    goToStep,
    nextStep,
    prevStep,
    canProceedToStep,
    showSuccessModal,
    setShowSuccessModal,
    showCancelWarning,
    setShowCancelWarning,
    resetDeposit,
    confirmDeposit,
  };

  return (
    <DepositContext.Provider value={value}>{children}</DepositContext.Provider>
  );
}

export function useDeposit() {
  const context = useContext(DepositContext);
  if (!context) {
    throw new Error('useDeposit must be used within a DepositProvider');
  }
  return context;
}
