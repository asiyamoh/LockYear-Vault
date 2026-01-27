import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { PageHeader } from '../../components/ui/PageHeader';
import { VaultSummaryCard } from './components/VaultSummaryCard';
import { UpcomingLocksCard } from './components/UpcomingLocksCard';
import { mockVaultData } from './mockData';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Dashboard"
          actions={[
            { label: 'Lock Funds', to: '/lock-funds', variant: 'primary' },
            { label: 'Add Deposit', to: '/add-deposit', variant: 'secondary' },
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
