import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;