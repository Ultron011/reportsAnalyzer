import './Section.css'

/**
 * Section — padding-block: var(--section-y), inner wrapper capped at --maxw.
 * `ground` alternates the section background; never stack more than two
 * consecutive sections on the same ground.
 */
export default function Section({
  id,
  ground = 'bg',
  as: Tag = 'section',
  className = '',
  innerClassName = '',
  children,
  ...rest
}) {
  return (
    <Tag id={id} className={`ra-section ra-section--${ground} ${className}`} {...rest}>
      <div className={`ra-section__inner ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
