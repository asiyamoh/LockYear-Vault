import { FrontendLockStatus } from '../utils/lock.mapper';

export class LockResponseDto {
  id: string;
  period: string;
  amount: number;
  unlockDate: string;
  status: FrontendLockStatus;
  createdAt: string;
}
