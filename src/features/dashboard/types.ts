export interface Lock {
  id: string;
  period: string;
  amount: number;
  unlockDate: Date;
  status: 'locked' | 'pending' | 'unlocked';
}

export interface VaultSummary {
  totalBalance: number;
  nextUnlockDate: Date;
  upcomingLocks: Lock[];
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
