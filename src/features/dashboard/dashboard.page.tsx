import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { PageHeader } from '../../components/ui/page-header';
import { LocksEmptyState } from '../locks/components/locks-empty-state';
import { LocksQueryState } from '../locks/components/locks-query-state';
import { useLocks } from '../locks/hooks/use-locks';
import { toVaultSummary } from '../locks/utils/to-vault-summary';
import { VaultSummaryCard } from './components/vault-summary-card';
import { UpcomingLocksCard } from './components/upcoming-locks-card';

export function DashboardPage() {
  const { data, isLoading, isError, error, refetch } = useLocks();

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

        <div className="space-y-4 md:space-y-6 px-0 md:px-4 lg:px-8">
          <LocksQueryState
            isLoading={isLoading}
            isError={isError}
            errorMessage={error?.message}
            onRetry={() => refetch()}
          >
            {data && (
              <>
                <VaultSummaryCard vaultData={toVaultSummary(data)} />
                {data.locks.length > 0 ? (
                  <UpcomingLocksCard locks={data.locks} maxDisplay={4} />
                ) : (
                  <LocksEmptyState
                    title="Your vault is empty"
                    description="Start by creating a lock. Your balance and upcoming unlocks will appear here."
                  />
                )}
              </>
            )}
          </LocksQueryState>
        </div>
      </div>
    </DashboardLayout>
  );
}
