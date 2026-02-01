import { Heading } from '../../../components/ui/typography';
import { ContentSection } from '../../../components/ui/content-section';
import { BulletList } from '../../../components/ui/bullet-list';

export function LegalDocsSection() {
  return (
    <ContentSection id="legal-docs">
      <Heading as="h2" variant="heading">
        Legal Documents
      </Heading>

      <ContentSection.Text variant="intro">
        These documents explain the legal framework that governs your use of
        LockYear.
      </ContentSection.Text>

      <ContentSection.Text variant="body">
        LockYear operates under a clear set of legal agreements designed to
        protect both users and the platform. Before using LockYear, we encourage
        you to review these documents carefully.
      </ContentSection.Text>

      <Heading as="h3" variant="subheading">
        Available documents include:
      </Heading>

      <BulletList>
        <BulletList.Item>
          <strong>Terms of Service</strong>
          <br />
          <span className="text-text-muted">
            Defines how LockYear operates and the rules that apply to all users.
          </span>
        </BulletList.Item>
        <BulletList.Item>
          <strong>User Agreement</strong>
          <br />
          <span className="text-text-muted">
            Explains your responsibilities when creating deposits and locks.
          </span>
        </BulletList.Item>
        <BulletList.Item>
          <strong>Privacy Policy</strong>
          <br />
          <span className="text-text-muted">
            Describes how your data is collected, used, and protected.
          </span>
        </BulletList.Item>
        <BulletList.Item>
          <strong>Funds Handling Disclosure</strong>
          <br />
          <span className="text-text-muted">
            Outlines how deposits are stored, protected, and released.
          </span>
        </BulletList.Item>
      </BulletList>

      <ContentSection.Text variant="body">
        Each document is available as a separate link and can be reviewed at any
        time.
      </ContentSection.Text>

      <ContentSection.Text variant="closing">
        Using LockYear means agreeing to these terms in full.
      </ContentSection.Text>
    </ContentSection>
  );
}
