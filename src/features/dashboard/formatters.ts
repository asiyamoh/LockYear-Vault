import { CountdownTime } from './types';

/**
 * Calculate the time remaining until a target date
 * @param targetDate - The date to count down to
 * @returns Object with days, hours, minutes, and seconds remaining
 */
export function calculateCountdown(targetDate: Date): CountdownTime {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  // If the date has passed, return zeros
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

/**
 * Format a date to a readable string (e.g., "Jan 15, 2026")
 * @param date - The date to format
 * @returns Formatted date string
 */
export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Format currency amount
 * @param amount - The amount to format
 * @returns Formatted currency string (e.g., "$4,286.00")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
