import type { ForgeButtonOptions, ForgeButtonSize, ForgeButtonVariant } from '@forge/contracts';

export const forgeButtonClassName = 'forge-button' as const;

export interface ForgeButtonDomAttributes {
  'data-forge-button': '';
  'data-variant': ForgeButtonVariant;
  'data-size': ForgeButtonSize;
  'data-loading'?: 'true';
}

/** DOM data contract shared by framework adapters. Root modes remain on an ancestor. */
export function getForgeButtonDomAttributes(
  options: Pick<ForgeButtonOptions, 'variant' | 'size' | 'loading'>,
): ForgeButtonDomAttributes {
  return {
    'data-forge-button': '',
    'data-variant': options.variant ?? 'primary',
    'data-size': options.size ?? 'md',
    ...(options.loading ? { 'data-loading': 'true' as const } : {}),
  };
}
