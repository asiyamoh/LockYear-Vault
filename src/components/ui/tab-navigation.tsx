import { useEffect, useState } from 'react';
import { Tab } from './tab';

export interface TabConfig {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: TabConfig[];
}

export function TabNavigation({ tabs }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.id || '');

  // Scroll spy effect - updates active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for sticky header

      // Find which section is currently in view
      for (let i = tabs.length - 1; i >= 0; i--) {
        const section = document.getElementById(tabs[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveTab(tabs[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tabs]);

  // Handle tab click - smooth scroll to section
  const handleTabClick = (tabId: string) => {
    const section = document.getElementById(tabId);
    if (section) {
      const yOffset = -100; // Offset for sticky header
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveTab(tabId);
    }
  };

  return (
    <nav
      className="sticky top-0 z-20 bg-container-dark border-b border-border-dark"
      aria-label="Section navigation"
    >
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <Tab
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            onClick={handleTabClick}
          />
        ))}
      </div>
    </nav>
  );
}

export default TabNavigation;
