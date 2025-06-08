import { render, screen } from '@testing-library/react';
import App from './App';

test('App renders welcome message', () => {
  render(<App />);
  expect(screen.getByText(/Welcome to CI\/CD Demo/i)).toBeInTheDocument();
});