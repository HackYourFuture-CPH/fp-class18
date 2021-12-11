import '!style-loader!css-loader!../index.css';
import { withKnobs } from '@storybook/addon-knobs';

import React from 'react';
import { FirebaseProvider } from '../firebase';
import { ShoppingCartProvider } from '../context/shoppingCart';

export const decorators = [
  withKnobs,
  (Story) => (
    <FirebaseProvider initialAuth={{ inStorybook: true }}>
      <ShoppingCartProvider>
        <Story />
      </ShoppingCartProvider>
    </FirebaseProvider>
  ),
];
