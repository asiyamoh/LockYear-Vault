import { createFileRoute } from '@tanstack/react-router';
import { AddDepositPage } from '../features/add-deposit/add-deposit.page';

export const Route = createFileRoute('/add-deposit')({
  component: AddDepositPage,
});
