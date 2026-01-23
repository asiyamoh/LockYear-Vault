import { Card } from '../../components/ui/Card';
import { PageHeader } from '../../components/ui/PageHeader';
import { DashboardLayout } from '../../components/layout/DashboardLayout';

export function ActivityPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader title="Activity" />

        <Card variant="dark" padding="lg">
          <div className="text-center py-12">
            <h2 className="text-heading text-text-primary mb-4">
              Activity History
            </h2>
            <p className="text-text-secondary">
              This page will display your transaction history and account
              activity.
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
