import { LockResponseDto } from './lock-response.dto';

export class LocksIndividualResponseDto {
  totalLocked: number;
  nextUnlock: string | null;
  locks: LockResponseDto[];
}
