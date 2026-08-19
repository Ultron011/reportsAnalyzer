import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import './FinalAction.css'

const MAILTO = 'mailto:beyondchatss@gmail.com?subject=' + encodeURIComponent("Reports Analyzer: let's talk");

export default function FinalAction() {
  return (
    <Section id="final-action" ground="surface-2">
      <div className="ra-final">
        <h2 className="ra-h2">Have a report you need explained?</h2>
        <p className="ra-final__body">
          Tell us about it. We'll tell you plainly if this fits.
        </p>
        <div className="ra-final__actions">
          <Button href={MAILTO} variant="primary" size="lg">
            Talk to us
          </Button>
        </div>

      </div>
    </Section>
  );
}
