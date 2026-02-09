import { VaultSummary, LocksGroupedView, LocksIndividualView } from './types';

// ============================================
// GROUPED VIEW - 4 time periods, 5 locks each
// ============================================
export const mockLocksGrouped: LocksGroupedView = {
  totalLocked: 11286.0,
  nextUnlock: new Date('2026-02-03'),
  groups: [
    {
      period: '1 Week Lock',
      totalAmount: 430.0,
      unlockDate: new Date('2026-02-09'),
      lockCount: 5,
    },
    {
      period: '2 Weeks Lock',
      totalAmount: 1050.0,
      unlockDate: new Date('2026-02-16'),
      lockCount: 5,
    },
    {
      period: '1 Month Lock',
      totalAmount: 2500.0,
      unlockDate: new Date('2026-03-04'),
      lockCount: 5,
    },
    {
      period: '1 Year Lock',
      totalAmount: 7306.0,
      unlockDate: new Date('2027-01-15'),
      lockCount: 5,
    },
  ],
};

// ============================================
// INDIVIDUAL VIEW - All 20 locks listed
// ============================================
export const mockLocksIndividual: LocksIndividualView = {
  totalLocked: 11286.0,
  nextUnlock: new Date('2026-02-03'),
  locks: [
    // ===== 1 WEEK LOCK GROUP (5 locks) =====
    {
      id: '1',
      period: '1 Week Lock',
      amount: 50.0,
      unlockDate: new Date('2026-02-03'),
      status: 'locked',
      createdAt: new Date('2026-01-27'),
    },
    {
      id: '2',
      period: '1 Week Lock',
      amount: 75.0,
      unlockDate: new Date('2026-02-05'),
      status: 'locked',
      createdAt: new Date('2026-01-29'),
    },
    {
      id: '3',
      period: '1 Week Lock',
      amount: 120.0,
      unlockDate: new Date('2026-02-07'),
      status: 'locked',
      createdAt: new Date('2026-01-31'),
    },
    {
      id: '4',
      period: '1 Week Lock',
      amount: 85.0,
      unlockDate: new Date('2026-02-08'),
      status: 'locked',
      createdAt: new Date('2026-02-01'),
    },
    {
      id: '5',
      period: '1 Week Lock',
      amount: 100.0,
      unlockDate: new Date('2026-02-09'),
      status: 'locked',
      createdAt: new Date('2026-02-02'),
    },

    // ===== 2 WEEKS LOCK GROUP (5 locks) =====
    {
      id: '6',
      period: '2 Weeks Lock',
      amount: 200.0,
      unlockDate: new Date('2026-02-10'),
      status: 'locked',
      createdAt: new Date('2026-01-27'),
    },
    {
      id: '7',
      period: '2 Weeks Lock',
      amount: 150.0,
      unlockDate: new Date('2026-02-11'),
      status: 'locked',
      createdAt: new Date('2026-01-28'),
    },
    {
      id: '8',
      period: '2 Weeks Lock',
      amount: 250.0,
      unlockDate: new Date('2026-02-13'),
      status: 'locked',
      createdAt: new Date('2026-01-30'),
    },
    {
      id: '9',
      period: '2 Weeks Lock',
      amount: 180.0,
      unlockDate: new Date('2026-02-15'),
      status: 'locked',
      createdAt: new Date('2026-02-01'),
    },
    {
      id: '10',
      period: '2 Weeks Lock',
      amount: 270.0,
      unlockDate: new Date('2026-02-16'),
      status: 'locked',
      createdAt: new Date('2026-02-02'),
    },

    // ===== 1 MONTH LOCK GROUP (5 locks) =====
    {
      id: '11',
      period: '1 Month Lock',
      amount: 400.0,
      unlockDate: new Date('2026-02-24'),
      status: 'locked',
      createdAt: new Date('2026-01-24'),
    },
    {
      id: '12',
      period: '1 Month Lock',
      amount: 550.0,
      unlockDate: new Date('2026-02-26'),
      status: 'locked',
      createdAt: new Date('2026-01-26'),
    },
    {
      id: '13',
      period: '1 Month Lock',
      amount: 350.0,
      unlockDate: new Date('2026-02-28'),
      status: 'locked',
      createdAt: new Date('2026-01-28'),
    },
    {
      id: '14',
      period: '1 Month Lock',
      amount: 600.0,
      unlockDate: new Date('2026-03-02'),
      status: 'locked',
      createdAt: new Date('2026-01-30'),
    },
    {
      id: '15',
      period: '1 Month Lock',
      amount: 600.0,
      unlockDate: new Date('2026-03-04'),
      status: 'locked',
      createdAt: new Date('2026-02-02'),
    },

    // ===== 1 YEAR LOCK GROUP (5 locks) =====
    {
      id: '16',
      period: '1 Year Lock',
      amount: 1000.0,
      unlockDate: new Date('2026-07-15'),
      status: 'locked',
      createdAt: new Date('2025-07-15'),
    },
    {
      id: '17',
      period: '1 Year Lock',
      amount: 1500.0,
      unlockDate: new Date('2026-09-20'),
      status: 'locked',
      createdAt: new Date('2025-09-20'),
    },
    {
      id: '18',
      period: '1 Year Lock',
      amount: 1806.0,
      unlockDate: new Date('2026-11-10'),
      status: 'locked',
      createdAt: new Date('2025-11-10'),
    },
    {
      id: '19',
      period: '1 Year Lock',
      amount: 2000.0,
      unlockDate: new Date('2027-01-05'),
      status: 'locked',
      createdAt: new Date('2026-01-05'),
    },
    {
      id: '20',
      period: '1 Year Lock',
      amount: 1000.0,
      unlockDate: new Date('2027-01-15'),
      status: 'locked',
      createdAt: new Date('2026-01-15'),
    },
  ],
};

// ============================================
// LEGACY: For Dashboard compatibility
// ============================================
export const mockVaultData: VaultSummary = {
  totalBalance: mockLocksIndividual.totalLocked,
  nextUnlockDate: mockLocksIndividual.nextUnlock,
  upcomingLocks: mockLocksIndividual.locks,
};
