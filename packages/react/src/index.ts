export type ForgeButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ForgeButtonSize = 'sm' | 'md' | 'lg';

export interface ForgeButtonProps {
  variant?: ForgeButtonVariant;
  size?: ForgeButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: unknown;
}
