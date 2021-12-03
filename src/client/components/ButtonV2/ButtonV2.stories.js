import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import ButtonComponent2 from './ButtonV2.component';

export default {
  title: 'Components / Button2 Component',
  component: ButtonComponent2,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const AddToCartBtnComponent = () => (
  <ButtonComponent2
    title={text('', 'ADD TO CART')}
    onClick={action('You have clicked the button')}
  />
);

export const ExploreBtnComponent = () => (
  <ButtonComponent2
    title={text('', 'EXPLORE THIS CATEGORY')}
    onClick={action('You have clicked the button')}
    backgroundColor="gray"
  />
);
