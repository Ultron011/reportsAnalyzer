import Section from '../ui/Section.jsx'
import TransformStrip from '../ui/TransformStrip.jsx'
import Alert from '../ui/Alert.jsx'
import './SampleAnalysis.css'

const ROWS = [
  { code: 'TSH', value: '6.8 mIU/L', range: '0.4–4.0', flag: 'high' },
  { code: 'Free T4', value: '0.9 ng/dL', range: '0.8–1.8', flag: null },
  { code: 'Hemoglobin', value: '10.9 g/dL', range: '12.0–15.5', flag: 'low' },
  { code: 'WBC', value: '7.1 x10⁹/L', range: '4.0–11.0', flag: null },
  { code: 'Platelets', value: '410 x10⁹/L', range: '150–400', flag: 'high' },
  { code: 'Glucose (fasting)', value: '92 mg/dL', range: '70–99', flag: null },
  { code: 'LDL cholesterol', value: '148 mg/dL', range: '<100', flag: 'high' },
  { code: 'Creatinine', value: '0.8 mg/dL', range: '0.6–1.1', flag: null },
];

export default function SampleAnalysis() {
  return (
    <Section id="sample-analysis" ground="surface-2">
      <h2 className="ra-h2">A report, decoded line by line</h2>
      <p className="ra-sample__intro">
        Every row on the left gets a plain sentence on the right.
      </p>

      <TransformStrip
        rows={ROWS}
        explanation={
          <>
            <p>
              Your <mark>TSH</mark> is high while <mark>Free T4</mark> is normal. Your thyroid is
              working harder than it should. Worth a doctor visit, not an emergency.
            </p>
            <p>
              Low <mark>hemoglobin</mark> can explain tiredness. Normal <mark>WBC</mark> means no
              active infection.
            </p>
            <p>
              <mark>Platelets</mark> are slightly high, usually minor. <mark>Glucose</mark> and{' '}
              <mark>creatinine</mark> are both normal.
            </p>
            <p>
              <mark>LDL cholesterol</mark> is above range. Worth raising alongside the thyroid result
              at your next visit.
            </p>
            <p className="ra-sample__carry">
              Bring this to your appointment: "My TSH and LDL are high, hemoglobin is low. Should we
              check my thyroid and talk about iron and cholesterol together?"
            </p>
          </>
        }
      />

      <Alert tone="info" title="A worked example, not a diagnosis" className="ra-sample__alert">
        Your own report will read differently. A professional stays in the loop.
      </Alert>
    </Section>
  );
}
