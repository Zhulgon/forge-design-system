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
