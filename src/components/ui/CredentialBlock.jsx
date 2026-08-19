import { Building2, Stethoscope, Sparkles, Lock } from 'lucide-react'
import './CredentialBlock.css'

/**
 * CredentialBlock — hard facts as a compact icon+label grid, scannable in a
 * glance rather than read as a definition list.
 */
const FACTS = [
  { icon: Building2, label: 'Built by', value: 'Patient-report specialists' },
  { icon: Stethoscope, label: 'Reviewed by', value: 'A clinician, before it ships' },
  { icon: Sparkles, label: 'AI involved', value: "Drafts it, doesn't diagnose" },
  { icon: Lock, label: 'Your report', value: 'Used only for your explanation' },
];

export default function CredentialBlock({ tone = 'light', className = '' }) {
  return (
    <div className={`ra-credential ra-credential--${tone} ${className}`}>
      {FACTS.map((f) => (
        <div className="ra-credential__row" key={f.label}>
          <f.icon className="ra-credential__icon" size={20} strokeWidth={1.75} aria-hidden="true" />
          <div>
            <p className="ra-credential__label">{f.label}</p>
            <p className="ra-credential__value">{f.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
