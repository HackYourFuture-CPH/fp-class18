import React from 'react';

import App from './App';
import { ShoppingCartProvider } from './context/shoppingCart';
import { ErrorBoundary } from './ErrorBoundary';
import { FirebaseProvider } from './firebase';

function AppContainer() {
  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}

export default AppContainer;
