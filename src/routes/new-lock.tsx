import { createFileRoute } from '@tanstack/react-router';
import { NewLockPage } from '../features/new-lock/new-lock.page';

export const Route = createFileRoute('/new-lock')({
  component: NewLockPage,
});
