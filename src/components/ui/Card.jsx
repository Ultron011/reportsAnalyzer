import './Card.css'

/** Card — exactly one card. One background, one border, one radius, one shadow. */
export default function Card({ as: Tag = 'div', className = '', children, ...rest }) {
  return (
    <Tag className={`ra-card ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
