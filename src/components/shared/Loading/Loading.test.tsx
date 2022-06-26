import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from '.';

test('renders loading icon and message', () => {
  render(<Loading />);
  const textElement = screen.getByText(/Loading data.../i);
  const iconElement = screen.getByText('load-icon');
  expect(textElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument()
});
