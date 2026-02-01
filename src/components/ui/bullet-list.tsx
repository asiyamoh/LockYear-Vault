import clsx from 'clsx';
import React from 'react';

interface BulletListProps {
  children: React.ReactNode;
  className?: string;
}

interface BulletItemProps {
  children: React.ReactNode;
  className?: string;
}

function BulletListRoot({ children, className }: BulletListProps) {
  return <ul className={clsx('space-y-3 my-6', className)}>{children}</ul>;
}

function BulletItem({ children, className }: BulletItemProps) {
  return (
    <li
      className={clsx(
        'flex gap-3 text-base text-text-secondary leading-relaxed',
        className
      )}
    >
      {/* Custom bullet point */}
      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2" />

      {/* Content */}
      <span className="flex-1">{children}</span>
    </li>
  );
}

export const BulletList = Object.assign(BulletListRoot, {
  Item: BulletItem,
});

export default BulletList;
