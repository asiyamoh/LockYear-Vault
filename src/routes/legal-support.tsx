import { createFileRoute } from '@tanstack/react-router';
import { LegalSupportPage } from '../features/legal-support/legal-support.page';

export const Route = createFileRoute('/legal-support')({
  component: LegalSupportPage,
});
