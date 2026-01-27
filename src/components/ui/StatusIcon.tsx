import clsx from 'clsx';

interface StatusIconProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
  className?: string;
}

export function StatusIcon({
  variant,
  size = 'lg',
  glow = false,
  className,
}: StatusIconProps) {
  const variantConfig = {
    success: {
      bgColor: 'bg-success',
      textColor: 'text-white',
      icon: (
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    error: {
      bgColor: 'bg-error',
      textColor: 'text-white',
      icon: (
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ),
    },
    warning: {
      bgColor: 'bg-warning',
      textColor: 'text-white',
      icon: (
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    info: {
      bgColor: 'bg-info',
      textColor: 'text-white',
      icon: (
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  };

  const sizeClasses = {
    sm: 'w-12 h-12 p-2',
    md: 'w-16 h-16 p-3',
    lg: 'w-24 h-24 p-5',
    xl: 'w-32 h-32 p-6',
  };

  const config = variantConfig[variant];

  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center',
        config.bgColor,
        config.textColor,
        sizeClasses[size],
        {
          'shadow-glow-green-lg': glow && variant === 'success',
        },
        className
      )}
    >
      {config.icon}
    </div>
  );
}

export default StatusIcon;
