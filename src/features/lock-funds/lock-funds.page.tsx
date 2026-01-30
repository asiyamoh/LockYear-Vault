import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { Card } from '../../components/ui/card';
import { PageHeader } from '../../components/ui/page-header';

export function LockFundsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Lock Funds"
          actions={[
            { label: 'New Lock', to: '/new-lock', variant: 'secondary' },
          ]}
        />

        <Card variant="dark" padding="lg">
          <div className="text-center py-12">
            <h2 className="text-heading text-text-primary mb-4">
              Lock Funds Feature
            </h2>
            <p className="text-text-secondary">
              This page will contain the lock funds form and period selection.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
