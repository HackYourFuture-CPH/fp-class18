import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import ButtonComponent from './ButtonComponent';

export default {
  title: 'Components / Button Component',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const AddToCartBtnComponent = () => (
  <ButtonComponent
    title={text('', 'ADD TO CART')}
    onClick={action('You have clicked the button')}
  />
);

export const ExploreBtnComponent = () => (
  <ButtonComponent
    title={text('', 'EXPLORE THIS CATEGORY')}
    onClick={action('You have clicked the button')}
    backgroundColor="gray"
  />
);
