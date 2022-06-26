import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { render, screen } from '@testing-library/react';
import ErrorMsg from '.';
import React from 'react';

test('renders error icon and message', () => {
  render(<ErrorMsg errorMsg="load error" icon={faCogs} />);
  const textElement = screen.getByText(/load error/i);
  const iconElement = screen.getByTitle('error-icon');
  expect(textElement).toBeInTheDocument();
  expect(iconElement).toBeInTheDocument();
});
