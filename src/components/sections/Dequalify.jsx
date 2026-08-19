import Section from '../ui/Section.jsx'
import './Dequalify.css'

const MAILTO = 'mailto:beyondchatss@gmail.com?subject=' + encodeURIComponent("Reports Analyzer: let's talk");

const ITEMS = [
  {
    text: "You need a decision made, not just an explanation. That's a doctor's job.",
    actionLabel: 'Read the limits',
    href: '#trust',
  },
  {
    text: 'Your report is handwritten or poor quality. Send a sample and we’ll tell you honestly.',
    actionLabel: 'Send a sample',
    href: MAILTO,
  },
  {
    text: 'You want this in your own product.',
    actionLabel: 'Tell us your use case',
    href: '#final-action',
  },
];

export default function Dequalify() {
  return (
    <Section id="dequalify" ground="bg">
      <h2 className="ra-h2">Not sure this is for you?</h2>
      <ul className="ra-dequalify__list">
        {ITEMS.map((item, i) => (
          <li key={i} className="ra-dequalify__item">
            <p className="ra-dequalify__text">{item.text}</p>
            <a href={item.href} className="ra-dequalify__arrow">
              {item.actionLabel}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
