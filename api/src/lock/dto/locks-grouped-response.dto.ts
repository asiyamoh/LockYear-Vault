import { GroupedLockResponseDto } from './grouped-lock-response.dto';

export class LocksGroupedResponseDto {
  totalLocked: number;
  nextUnlock: string | null;
  groups: GroupedLockResponseDto[];
}
