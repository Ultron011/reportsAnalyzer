import './Button.css'

/**
 * Button — primary / secondary / ghost / danger, sm / md / lg.
 * Disabled buttons must never appear without explanation text nearby;
 * pass `disabledReason` and it renders as an associated hint.
 */
export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  disabledReason,
  children,
  className = '',
  ...rest
}) {
  const Tag = href ? 'a' : as;
  const classes = [
    'ra-btn',
    `ra-btn--${variant}`,
    `ra-btn--${size}`,
    loading ? 'ra-btn--loading' : '',
    className,
  ].filter(Boolean).join(' ');

  const describedBy = disabled && disabledReason ? `${rest.id || 'btn'}-disabled-hint` : undefined;

  return (
    <>
      <Tag
        className={classes}
        href={href}
        aria-disabled={disabled || loading || undefined}
        aria-busy={loading || undefined}
        aria-describedby={describedBy}
        onClick={disabled ? (e) => e.preventDefault() : rest.onClick}
        {...rest}
      >
        {loading && <span className="ra-btn__spinner" aria-hidden="true" />}
        <span className="ra-btn__label">{children}</span>
      </Tag>
      {disabled && disabledReason && (
        <span id={`${rest.id || 'btn'}-disabled-hint`} className="ra-btn__hint">
          {disabledReason}
        </span>
      )}
    </>
  );
}
