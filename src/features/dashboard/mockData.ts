import { VaultSummary } from './types';

// Mock data for development - will be replaced with API calls
export const mockVaultData: VaultSummary = {
  totalBalance: 4286.0,
  nextUnlockDate: new Date('2028-01-15'),
  upcomingLocks: [
    {
      id: '1',
      period: '1 Week Lock',
      amount: 42.0,
      unlockDate: new Date('2026-01-15'),
      status: 'locked',
    },
    {
      id: '2',
      period: '2 Weeks Lock',
      amount: 110.0,
      unlockDate: new Date('2026-01-22'),
      status: 'locked',
    },
    {
      id: '3',
      period: '1 Month Lock',
      amount: 1200.0,
      unlockDate: new Date('2026-02-10'),
      status: 'locked',
    },
    {
      id: '4',
      period: '1 Year Lock',
      amount: 2934.0,
      unlockDate: new Date('2027-01-10'),
      status: 'locked',
    },
    {
      id: '5',
      period: '2 Year Lock',
      amount: 21134.0,
      unlockDate: new Date('2028-01-10'),
      status: 'locked',
    },
  ],
};
