import brandMark from '../../assets/generated/brand-mark.png'
import './Header.css'

/** Focused header: mark/name, one link, no full nav. */
export default function Header() {
  return (
    <header className="ra-header">
      <div className="ra-header__inner">
        <a href="#top" className="ra-header__brand">
          <img src={brandMark} alt="" width="32" height="32" className="ra-header__mark" />
          <span>Reports Analyzer</span>
        </a>
        <a className="ra-header__link" href="#final-action">
          Talk to us
        </a>
      </div>
    </header>
  );
}
