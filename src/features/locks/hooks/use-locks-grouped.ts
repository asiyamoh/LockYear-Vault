import { useQuery } from '@tanstack/react-query';
import { fetchGroupedLocks } from '../api/locks.api';
import { lockKeys } from './lock-keys';

export function useLocksGrouped() {
  return useQuery({
    queryKey: lockKeys.grouped(),
    queryFn: fetchGroupedLocks,
  });
}
