export type LockStatus = 'locked' | 'pending' | 'unlocked';

export interface Lock {
  id: string;
  period: string;
  amount: number;
  unlockDate: Date;
  status: LockStatus;
  createdAt: Date;
}

export interface GroupedLock {
  period: string;
  totalAmount: number;
  unlockDate: Date;
  lockCount: number;
}

export interface GroupedLocksView {
  totalLocked: number;
  nextUnlock: Date | null;
  groups: GroupedLock[];
}

export interface IndividualLocksView {
  totalLocked: number;
  nextUnlock: Date | null;
  locks: Lock[];
}

export interface CreateLockInput {
  amount: number;
  unlockDate: Date;
}
