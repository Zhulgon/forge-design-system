import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '../src/index.js';

describe('Button', () => {
  it('renders a native button with primary/md defaults', () => {
    render(<Button>Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('data-variant', 'primary');
    expect(button).toHaveAttribute('data-size', 'md');
  });

  it.each(['primary', 'secondary', 'ghost', 'destructive'] as const)('renders the %s variant', (variant) => {
    render(<Button variant={variant}>Action</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-variant', variant);
  });

  it.each(['sm', 'md', 'lg'] as const)('renders the %s size', (size) => {
    render(<Button size={size}>Action</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-size', size);
  });

  it('uses native disabled behavior', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button disabled onClick={onClick}>Save</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('is disabled and announces busy state while loading', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button loading onClick={onClick}>Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('data-loading', 'true');
    const content = button.querySelector('.forge-button__content');
    expect(content?.firstElementChild).toHaveClass('forge-button__spinner');
    expect(content?.firstElementChild).toHaveAttribute('aria-hidden', 'true');
    await user.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('forwards refs and native button attributes', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref} name="save" value="draft" form="editor">Save</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current).toHaveAttribute('name', 'save');
    expect(ref.current).toHaveAttribute('value', 'draft');
    expect(ref.current).toHaveAttribute('form', 'editor');
  });

  it('composes leading and trailing content', () => {
    render(<Button leadingIcon={<span>Start</span>} trailingIcon={<span>End</span>}>Save</Button>);
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('End')).toBeInTheDocument();
  });

  it('keeps loading visually mapped to normal variant semantics', () => {
    render(<Button variant="destructive" size="lg" loading>Delete</Button>);
    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button).toHaveAttribute('data-variant', 'destructive');
    expect(button).toHaveAttribute('data-size', 'lg');
    expect(button).toHaveAttribute('data-loading', 'true');
    expect(button.querySelector('.forge-button__spinner')).toBeInTheDocument();
  });

  it('keeps disabled and loading states structurally distinct', () => {
    const { rerender } = render(<Button disabled>Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).not.toHaveAttribute('data-loading');
    expect(button).not.toHaveAttribute('aria-busy');
    expect(button.querySelector('.forge-button__spinner')).not.toBeInTheDocument();

    rerender(<Button loading>Save</Button>);
    expect(button).toHaveAttribute('data-loading', 'true');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button.querySelector('.forge-button__spinner')).toBeInTheDocument();
  });

  it('allows submit behavior to override the safe default and preserves custom classes', () => {
    render(<Button type="submit" className="save-button">Save</Button>);
    const button = screen.getByRole('button', { name: 'Save' });
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveClass('forge-button', 'save-button');
  });

  it('responds to keyboard activation like a native button', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={onClick}>Save</Button>);
    await user.tab();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
