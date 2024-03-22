import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Root from '../src/routes/Root';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe("Root route", () => {
  it('renders navigation', () => {
    // since Root renders NavLink we need to wrap component into memory router
    render(
      <MemoryRouter>
      <Root />
    </MemoryRouter>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render cart content after clicking button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
      <Root />
    </MemoryRouter>);
    const button = screen.getByRole('button', {name: 'Your cart 0'});
    await user.click(button);

    expect(document.querySelector('#cartContent')).toBeInTheDocument();
  })
})