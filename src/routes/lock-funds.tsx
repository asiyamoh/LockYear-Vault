import { createFileRoute } from '@tanstack/react-router';
import { LockFundsPage } from '../features/lock-funds/lock-funds.page';

export const Route = createFileRoute('/lock-funds')({
  component: LockFundsPage,
});
