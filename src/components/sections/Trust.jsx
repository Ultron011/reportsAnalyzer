import Section from '../ui/Section.jsx'
import Card from '../ui/Card.jsx'
import CredentialBlock from '../ui/CredentialBlock.jsx'
import PrivacyDisclosure from '../ui/PrivacyDisclosure.jsx'
import Alert from '../ui/Alert.jsx'
import './Trust.css'

export default function Trust() {
  return (
    <Section id="trust" ground="surface-2">
      <h2 className="ra-h2">What it can do, and what it can't</h2>

      <div className="ra-trust__grid">
        <Card as="div" className="ra-trust__card">
          <h3 className="ra-trust__card-title">Who is behind this</h3>
          <CredentialBlock />
        </Card>

        <div className="ra-trust__side">
          <PrivacyDisclosure />
          <Alert tone="warn" title="Can't determine why">
            Explains what a result is, not why it's off.
          </Alert>
          <Alert tone="alert" title="Not a replacement for a doctor">
            Flagged results still need a professional.
          </Alert>
          <Alert tone="info" title="Can be wrong">
            AI-drafted. A poor photo can cause a misread.
          </Alert>
        </div>
      </div>
    </Section>
  );
}
