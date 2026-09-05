export type ForgeTheme = 'neutral' | 'clinical' | 'cyber' | 'organic' | 'premium';
export type ForgeColorMode = 'light' | 'dark' | 'hc-light' | 'hc-dark';
export type ForgeDensity = 'compact' | 'comfortable' | 'touch';
export type ForgeMotion = 'standard' | 'reduced';

export interface ForgeRootModes {
  theme: ForgeTheme;
  colorMode: ForgeColorMode;
  density: ForgeDensity;
  motion: ForgeMotion;
}

/** States shared by interactive FORGE components. */
export type ForgeInteractionState =
  | 'default'
  | 'hover'
  | 'pressed'
  | 'focus-visible'
  | 'disabled'
  | 'loading';

/** Framework-neutral flags for components that can be unavailable or busy. */
export interface ForgeAsyncState {
  disabled?: boolean;
  loading?: boolean;
}

export type ForgeValidationState = 'default' | 'error' | 'success';

export type ForgeButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ForgeButtonSize = 'sm' | 'md' | 'lg';

/** The framework-neutral behavioral portion of a Button API. */
export interface ForgeButtonOptions extends ForgeAsyncState {
  variant?: ForgeButtonVariant;
  size?: ForgeButtonSize;
}

export type ForgeIconButtonVariant = ForgeButtonVariant;
export type ForgeIconButtonSize = ForgeButtonSize;
export interface ForgeIconButtonOptions extends ForgeAsyncState {
  variant?: ForgeIconButtonVariant;
  size?: ForgeIconButtonSize;
}

export type ForgeLinkVariant = 'default' | 'subtle';
export type ForgeLinkSize = ForgeButtonSize;
export interface ForgeLinkOptions {
  variant?: ForgeLinkVariant;
  size?: ForgeLinkSize;
}

export type ForgeSplitButtonVariant = Exclude<ForgeButtonVariant, 'ghost'>;
export interface ForgeSplitButtonOptions extends ForgeAsyncState {
  variant?: ForgeSplitButtonVariant;
  size?: ForgeButtonSize;
}
