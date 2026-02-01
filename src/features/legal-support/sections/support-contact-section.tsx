import { Heading } from '../../../components/ui/typography';
import { ContentSection } from '../../../components/ui/content-section';
import { BulletList } from '../../../components/ui/bullet-list';

export function SupportContactSection() {
  return (
    <ContentSection id="support">
      <Heading as="h2" variant="heading">
        Support & Contact
      </Heading>

      <ContentSection.Text variant="intro">
        LockYear support is here to help you understand how the platform works —
        not to change how it works.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        Our support team is available to answer questions about using LockYear,
        understanding deposits, and navigating your account.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Support can help with:
      </Heading>

      <BulletList>
        <BulletList.Item>
          General questions about how LockYear functions
        </BulletList.Item>
        <BulletList.Item>
          Clarification on deposits, locks, and maturity dates
        </BulletList.Item>
        <BulletList.Item>Account access issues</BulletList.Item>
        <BulletList.Item>
          Reporting suspected errors or unusual activity
        </BulletList.Item>
      </BulletList>

      <Heading as="h3" variant="subheading">
        Support cannot:
      </Heading>

      <BulletList>
        <BulletList.Item>Unlock funds early</BulletList.Item>
        <BulletList.Item>Modify or cancel an existing lock</BulletList.Item>
        <BulletList.Item>
          Change deposit terms after confirmation
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        This separation is intentional. By limiting what support can intervene
        in, LockYear ensures that all users are treated equally and that
        commitments remain protected.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        If you need assistance, you can contact LockYear through the official
        support channels listed below.
      </ContentSection.Text>

      <ContentSection.Text variant="closing">
        Support is here to guide — not override.
      </ContentSection.Text>
    </ContentSection>
  );
}
