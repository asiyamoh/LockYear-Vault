import { useState } from 'react';
import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { Card } from '../../components/ui/card';
import { PageHeader } from '../../components/ui/page-header';
import { mockLocksGrouped, mockLocksIndividual } from '../dashboard/mockData';
import { LockFundsTabs } from './components/lock-funds-tabs';
import { LockFundsSummary } from './components/lock-funds-summary';
import { GroupedLocksView } from './components/grouped-locks-view';
import { IndividualLocksView } from './components/individual-locks-view';

export function LockFundsPage() {
  const [activeTab, setActiveTab] = useState<'grouped' | 'individual'>(
    'grouped'
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <PageHeader
          title="Lock Funds"
          subtitle="View your active locks and upcoming unlocks."
        />

        {/* Main Content Card */}
        <Card variant="dark" padding="lg">
          {/* Tabs */}
          <LockFundsTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Summary Section */}
          <LockFundsSummary
            totalLocked={
              activeTab === 'grouped'
                ? mockLocksGrouped.totalLocked
                : mockLocksIndividual.totalLocked
            }
            nextUnlock={
              activeTab === 'grouped'
                ? mockLocksGrouped.nextUnlock
                : mockLocksIndividual.nextUnlock
            }
          />

          {/* Conditional Content Based on Active Tab */}
          {activeTab === 'grouped' ? (
            <GroupedLocksView groups={mockLocksGrouped.groups} />
          ) : (
            <IndividualLocksView locks={mockLocksIndividual.locks} />
          )}
        </Card>
      </div>
    </DashboardLayout>
  );
}
