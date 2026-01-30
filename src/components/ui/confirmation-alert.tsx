import { useEffect, useRef } from 'react';
import { Alert, AlertBody, AlertTitle } from './alert';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface ConfirmationAlertProps {
  show: boolean;
  close: () => void;
  title: string;
  message: string;
}

export function ConfirmationAlert({
  show,
  close,
  title,
  message,
}: ConfirmationAlertProps) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Close the alert after 3 seconds
  useEffect(() => {
    if (show) {
      timerRef.current = setTimeout(() => {
        close();
      }, 3000);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [show, close]);

  return (
    <Alert open={show} onClose={close}>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-green-primary/10 p-3">
          <CheckCircleIcon className="h-12 w-12 text-green-primary" />
        </div>
        <AlertTitle>{title}</AlertTitle>
        <AlertBody className="whitespace-pre-wrap">{message}</AlertBody>
      </div>
    </Alert>
  );
}
