import { render } from '@testing-library/react';
import { performance } from 'perf_hooks';

export function medirRendimiento(componente) {
  const inicio = performance.now();
  render(componente);
  const fin = performance.now();
  console.log(`Tiempo de renderizado: ${fin - inicio} ms`);
}