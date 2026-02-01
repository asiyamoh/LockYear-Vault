import { Heading } from '../../../components/ui/typography';
import { ContentSection } from '../../../components/ui/content-section';
import { BulletList } from '../../../components/ui/bullet-list';

export function YourFundsSection() {
  return (
    <ContentSection id="your-funds">
      <Heading as="h2" variant="heading">
        Your Funds & Legal Protections
      </Heading>

      <ContentSection.Text variant="intro">
        Your money is protected by design. LockYear does not take ownership of
        your funds and cannot use them for any purpose other than holding them
        on your behalf.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        LockYear operates as a financial technology platform, not a bank. All
        customer funds are held in{' '}
        <strong>FDIC-insured custodial accounts</strong> through a regulated
        banking partner.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Here&apos;s what that means for you:
      </Heading>

      <BulletList>
        <BulletList.Item>
          Your funds are held in segregated &quot;For Benefit Of&quot; (FBO)
          accounts, legally separate from LockYear&apos;s operating funds.
        </BulletList.Item>
        <BulletList.Item>
          LockYear never lends, invests, or rehypothecates customer money.
        </BulletList.Item>
        <BulletList.Item>
          LockYear cannot withdraw, move, or access your funds outside of your
          direct instructions.
        </BulletList.Item>
        <BulletList.Item>
          Funds remain yours at all times, even while locked.
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        LockYear&apos;s systems track each deposit independently, with{' '}
        <strong>secure backend ledgers</strong> and{' '}
        <strong>immutable audit logs</strong>. This structure ensures accurate
        balances, clear ownership, and full transaction traceability.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        All deposits and withdrawals are processed through regulated banking
        infrastructure and subject to applicable consumer protection laws,
        including Regulation E error resolution.
      </ContentSection.Text>

      <ContentSection.Text variant="closing">
        LockYear is designed to be simple, transparent, and compliant — so you
        can focus on saving with confidence.
      </ContentSection.Text>
    </ContentSection>
  );
}
