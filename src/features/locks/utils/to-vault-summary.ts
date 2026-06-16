import { IndividualLocksView } from '../types';
import { VaultSummary } from '../../dashboard/types';

export function toVaultSummary(data: IndividualLocksView): VaultSummary {
  return {
    totalBalance: data.totalLocked,
    nextUnlockDate: data.nextUnlock,
    upcomingLocks: data.locks,
  };
}
