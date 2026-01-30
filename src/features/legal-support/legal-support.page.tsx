import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { Card } from '../../components/ui/card';
import { PageHeader } from '../../components/ui/page-header';

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
