import { VaultSummary, LocksGroupedView, LocksIndividualView } from './types';

// ============================================
// GROUPED VIEW - 4 time periods, 5 locks each
// ============================================
export const mockLocksGrouped: LocksGroupedView = {
  totalLocked: 11286.0,
  nextUnlock: new Date('2026-05-09'),
  groups: [
    {
      period: '3 Months Lock',
      totalAmount: 430.0,
      unlockDate: new Date('2026-05-17'),
      lockCount: 5,
    },
    {
      period: '6 Months Lock',
      totalAmount: 1050.0,
      unlockDate: new Date('2026-08-17'),
      lockCount: 5,
    },
    {
      period: '9 Months Lock',
      totalAmount: 2500.0,
      unlockDate: new Date('2026-11-17'),
      lockCount: 5,
    },
    {
      period: '1 Year Lock',
      totalAmount: 7306.0,
      unlockDate: new Date('2027-02-17'),
      lockCount: 5,
    },
  ],
};

// ============================================
// INDIVIDUAL VIEW - All 20 locks listed
// ============================================
export const mockLocksIndividual: LocksIndividualView = {
  totalLocked: 11286.0,
  nextUnlock: new Date('2026-05-09'),
  locks: [
    // ===== 3 MONTHS LOCK GROUP (5 locks) =====
    {
      id: '1',
      period: '3 Months Lock',
      amount: 50.0,
      unlockDate: new Date('2026-05-09'),
      status: 'locked',
      createdAt: new Date('2026-02-09'),
    },
    {
      id: '2',
      period: '3 Months Lock',
      amount: 75.0,
      unlockDate: new Date('2026-05-11'),
      status: 'locked',
      createdAt: new Date('2026-02-11'),
    },
    {
      id: '3',
      period: '3 Months Lock',
      amount: 120.0,
      unlockDate: new Date('2026-05-13'),
      status: 'locked',
      createdAt: new Date('2026-02-13'),
    },
    {
      id: '4',
      period: '3 Months Lock',
      amount: 85.0,
      unlockDate: new Date('2026-05-15'),
      status: 'locked',
      createdAt: new Date('2026-02-15'),
    },
    {
      id: '5',
      period: '3 Months Lock',
      amount: 100.0,
      unlockDate: new Date('2026-05-17'),
      status: 'locked',
      createdAt: new Date('2026-02-17'),
    },

    // ===== 6 MONTHS LOCK GROUP (5 locks) =====
    {
      id: '6',
      period: '6 Months Lock',
      amount: 200.0,
      unlockDate: new Date('2026-08-09'),
      status: 'locked',
      createdAt: new Date('2026-02-09'),
    },
    {
      id: '7',
      period: '6 Months Lock',
      amount: 150.0,
      unlockDate: new Date('2026-08-11'),
      status: 'locked',
      createdAt: new Date('2026-02-11'),
    },
    {
      id: '8',
      period: '6 Months Lock',
      amount: 250.0,
      unlockDate: new Date('2026-08-13'),
      status: 'locked',
      createdAt: new Date('2026-02-13'),
    },
    {
      id: '9',
      period: '6 Months Lock',
      amount: 180.0,
      unlockDate: new Date('2026-08-15'),
      status: 'locked',
      createdAt: new Date('2026-02-15'),
    },
    {
      id: '10',
      period: '6 Months Lock',
      amount: 270.0,
      unlockDate: new Date('2026-08-17'),
      status: 'locked',
      createdAt: new Date('2026-02-17'),
    },

    // ===== 9 MONTHS LOCK GROUP (5 locks) =====
    {
      id: '11',
      period: '9 Months Lock',
      amount: 400.0,
      unlockDate: new Date('2026-11-09'),
      status: 'locked',
      createdAt: new Date('2026-02-09'),
    },
    {
      id: '12',
      period: '9 Months Lock',
      amount: 550.0,
      unlockDate: new Date('2026-11-11'),
      status: 'locked',
      createdAt: new Date('2026-02-11'),
    },
    {
      id: '13',
      period: '9 Months Lock',
      amount: 350.0,
      unlockDate: new Date('2026-11-13'),
      status: 'locked',
      createdAt: new Date('2026-02-13'),
    },
    {
      id: '14',
      period: '9 Months Lock',
      amount: 600.0,
      unlockDate: new Date('2026-11-15'),
      status: 'locked',
      createdAt: new Date('2026-02-15'),
    },
    {
      id: '15',
      period: '9 Months Lock',
      amount: 600.0,
      unlockDate: new Date('2026-11-17'),
      status: 'locked',
      createdAt: new Date('2026-02-17'),
    },

    // ===== 1 YEAR LOCK GROUP (5 locks) =====
    {
      id: '16',
      period: '1 Year Lock',
      amount: 1000.0,
      unlockDate: new Date('2027-02-09'),
      status: 'locked',
      createdAt: new Date('2026-02-09'),
    },
    {
      id: '17',
      period: '1 Year Lock',
      amount: 1500.0,
      unlockDate: new Date('2027-02-11'),
      status: 'locked',
      createdAt: new Date('2026-02-11'),
    },
    {
      id: '18',
      period: '1 Year Lock',
      amount: 1806.0,
      unlockDate: new Date('2027-02-13'),
      status: 'locked',
      createdAt: new Date('2026-02-13'),
    },
    {
      id: '19',
      period: '1 Year Lock',
      amount: 2000.0,
      unlockDate: new Date('2027-02-15'),
      status: 'locked',
      createdAt: new Date('2026-02-15'),
    },
    {
      id: '20',
      period: '1 Year Lock',
      amount: 1000.0,
      unlockDate: new Date('2027-02-17'),
      status: 'locked',
      createdAt: new Date('2026-02-17'),
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
