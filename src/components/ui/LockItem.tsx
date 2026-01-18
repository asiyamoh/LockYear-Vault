import clsx from 'clsx';
import React from 'react';

interface LockItemProps {
  icon?: React.ReactNode;
  title: string;
  amount: string;
  unlockDate: string;
  period?: string;
  onClick?: () => void;
  className?: string;
}

export function LockItem({
  icon,
  title,
  amount,
  unlockDate,
  period,
  onClick,
  className,
}: LockItemProps) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      onClick={onClick}
      className={clsx(
        'w-full p-4 bg-container-light rounded-lg border border-border-dark',
        'flex items-center gap-4 text-left transition-colors',
        {
          'hover:bg-container-hover hover:border-border-light cursor-pointer':
            onClick,
        },
        className
      )}
    >
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center text-green-primary">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h4 className="text-sm font-semibold text-text-primary truncate">
            {title}
          </h4>
          <span className="text-sm font-bold text-text-primary whitespace-nowrap">
            {amount}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-text-muted">
          <span>Unlocks: {unlockDate}</span>
          {period && (
            <>
              <span>•</span>
              <span>{period}</span>
            </>
          )}
        </div>
      </div>
    </Component>
  );
}

export default LockItem;
