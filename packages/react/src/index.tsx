import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from 'react';
import type { ForgeButtonOptions, ForgeIconButtonOptions, ForgeLinkOptions, ForgeSplitButtonOptions } from '@forge/contracts';
import { forgeButtonClassName, forgeIconButtonClassName, forgeLinkClassName, forgeSplitButtonClassName, getForgeButtonDomAttributes } from '@forge/web';

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

type AccessibleIconName =
  | { 'aria-label': string; 'aria-labelledby'?: string }
  | { 'aria-label'?: string; 'aria-labelledby': string };

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'disabled' | 'type'>
  & ForgeIconButtonOptions & AccessibleIconName & {
    children: ReactNode;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { variant = 'primary', size = 'md', disabled = false, loading = false, type = 'button', className, children, onClick, ...nativeProps },
  ref,
) {
  const isDisabled = disabled || loading;
  const classes = className ? `${forgeIconButtonClassName} ${className}` : forgeIconButtonClassName;
  return <button {...nativeProps} {...getForgeButtonDomAttributes({ variant, size, loading })} ref={ref} className={classes} type={type} disabled={isDisabled} aria-busy={loading || undefined} onClick={loading ? undefined : onClick}>
    {loading ? <span className="forge-icon-button__spinner" aria-hidden="true" /> : <span className="forge-icon-button__icon" aria-hidden="true">{children}</span>}
  </button>;
});
IconButton.displayName = 'IconButton';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, ForgeLinkOptions {
  children: ReactNode;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { variant = 'default', size = 'md', className, leadingIcon, trailingIcon, children, ...anchorProps }, ref,
) {
  const classes = className ? `${forgeLinkClassName} ${className}` : forgeLinkClassName;
  return <a {...anchorProps} ref={ref} className={classes} data-variant={variant} data-size={size}>
    {leadingIcon ? <span className="forge-link__icon" aria-hidden="true">{leadingIcon}</span> : null}
    {children}
    {trailingIcon ? <span className="forge-link__icon" aria-hidden="true">{trailingIcon}</span> : null}
  </a>;
});
Link.displayName = 'Link';

export interface SplitButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onClick'>, ForgeSplitButtonOptions {
  children: ReactNode;
  menuLabel: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  onMenuClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
  primaryButtonProps?: Omit<ButtonProps, 'children' | 'variant' | 'size' | 'disabled' | 'loading'>;
  triggerButtonProps?: Omit<ButtonProps, 'children' | 'variant' | 'size' | 'disabled' | 'loading' | 'aria-label' | 'aria-haspopup'>;
}

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(function SplitButton(
  { children, menuLabel, variant = 'primary', size = 'md', disabled = false, loading = false, onClick, onMenuClick, primaryButtonProps, triggerButtonProps, className, ...groupProps }, ref,
) {
  const classes = className ? `${forgeSplitButtonClassName} ${className}` : forgeSplitButtonClassName;
  return <div {...groupProps} ref={ref} className={classes} data-size={size}>
    <Button {...primaryButtonProps} variant={variant} size={size} disabled={disabled} loading={loading} onClick={onClick}>{children}</Button>
    <Button {...triggerButtonProps} variant={variant} size={size} disabled={disabled} loading={loading} aria-label={menuLabel} aria-haspopup="menu" onClick={onMenuClick}>
      <span className="forge-split-button__trigger-icon" aria-hidden="true">⌄</span>
    </Button>
  </div>;
});
SplitButton.displayName = 'SplitButton';
