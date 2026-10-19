import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import App from '../App';

test('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});