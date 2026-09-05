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

export type InteractionState = 'default' | 'hover' | 'pressed' | 'focus' | 'disabled' | 'loading';
export type ValidationState = 'default' | 'error' | 'success';
