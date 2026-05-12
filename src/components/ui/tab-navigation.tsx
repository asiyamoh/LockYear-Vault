import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Tab } from './tab';

export interface TabConfig {
  id: string;
  label: string;
  shortLabel?: string;
}

interface TabNavigationProps {
  tabs: TabConfig[];
}

export function TabNavigation({ tabs }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');
  // Controls whether the right-edge fade is visible
  const [showFade, setShowFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll spy — updates active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveTab(tabs[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  // Fade visibility — hide when the user has scrolled to the end of the tab bar
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const checkFade = () => {
      // If we're within 8px of the right edge, hide the fade
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      setShowFade(!atEnd);
    };

    // Also hide fade on sm+ where all tabs fit without scrolling
    const checkOverflow = () => {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      if (!hasOverflow) {
        setShowFade(false);
      } else {
        checkFade();
      }
    };

    el.addEventListener('scroll', checkFade);
    // Re-check on resize (e.g. rotating phone)
    window.addEventListener('resize', checkOverflow);
    checkOverflow();

    return () => {
      el.removeEventListener('scroll', checkFade);
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  const handleTabClick = (tabId: string) => {
    const section = document.getElementById(tabId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(tabId);
    }
  };

  return (
    <nav
      className="sticky top-0 z-20 bg-container-dark border-b border-border-dark rounded-2xl"
      aria-label="Section navigation"
    >
      {/* Scroll container + fade wrapper — position:relative lets the
          gradient overlay sit on top of the scrollable content */}
      <div className="relative">
        {/* Scrollable tab row */}
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto scrollbar-hide px-1"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              id={tab.id}
              label={tab.label}
              shortLabel={tab.shortLabel}
              isActive={activeTab === tab.id}
              onClick={handleTabClick}
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          className={clsx(
            'absolute right-0 top-0 bottom-0 w-16 pointer-events-none',
            'bg-gradient-to-l from-container-dark to-transparent',
            'transition-opacity duration-300',
            showFade ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </nav>
  );
}

export default TabNavigation;
