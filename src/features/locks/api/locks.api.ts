import { apiFetch } from '../../../lib/api-client';
import {
  CreateLockInput,
  GroupedLocksView,
  IndividualLocksView,
  Lock,
} from '../types';
import {
  parseGroupedLocksView,
  parseIndividualLocksView,
  parseLock,
  toDateOnlyString,
} from '../utils/parse-lock-response';

interface IndividualLocksApiResponse {
  totalLocked: number;
  nextUnlock: string | null;
  locks: Array<{
    id: string;
    period: string;
    amount: number;
    unlockDate: string;
    status: 'locked' | 'pending' | 'unlocked';
    createdAt: string;
  }>;
}

interface GroupedLocksApiResponse {
  totalLocked: number;
  nextUnlock: string | null;
  groups: Array<{
    period: string;
    totalAmount: number;
    unlockDate: string;
    lockCount: number;
  }>;
}

interface LockApiResponse {
  id: string;
  period: string;
  amount: number;
  unlockDate: string;
  status: 'locked' | 'pending' | 'unlocked';
  createdAt: string;
}

export async function fetchLocks(): Promise<IndividualLocksView> {
  const data = await apiFetch<IndividualLocksApiResponse>('/api/locks');
  return parseIndividualLocksView(data);
}

export async function fetchGroupedLocks(): Promise<GroupedLocksView> {
  const data = await apiFetch<GroupedLocksApiResponse>('/api/locks/grouped');
  return parseGroupedLocksView(data);
}

export async function createLock(input: CreateLockInput): Promise<Lock> {
  const data = await apiFetch<LockApiResponse>('/api/locks', {
    method: 'POST',
    body: JSON.stringify({
      amount: input.amount,
      unlockDate: toDateOnlyString(input.unlockDate),
    }),
  });

  return parseLock(data);
}
