import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';

export function LockFundsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Lock Funds"
          actions={[
            { label: 'Add Deposit', to: '/add-deposit', variant: 'secondary' },
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
