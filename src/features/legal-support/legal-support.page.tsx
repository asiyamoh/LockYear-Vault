import { DashboardLayout } from '../../components/layout/dashboard-layout';
import { PageHeader } from '../../components/ui/page-header';
import { TabNavigation, TabConfig } from '../../components/ui/tab-navigation';
import { HowItWorksSection } from './sections/how-it-works-section';
import { YourFundsSection } from './sections/your-funds-section';
import { AccessRulesSection } from './sections/access-rules-section';
import { SupportContactSection } from './sections/support-contact-section';
import { LegalDocsSection } from './sections/legal-docs-section';

const tabs: TabConfig[] = [
  {
    id: 'how-it-works',
    label: 'How LockYear Works',
    shortLabel: 'How It Works',
  },
  {
    id: 'your-funds',
    label: 'Your Funds & Protections',
    shortLabel: 'Your Funds',
  },
  { id: 'access-rules', label: 'Access Rules', shortLabel: 'Access' },
  { id: 'support', label: 'Support & Contact', shortLabel: 'Support' },
  { id: 'legal-docs', label: 'Legal Documents', shortLabel: 'Legal Docs' },
];

export function LegalSupportPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader title="Legal & Support" />

        {/* Sticky Tab Navigation */}
        <TabNavigation tabs={tabs} />

        {/* All Sections */}
        <HowItWorksSection />
        <YourFundsSection />
        <AccessRulesSection />
        <SupportContactSection />
        <LegalDocsSection />
      </div>
    </DashboardLayout>
  );
}
