import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IconButton } from '../src/index.js';

describe('IconButton', () => {
  it.each(['primary', 'secondary', 'ghost', 'destructive'] as const)('renders %s with native button semantics', (variant) => {
    render(<IconButton aria-label="Edit" variant={variant}>✎</IconButton>);
    const button = screen.getByRole('button', { name: 'Edit' });
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('data-variant', variant);
  });
  it.each(['sm', 'md', 'lg'] as const)('renders %s size', (size) => {
    render(<IconButton aria-label="Edit" size={size}>✎</IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('data-size', size);
  });
  it('supports disabled and loading states', async () => {
    const onClick = vi.fn(); const user = userEvent.setup();
    const { rerender } = render(<IconButton aria-label="Edit" disabled onClick={onClick}>✎</IconButton>);
    expect(screen.getByRole('button')).toBeDisabled();
    await user.click(screen.getByRole('button')); expect(onClick).not.toHaveBeenCalled();
    rerender(<IconButton aria-label="Edit" loading>✎</IconButton>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('button').querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });
  it('forwards refs and native props', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<IconButton aria-label="Edit" ref={ref} name="edit" className="custom">✎</IconButton>);
    expect(ref.current).toHaveAttribute('name', 'edit');
    expect(ref.current).toHaveClass('forge-icon-button', 'custom');
  });
});
