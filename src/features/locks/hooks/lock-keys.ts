export const lockKeys = {
  all: ['locks'] as const,
  individual: () => [...lockKeys.all, 'individual'] as const,
  grouped: () => [...lockKeys.all, 'grouped'] as const,
};
