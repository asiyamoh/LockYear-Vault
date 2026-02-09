import clsx from 'clsx';

interface LockFundsTabsProps {
  activeTab: 'grouped' | 'individual';
  onTabChange: (tab: 'grouped' | 'individual') => void;
}

export function LockFundsTabs({ activeTab, onTabChange }: LockFundsTabsProps) {
  return (
    <div className="flex gap-1 border-b border-border-dark">
      <button
        onClick={() => onTabChange('grouped')}
        className={clsx(
          'px-6 py-3 text-sm font-medium transition-colors relative',
          activeTab === 'grouped'
            ? 'text-text-primary'
            : 'text-text-muted hover:text-text-secondary'
        )}
      >
        Grouped by Time
        {activeTab === 'grouped' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary"></div>
        )}
      </button>
      <button
        onClick={() => onTabChange('individual')}
        className={clsx(
          'px-6 py-3 text-sm font-medium transition-colors relative',
          activeTab === 'individual'
            ? 'text-text-primary'
            : 'text-text-muted hover:text-text-secondary'
        )}
      >
        Individual Deposits
        {activeTab === 'individual' && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-primary"></div>
        )}
      </button>
    </div>
  );
}

export default LockFundsTabs;
