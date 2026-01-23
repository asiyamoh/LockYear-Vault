import { LockClosedIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { Link } from '@tanstack/react-router';

interface LogoProps {
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, showIcon = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const iconSizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  return (
    <Link
      to="/dashboard"
      className={clsx(
        'flex items-center gap-2 group transition-opacity hover:opacity-80',
        className
      )}
    >
      {showIcon && (
        <div className="relative">
          <LockClosedIcon
            className={clsx(
              iconSizeClasses[size],
              'text-green-primary group-hover:text-green-hover transition-colors'
            )}
          />
        </div>
      )}
      <span
        className={clsx(
          sizeClasses[size],
          'font-bold text-text-primary tracking-tight'
        )}
      >
        Lock<span className="text-green-primary">Year</span>
      </span>
    </Link>
  );
}

export default Logo;
