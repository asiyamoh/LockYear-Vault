import clsx from 'clsx';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  className,
}: DividerProps) {
  return (
    <div
      className={clsx(
        'bg-border-dark',
        {
          'h-px w-full': orientation === 'horizontal',
          'w-px h-full': orientation === 'vertical',
        },
        className
      )}
    />
  );
}

export default Divider;
