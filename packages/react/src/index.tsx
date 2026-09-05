import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import type { ForgeButtonOptions } from '@forge/contracts';
import { forgeButtonClassName, getForgeButtonDomAttributes } from '@forge/web';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'disabled' | 'type'>,
    ForgeButtonOptions {
  children: ReactNode;
  /** Content displayed before the button label, commonly an icon. */
  leadingIcon?: ReactNode;
  /** Content displayed after the button label, commonly an icon. */
  trailingIcon?: ReactNode;
  /** Defaults to button to prevent unintended form submission. */
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    type = 'button',
    className,
    children,
    onClick,
    ...nativeProps
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const classes = className ? `${forgeButtonClassName} ${className}` : forgeButtonClassName;

  return (
    <button
      {...nativeProps}
      {...getForgeButtonDomAttributes({ variant, size, loading })}
      ref={ref}
      className={classes}
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={loading ? undefined : onClick}
    >
      <span className="forge-button__content">
        {loading ? <span className="forge-button__spinner" aria-hidden="true" /> : null}
        {!loading && leadingIcon ? <span className="forge-button__icon" aria-hidden="true">{leadingIcon}</span> : null}
        {children}
        {trailingIcon ? <span className="forge-button__icon" aria-hidden="true">{trailingIcon}</span> : null}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
