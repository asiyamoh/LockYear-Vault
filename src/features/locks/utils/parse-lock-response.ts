import {
  GroupedLock,
  GroupedLocksView,
  IndividualLocksView,
  Lock,
} from '../types';

function parseDate(value: string | null): Date | null {
  if (!value) {
    return null;
  }

  return new Date(value);
}

export function toDateOnlyString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function parseLock(data: {
  id: string;
  period: string;
  amount: number;
  unlockDate: string;
  status: Lock['status'];
  createdAt: string;
}): Lock {
  return {
    id: data.id,
    period: data.period,
    amount: data.amount,
    unlockDate: new Date(data.unlockDate),
    status: data.status,
    createdAt: new Date(data.createdAt),
  };
}

export function parseGroupedLock(data: {
  period: string;
  totalAmount: number;
  unlockDate: string;
  lockCount: number;
}): GroupedLock {
  return {
    period: data.period,
    totalAmount: data.totalAmount,
    unlockDate: new Date(data.unlockDate),
    lockCount: data.lockCount,
  };
}

export function parseIndividualLocksView(data: {
  totalLocked: number;
  nextUnlock: string | null;
  locks: Array<{
    id: string;
    period: string;
    amount: number;
    unlockDate: string;
    status: Lock['status'];
    createdAt: string;
  }>;
}): IndividualLocksView {
  return {
    totalLocked: data.totalLocked,
    nextUnlock: parseDate(data.nextUnlock),
    locks: data.locks.map(parseLock),
  };
}

export function parseGroupedLocksView(data: {
  totalLocked: number;
  nextUnlock: string | null;
  groups: Array<{
    period: string;
    totalAmount: number;
    unlockDate: string;
    lockCount: number;
  }>;
}): GroupedLocksView {
  return {
    totalLocked: data.totalLocked,
    nextUnlock: parseDate(data.nextUnlock),
    groups: data.groups.map(parseGroupedLock),
  };
}
