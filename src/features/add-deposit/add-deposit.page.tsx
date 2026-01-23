import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';

export function AddDepositPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Add Deposit"
          actions={[
            { label: 'Lock Funds', to: '/lock-funds', variant: 'primary' },
          ]}
        />

        <Card variant="dark" padding="lg">
          <div className="text-center py-12">
            <h2 className="text-heading text-text-primary mb-4">
              Add Deposit Feature
            </h2>
            <p className="text-text-secondary">
              This page will contain the deposit form and payment options.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
