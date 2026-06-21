import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { Card } from '../../components/ui/card';
import { PageHeader } from '../../components/ui/page-header';
import { LocksEmptyState } from '../locks/components/locks-empty-state';
import { LocksQueryState } from '../locks/components/locks-query-state';
import { useLocksGrouped } from '../locks/hooks/use-locks-grouped';
import { useLocks } from '../locks/hooks/use-locks';
import { LockFundsTabs } from './components/lock-funds-tabs';
import { LockFundsSummary } from './components/lock-funds-summary';
import { GroupedLocksView } from './components/grouped-locks-view';
import { IndividualLocksView } from './components/individual-locks-view';

export function LockFundsPage() {
  const [activeTab, setActiveTab] = useState<'grouped' | 'individual'>(
    'grouped',
  );

  const individualQuery = useLocks();
  const groupedQuery = useLocksGrouped();

  const isLoading = individualQuery.isLoading || groupedQuery.isLoading;
  const isError = individualQuery.isError || groupedQuery.isError;
  const errorMessage =
    individualQuery.error?.message ?? groupedQuery.error?.message;

  const handleRetry = () => {
    individualQuery.refetch();
    groupedQuery.refetch();
  };

  const individualData = individualQuery.data;
  const groupedData = groupedQuery.data;

  const summaryData = activeTab === 'grouped' ? groupedData : individualData;

  const hasLocks =
    activeTab === 'grouped'
      ? (groupedData?.groups.length ?? 0) > 0
      : (individualData?.locks.length ?? 0) > 0;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="Lock Funds"
          subtitle="View your active locks and upcoming unlocks."
        />

        <Card variant="dark" padding="lg">
          <LockFundsTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <LocksQueryState
            isLoading={isLoading}
            isError={isError}
            errorMessage={errorMessage}
            onRetry={handleRetry}
          >
            {summaryData && (
              <>
                <LockFundsSummary
                  totalLocked={summaryData.totalLocked}
                  nextUnlock={summaryData.nextUnlock}
                />

                {!hasLocks ? (
                  <LocksEmptyState />
                ) : activeTab === 'grouped' && groupedData ? (
                  <GroupedLocksView groups={groupedData.groups} />
                ) : individualData ? (
                  <IndividualLocksView locks={individualData.locks} />
                ) : null}
              </>
            )}
          </LocksQueryState>
        </Card>
      </div>
    </DashboardLayout>
  );
}
