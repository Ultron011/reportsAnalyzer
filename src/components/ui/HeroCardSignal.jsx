import useInView from '../../hooks/useInView.js'
import './HeroCardSignal.css'

/**
 * Hero card — "Signal": a scattered field of dots settling into an
 * organized cluster, drawn once on scroll-into-view, replacing the numeric
 * stat + orange flag chip per live-mode steer feedback ("no orange in the
 * hero, be more creative than a report table"). Teal/navy only, no orange.
 * `illustration` is a render-prop receiving `inView` so the SVG can animate
 * on the same trigger as the shell — kept as a prop (rather than inlined)
 * so a future illustration swap stays a one-line change in Hero.jsx.
 */
export default function HeroCardSignal({ headline, meta, flaggedCount, totalCount, illustration }) {
  const [ref, inView] = useInView();

  return (
    <div className="ra-heros" ref={ref}>
      <p className="ra-heros__eyebrow">From a real report, decoded</p>

      {illustration(inView)}

      <p className="ra-heros__headline">{headline}</p>

      <div className="ra-heros__meta">
        <span className="ra-heros__meta-label">{meta}</span>
        <span className="ra-heros__meta-flag">
          {flaggedCount} of {totalCount} values flagged for a doctor visit
        </span>
      </div>
    </div>
  );
}

/** Decode illustration — a scattered field of dots resolving into an organized cluster. */
export function DecodeIllustration(inView) {
  const scattered = [
    [40, 20], [70, 44], [30, 60], [95, 18], [120, 52], [150, 30], [175, 66], [60, 78],
    [110, 74], [200, 40], [220, 20], [240, 58], [260, 34], [280, 70], [300, 24], [320, 50],
  ];
  const check = [
    [150, 44], [165, 58], [195, 30], [215, 50], [230, 40], [245, 30], [260, 44], [275, 34],
  ];
  return (
    <svg className="ra-heros__decode" viewBox="0 0 400 88" fill="none" aria-hidden="true">
      {scattered.map(([x, y], i) => (
        <circle
          key={`s${i}`}
          className={`ra-heros__decode-dot ra-heros__decode-dot--from ${inView ? 'ra-heros__decode-dot--settled' : ''}`}
          cx={x}
          cy={y}
          r="3.5"
          style={{ transitionDelay: `${i * 18}ms`, '--tx': `${(check[i % check.length]?.[0] ?? x) - x}px`, '--ty': `${(check[i % check.length]?.[1] ?? y) - y}px` }}
        />
      ))}
    </svg>
  );
}
