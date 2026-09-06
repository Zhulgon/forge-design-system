import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { SplitButton } from '../src/index.js';

describe('SplitButton', () => {
  it('renders independently focusable primary and menu controls', async () => {
    const primary = vi.fn(); const trigger = vi.fn(); const user = userEvent.setup();
    render(<SplitButton menuLabel="More actions" onClick={primary} onMenuClick={trigger}>Save</SplitButton>);
    const primaryButton = screen.getByRole('button', { name: 'Save' });
    const triggerButton = screen.getByRole('button', { name: 'More actions' });
    expect(primaryButton).not.toBe(triggerButton); expect(triggerButton).toHaveAttribute('aria-haspopup', 'menu');
    await user.click(primaryButton); await user.click(triggerButton);
    expect(primary).toHaveBeenCalledTimes(1); expect(trigger).toHaveBeenCalledTimes(1);
  });
  it('uses native keyboard semantics and disables both controls', async () => {
    const onClick = vi.fn(); const user = userEvent.setup();
    render(<SplitButton menuLabel="More actions" disabled onClick={onClick}>Save</SplitButton>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'More actions' })).toBeDisabled();
    await user.tab(); await user.keyboard('{Enter}'); expect(onClick).not.toHaveBeenCalled();
  });
});
