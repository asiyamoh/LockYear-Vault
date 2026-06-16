import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createLock } from '../api/locks.api';
import { CreateLockInput } from '../types';
import { lockKeys } from './lock-keys';

export function useCreateLock() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input: CreateLockInput) => createLock(input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: lockKeys.all });
    },
  });
}
