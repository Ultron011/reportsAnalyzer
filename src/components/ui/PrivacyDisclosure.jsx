import { ShieldCheck } from 'lucide-react'
import './PrivacyDisclosure.css'

/**
 * PrivacyDisclosure — data handling, stated inline beside the point of
 * collection, not just linked.
 */
export default function PrivacyDisclosure({ className = '' }) {
  return (
    <div className={`ra-privacy ${className}`}>
      <ShieldCheck className="ra-privacy__icon" size={20} strokeWidth={1.75} aria-hidden="true" />
      <ul className="ra-privacy__list">
        <li>Used only to generate your explanation. Never sold.</li>
        <li>Not used to train AI models.</li>
        <li>Deleted on a fixed schedule once your result is produced.</li>
        <li>You can request deletion any time.</li>
      </ul>
    </div>
  );
}
