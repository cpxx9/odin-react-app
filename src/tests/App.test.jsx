import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<App />);
    const textContent = screen.getByRole('heading').textContent;
    expect(textContent).toMatch(/our first test/i);
  });
});
