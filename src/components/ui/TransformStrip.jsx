import useInView from '../../hooks/useInView.js'
import './TransformStrip.css'

/**
 * TransformStrip — the flagship demo device: real technical input rendered in
 * tabular/mono type, a thin connecting arrow, then plain-language sentences in
 * the display face. Reused at hero scale and at full "sample analysis" scale.
 *
 * This is the product's one authored focal motion (see animate.md): on first
 * scroll-into-view, table rows reveal in a short stagger, the transform arrow
 * draws itself, then the explanation slides in after — showing the mechanism
 * ("dense report becomes plain language") rather than displaying it inert.
 */
export default function TransformStrip({ rows, explanation, compact = false, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.25 })

  return (
    <div
      ref={ref}
      className={`ra-transform ${compact ? 'ra-transform--compact' : ''} ${inView ? 'ra-transform--in-view' : ''} ${className}`}
    >
      <div className="ra-transform__input" role="group" aria-label="Sample technical input">
        <p className="ra-transform__input-label">What you were handed</p>
        <div className="ra-transform__table-scroll">
          <table className="ra-transform__table">
            <thead>
              <tr>
                <th scope="col">Test</th>
                <th scope="col">Result</th>
                <th scope="col">Range</th>
                <th scope="col">Flag</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.code} className="ra-transform__row" style={{ '--i': i }}>
                  <td>{r.code}</td>
                  <td className="ra-transform__num">{r.value}</td>
                  <td className="ra-transform__num ra-transform__num--muted">{r.range}</td>
                  <td>
                    {r.flag ? (
                      <span className={`ra-transform__flag ra-transform__flag--${r.flag}`}>
                        <span className="ra-transform__flag-dot" aria-hidden="true" />
                        {r.flag}
                      </span>
                    ) : (
                      <span className="ra-transform__flag ra-transform__flag--ok">
                        <span className="ra-transform__flag-dot" aria-hidden="true" />
                        ok
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="ra-transform__arrow" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="15" className="ra-transform__arrow-ring" />
          <path
            className="ra-transform__arrow-path"
            d="M9 16h13M17 10l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="ra-transform__output" role="group" aria-label="Plain-language explanation">
        <p className="ra-transform__output-label">What it actually means</p>
        <div className="ra-transform__prose">{explanation}</div>
      </div>
    </div>
  );
}
