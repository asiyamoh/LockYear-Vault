import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { PageHeader } from '../../components/ui/page-header';
import { VaultSummaryCard } from './components/vault-summary-card';
import { UpcomingLocksCard } from './components/upcoming-locks-card';
import { mockVaultData } from './mockData';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Dashboard"
          actions={[
            { label: 'Lock Funds', to: '/lock-funds', variant: 'primary' },
            { label: 'New Lock', to: '/new-lock', variant: 'secondary' },
          ]}
        />

        {/* Stacked Layout - Full Width with Horizontal Padding */}
        <div className="space-y-6 px-8 lg:px-16">
          {/* Vault Summary Card */}
          <VaultSummaryCard vaultData={mockVaultData} />

          {/* Upcoming Locks Card */}
          <UpcomingLocksCard
            locks={mockVaultData.upcomingLocks}
            maxDisplay={4}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
