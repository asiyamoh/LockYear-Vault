import { Lock as PrismaLock, LockStatus } from '@prisma/client';
import { LockResponseDto } from '../dto/lock-response.dto';
import { getPeriodLabel } from './period.util';

export type FrontendLockStatus = 'locked' | 'pending' | 'unlocked';

export function centsToDollars(amountCents: number): number {
  return amountCents / 100;
}

export function dollarsToCents(amount: number): number {
  return Math.round(amount * 100);
}

export function mapLockStatus(status: LockStatus): FrontendLockStatus {
  switch (status) {
    case LockStatus.LOCKED:
      return 'locked';
    case LockStatus.PENDING_CONFIRMATION:
      return 'pending';
    case LockStatus.MATURED:
    case LockStatus.WITHDRAWN:
    default:
      return 'unlocked';
  }
}

export function toLockResponse(
  lock: PrismaLock,
  now: Date = new Date(),
): LockResponseDto {
  return {
    id: lock.id,
    period: getPeriodLabel(lock.unlockAt, now),
    amount: centsToDollars(lock.amountCents),
    unlockDate: lock.unlockAt.toISOString(),
    status: mapLockStatus(lock.status),
    createdAt: lock.createdAt.toISOString(),
  };
}
