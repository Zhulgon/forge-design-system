import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from '../src/index.js';

describe('Link', () => {
  it.each(['default', 'subtle'] as const)('renders native %s links', (variant) => {
    render(<Link href="/docs" variant={variant}>Docs</Link>);
    const link = screen.getByRole('link', { name: 'Docs' });
    expect(link).toHaveAttribute('href', '/docs'); expect(link).toHaveAttribute('data-variant', variant);
  });
  it.each(['sm', 'md', 'lg'] as const)('forwards %s sizing', (size) => {
    render(<Link href="/docs" size={size}>Docs</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('data-size', size);
  });
  it('forwards refs, native attributes, and custom classes', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<Link href="https://example.com" target="_blank" ref={ref} className="external">Docs</Link>);
    expect(ref.current).toBeInstanceOf(HTMLAnchorElement);
    expect(ref.current).toHaveAttribute('target', '_blank'); expect(ref.current).toHaveClass('forge-link', 'external');
  });
});
