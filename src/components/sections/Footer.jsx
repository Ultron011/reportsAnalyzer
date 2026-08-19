import Section from '../ui/Section.jsx'
import CredentialBlock from '../ui/CredentialBlock.jsx'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="ra-footer">
      <Section ground="ink" as="div">
        <div className="ra-footer__grid">
          <div>
            <p className="ra-footer__brand">Reports Analyzer</p>
            <p className="ra-footer__tagline">
              Turns a report you can't read into one you can.
            </p>
          </div>
          <CredentialBlock tone="ink" />
        </div>

        <div className="ra-footer__bottom">
          <p className="ra-footer__disclaimer">
            Not medical advice, and not a replacement for a licensed professional. Explanations are
            AI-drafted and can be wrong. Verify anything important before acting on it.
          </p>
          <nav className="ra-footer__legal" aria-label="Legal">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of use</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </Section>
    </footer>
  );
}
