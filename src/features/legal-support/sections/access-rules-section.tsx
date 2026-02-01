import { Heading } from '../../../components/ui/typography';
import { ContentSection } from '../../../components/ui/content-section';
import { BulletList } from '../../../components/ui/bullet-list';

export function AccessRulesSection() {
  return (
    <ContentSection id="access-rules">
      <Heading as="h2" variant="heading">
        Access Rules
      </Heading>

      <ContentSection.Text variant="intro">
        LockYear enforces strict access rules to ensure that every deposit
        functions as a true commitment.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        When you create a deposit on LockYear, you are choosing to give up
        access to those funds until a specific point in time. This is a core
        part of how the platform works.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Funds may only be released under the following conditions:
      </Heading>

      <BulletList>
        <BulletList.Item>
          When the lock reaches its maturity date.
        </BulletList.Item>
        <BulletList.Item>
          When release is required by law, such as:
          <ul className="mt-2 ml-6 space-y-2">
            <li className="text-text-secondary">Court orders</li>
            <li className="text-text-secondary">Fraud correction</li>
            <li className="text-text-secondary">Estate administration</li>
          </ul>
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        Outside of these situations, there are no voluntary early withdrawals.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Important things to understand:
      </Heading>

      <BulletList>
        <BulletList.Item>
          LockYear support cannot unlock, modify, or override a lock.
        </BulletList.Item>
        <BulletList.Item>
          Lock terms cannot be changed once a deposit is confirmed.
        </BulletList.Item>
        <BulletList.Item>
          There is no &quot;break glass&quot; or emergency unlock feature.
        </BulletList.Item>
        <BulletList.Item>
          These rules apply equally to all users and all deposits.
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        This structure is intentional. By removing flexibility after
        confirmation, LockYear helps protect your commitment and reduce
        impulse-based decisions.
      </ContentSection.Text>

      <ContentSection.Text variant="closing">
        If flexibility is what you need, LockYear may not be the right tool —
        and that&apos;s okay.
      </ContentSection.Text>
    </ContentSection>
  );
}
