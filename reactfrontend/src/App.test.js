import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Inicio link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Inicio/i);
  expect(linkElement).toBeInTheDocument();
});
