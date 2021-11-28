import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import FloatButtonComponent from './FloatButton.component';

export default {
  title: 'Components / Button Component',
  component: FloatButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const FloatBtnComponent = () => (
  <FloatButtonComponent
    title={text('', 'ADD TO CART')}
    onClick={action('You have clicked the button')}
  />
);
