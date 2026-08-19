import Section from '../ui/Section.jsx'
import Button from '../ui/Button.jsx'
import HeroCardSignal, { DecodeIllustration } from '../ui/HeroCardSignal.jsx'
import { HERO_REPORT_ROWS } from './heroReportData.js'
import ribbonFlowBg from '../../assets/generated/hero-ribbon-flow.png'
import './Hero.css'

const HEADLINE = 'Understand your medical report, before you act on it.';
const SUB = 'Upload it. Get a plain-language explanation, term by term.';
const TRUST = 'AI-drafted, clinician-reviewed. Your report is never sold.';

export default function Hero() {
  const flaggedCount = HERO_REPORT_ROWS.filter((r) => r.flag).length;
  const totalCount = HERO_REPORT_ROWS.length;

  return (
    <Section id="top" ground="bg" className="ra-hero ra-hero--wash" as="section">
      <div
        className="ra-hero-wash__texture"
        style={{ backgroundImage: `url(${ribbonFlowBg})` }}
        aria-hidden="true"
      />
      <div className="ra-hero-wash__grid">
        <div className="ra-hero-wash__copy">
          <h1 className="ra-hero-wash__headline">{HEADLINE}</h1>
          <p className="ra-hero-wash__sub">{SUB}</p>
          <div className="ra-hero-wash__actions">
            <Button href="#sample-analysis" variant="primary" size="lg">
              See a sample analysis
            </Button>
          </div>
          <p className="ra-hero-wash__trust">{TRUST}</p>
        </div>
        <div className="ra-hero-wash__visual">
          <HeroCardSignal
            headline="Your thyroid is working harder than it should."
            meta={`${totalCount} values read from your blood panel`}
            flaggedCount={flaggedCount}
            totalCount={totalCount}
            illustration={DecodeIllustration}
          />
        </div>
      </div>
    </Section>
  );
}
