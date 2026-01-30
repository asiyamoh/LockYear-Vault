import { Alert, AlertActions, AlertBody, AlertTitle } from './alert';
import { Button } from './button';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

interface PromptAlertProps {
  show: boolean;
  close: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
}

export function PromptAlert({
  show,
  close,
  onConfirm,
  title,
  message,
  confirmText = 'Yes',
  cancelText = 'Cancel',
}: PromptAlertProps) {
  return (
    <Alert open={show} onClose={close}>
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full bg-warning/10 p-3">
          <ExclamationTriangleIcon className="h-12 w-12 text-warning" />
        </div>
        <AlertTitle>{title}</AlertTitle>
        <AlertBody className="whitespace-pre-line">{message}</AlertBody>
        <AlertActions>
          <Button onClick={close} variant="secondary" size="md">
            {cancelText}
          </Button>
          <Button onClick={onConfirm} variant="danger" size="md">
            {confirmText}
          </Button>
        </AlertActions>
      </div>
    </Alert>
  );
}
