export const forgeTokenCollections = [
  'FG / Primitive Color',
  'FG / Theme',
  'FG / Semantic Color',
  'FG / Density',
  'FG / Layout',
  'FG / Typography',
  'FG / Motion'
] as const;

export const forgeRootAttributes = {
  theme: 'data-forge-theme',
  colorMode: 'data-forge-color-mode',
  density: 'data-forge-density',
  motion: 'data-forge-motion'
} as const;
