import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';

export function LegalSupportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader title="Legal & Support" />

        <Card variant="dark" padding="lg">
          <div className="text-center py-12">
            <h2 className="text-heading text-text-primary mb-4">
              Legal & Support Center
            </h2>
            <p className="text-text-secondary">
              This page will contain legal documents, terms of service, and
              support resources.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
