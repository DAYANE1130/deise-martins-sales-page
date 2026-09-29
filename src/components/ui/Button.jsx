export function Button({ children, href, variant = 'primary', className = '', disabled = false, ...props }) {
  const classes = `button button--${variant} ${className}`.trim()

  if (href && !disabled) {
    return <a className={classes} href={href} {...props}>{children}</a>
  }

  return <button className={classes} type="button" disabled={disabled} {...props}>{children}</button>
}
