import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { PageHeader } from '../../components/ui/page-header';
import { VaultSummaryCard } from './components/vault-summary-card';
import { UpcomingLocksCard } from './components/upcoming-locks-card';
import { mockVaultData } from './mockData';

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4 md:space-y-6">
        <PageHeader
          title="Dashboard"
          actions={[
            { label: 'Lock Funds', to: '/lock-funds', variant: 'primary' },
            { label: 'New Lock', to: '/new-lock', variant: 'secondary' },
          ]}
        />

        {/* Cards — no side padding on mobile, modest padding on tablet, more on desktop */}
        <div className="space-y-4 md:space-y-6 px-0 md:px-4 lg:px-8">
          <VaultSummaryCard vaultData={mockVaultData} />
          <UpcomingLocksCard
            locks={mockVaultData.upcomingLocks}
            maxDisplay={4}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}
