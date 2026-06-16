const MS_PER_DAY = 24 * 60 * 60 * 1000;

const PERIOD_BUCKETS: { maxDays: number; label: string }[] = [
  { maxDays: 7, label: '1 Week Lock' },
  { maxDays: 30, label: '1 Month Lock' },
  { maxDays: 90, label: '3 Months Lock' },
  { maxDays: 180, label: '6 Months Lock' },
  { maxDays: 270, label: '9 Months Lock' },
  { maxDays: Infinity, label: '1 Year Lock' },
];

export function getRemainingDays(unlockAt: Date, now: Date = new Date()): number {
  const diffMs = unlockAt.getTime() - now.getTime();
  return Math.max(1, Math.ceil(diffMs / MS_PER_DAY));
}

export function getPeriodLabel(unlockAt: Date, now: Date = new Date()): string {
  const remainingDays = getRemainingDays(unlockAt, now);

  for (const bucket of PERIOD_BUCKETS) {
    if (remainingDays <= bucket.maxDays) {
      return bucket.label;
    }
  }

  return '1 Year Lock';
}
