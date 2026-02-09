import { GroupedLock } from '../../dashboard/types';
import { GroupedLockCard } from './grouped-lock-card';

interface GroupedLocksViewProps {
  groups: GroupedLock[];
}

export function GroupedLocksView({ groups }: GroupedLocksViewProps) {
  return (
    <>
      {/* Section Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-text-primary">
          Grouped by Time
        </h2>
      </div>

      {/* Grouped Lock Cards */}
      <div className="space-y-4">
        {groups.map((group, index) => (
          <GroupedLockCard
            key={index}
            period={group.period}
            totalAmount={group.totalAmount}
            unlockDate={group.unlockDate}
            lockCount={group.lockCount}
          />
        ))}
      </div>
    </>
  );
}

export default GroupedLocksView;
