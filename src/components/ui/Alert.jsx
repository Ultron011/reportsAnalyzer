import { CircleCheck, TriangleAlert, CircleAlert, Info } from 'lucide-react'
import './Alert.css'

const ICONS = { ok: CircleCheck, warn: TriangleAlert, alert: CircleAlert, info: Info };

/** Alert — uses semantic tokens only, never invents its own colour. */
export default function Alert({ tone = 'info', title, children, className = '' }) {
  const Icon = ICONS[tone];
  return (
    <div className={`ra-alert ra-alert--${tone} ${className}`} role={tone === 'alert' ? 'alert' : 'status'}>
      <Icon className="ra-alert__icon" size={20} strokeWidth={1.75} aria-hidden="true" />
      <div className="ra-alert__body">
        {title && <p className="ra-alert__title">{title}</p>}
        <div className="ra-alert__text">{children}</div>
      </div>
    </div>
  );
}
