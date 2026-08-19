import './ResultPanel.css'

/**
 * ResultPanel — the output surface for anything that computes.
 * Defines empty and insufficient-input states explicitly, plus the filled state.
 */
export default function ResultPanel({ state = 'filled', title, children, className = '' }) {
  if (state === 'empty') {
    return (
      <div className={`ra-result ra-result--empty ${className}`} aria-live="polite">
        <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="ra-result__glyph">
          <rect x="5" y="4" width="18" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <p className="ra-result__lead">No document yet</p>
        <p className="ra-result__body">Upload a report to see it turned into plain language here.</p>
      </div>
    );
  }

  if (state === 'insufficient') {
    return (
      <div className={`ra-result ra-result--insufficient ${className}`} aria-live="polite">
        <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" className="ra-result__glyph">
          <circle cx="14" cy="14" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M14 9v6M14 18h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p className="ra-result__lead">This page isn't enough to work with</p>
        <p className="ra-result__body">
          A cropped screenshot or a single value without its reference range usually is not enough
          to explain safely. Upload the full page, including headers and reference ranges, and
          you'll get a complete explanation instead of a partial guess.
        </p>
      </div>
    );
  }

  return (
    <div className={`ra-result ra-result--filled ${className}`}>
      {title && <p className="ra-result__title">{title}</p>}
      {children}
    </div>
  );
}
