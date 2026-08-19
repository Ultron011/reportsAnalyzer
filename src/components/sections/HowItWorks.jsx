import { Upload, FileSearch, Sparkles, MessageCircleMore } from 'lucide-react'
import Section from '../ui/Section.jsx'
import useInView from '../../hooks/useInView.js'
import './HowItWorks.css'

const STEPS = [
  { n: '01', icon: Upload, title: 'Upload your report', body: 'Photo or PDF.' },
  { n: '02', icon: FileSearch, title: 'It reads every value', body: 'Checked against reference ranges.' },
  { n: '03', icon: Sparkles, title: 'Plain language, drafted', body: 'Every term explained.' },
  { n: '04', icon: MessageCircleMore, title: 'Get your result', body: 'Plus a doctor-ready summary.' },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ threshold: 0.4 })

  return (
    <Section id="how-it-works" ground="bg">
      <h2 className="ra-h2">How it works</h2>
      <div ref={ref} className={`ra-how ${inView ? 'ra-how--in-view' : ''}`}>
        <svg className="ra-how__line" viewBox="0 0 100 4" preserveAspectRatio="none" aria-hidden="true">
          <line x1="12.5" y1="2" x2="87.5" y2="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2.5" strokeLinecap="round" />
        </svg>
        <ol className="ra-how__list">
          {STEPS.map((s, i) => (
            <li key={s.n} className="ra-how__item" style={{ '--i': i }}>
              <div className="ra-how__badge">
                <s.icon className="ra-how__icon" size={22} strokeWidth={1.75} aria-hidden="true" />
                <span className="ra-how__n" aria-hidden="true">{s.n}</span>
              </div>
              <h3 className="ra-how__title">{s.title}</h3>
              <p className="ra-how__body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
