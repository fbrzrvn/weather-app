import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders app title', () => {
  render(<App />);
  const textElement = screen.getByText(/Weather App - Code challenge/i);
  expect(textElement).toBeInTheDocument();
});
