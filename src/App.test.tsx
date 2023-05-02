import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import "fake-indexeddb/auto";

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
