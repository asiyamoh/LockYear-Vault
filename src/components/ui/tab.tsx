import clsx from 'clsx';

interface TabProps {
  id: string;
  label: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

export function Tab({ id, label, isActive, onClick }: TabProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={clsx(
        'relative px-6 py-3 text-sm font-medium transition-all duration-200',
        'hover:text-text-primary',
        'focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 focus:ring-offset-bg-primary',
        {
          'text-text-primary': isActive,
          'text-text-secondary': !isActive,
        }
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {label}

      {/* Active indicator line */}
      <span
        className={clsx(
          'absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary transition-all duration-200',
          {
            'opacity-100 scale-x-100': isActive,
            'opacity-0 scale-x-0': !isActive,
          }
        )}
      />
    </button>
  );
}

export default Tab;
