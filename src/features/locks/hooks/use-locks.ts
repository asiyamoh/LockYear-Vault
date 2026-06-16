import { useQuery } from '@tanstack/react-query';
import { fetchLocks } from '../api/locks.api';
import { lockKeys } from './lock-keys';

export function useLocks() {
  return useQuery({
    queryKey: lockKeys.individual(),
    queryFn: fetchLocks,
  });
}
