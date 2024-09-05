import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './App';
import "fake-indexeddb/auto";

test('renders learn react link', async () => {
  await act(async () => {
    render(<App />);
  });
  expect(screen.getByTestId("app")).toBeInTheDocument();
});
