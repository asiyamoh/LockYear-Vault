export interface Lock {
  id: string;
  period: string;
  amount: number;
  unlockDate: Date;
  status: 'locked' | 'pending' | 'unlocked';
  createdAt: Date;
}

export interface GroupedLock {
  period: string;
  totalAmount: number;
  unlockDate: Date;
  lockCount: number;
}

export interface LocksGroupedView {
  totalLocked: number;
  nextUnlock: Date;
  groups: GroupedLock[];
}

export interface LocksIndividualView {
  totalLocked: number;
  nextUnlock: Date;
  locks: Lock[];
}

// For backwards compatibility with dashboard
export interface VaultSummary {
  totalBalance: number;
  nextUnlockDate: Date;
  upcomingLocks: Lock[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
