import clsx from 'clsx';
import React from 'react';

interface CheckListProps {
  items: string[];
  className?: string;
}

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={clsx('space-y-3', className)}>
      {items.map((item, index) => (
        <CheckListItem key={index}>{item}</CheckListItem>
      ))}
    </ul>
  );
}

interface CheckListItemProps {
  children: React.ReactNode;
  checked?: boolean;
  className?: string;
}

export function CheckListItem({
  children,
  checked = true,
  className,
}: CheckListItemProps) {
  return (
    <li className={clsx('flex items-start gap-3', className)}>
      <span className="flex-shrink-0 mt-0.5">
        {checked ? (
          <svg
            className="w-5 h-5 text-success"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-text-muted"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </span>
      <span className="text-text-secondary text-sm">{children}</span>
    </li>
  );
}

export default CheckList;
