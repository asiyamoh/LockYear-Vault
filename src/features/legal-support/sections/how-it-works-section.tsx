import { Heading } from '../../../components/ui/typography';
import { ContentSection } from '../../../components/ui/content-section';
import { BulletList } from '../../../components/ui/bullet-list';

export function HowItWorksSection() {
  return (
    <ContentSection id="how-it-works">
      <Heading as="h2" variant="heading">
        How LockYear Works
      </Heading>

      <ContentSection.Text variant="intro">
        LockYear helps you save by letting you voluntarily lock money for a set
        period of time, removing the temptation to spend it early.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        LockYear is built around commitment-based saving. Instead of reminders
        or penalties, you choose — upfront — when your money becomes available
        again.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Here&apos;s how it works:
      </Heading>

      <BulletList>
        <BulletList.Item>
          You make a deposit and select a <strong>lock period</strong>, ranging
          from 1 week to 12 months.
        </BulletList.Item>
        <BulletList.Item>
          Each deposit is <strong>locked independently</strong>. Deposits cannot
          be combined, adjusted, or modified after confirmation.
        </BulletList.Item>
        <BulletList.Item>
          You may create multiple deposits at any time, even with the same{' '}
          <strong>lock duration</strong>.
        </BulletList.Item>
        <BulletList.Item>
          Once confirmed, locked funds cannot be accessed early for any reason
          other than those required by law.
        </BulletList.Item>
        <BulletList.Item>
          When a lock reaches maturity, the funds become available to withdraw
          or leave untouched.
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        LockYear does not encourage flexibility. The structure is intentional.
        By removing access until maturity, the platform helps reinforce
        discipline, predictability, and long-term saving habits.
      </ContentSection.Text>

      <ContentSection.Text variant="closing">
        Every deposit requires clear acknowledgement before it is locked.
      </ContentSection.Text>
    </ContentSection>
  );
}
