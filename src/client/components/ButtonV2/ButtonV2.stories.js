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
// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const AddToCartBtnComponent = (args) => <ButtonComponent2 {...args} />;
AddToCartBtnComponent.args = {
  title: text('', 'ADD TO CART'),
  onClick: action('You have clicked the button'),
};
// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const ExploreBtnComponent = (args) => <ButtonComponent2 {...args} />;
ExploreBtnComponent.args = {
  title: 'EXPLORE THIS CATEGORY',
  onClick: action('You have clicked the button'),
  backgroundColor: 'gray',
};

// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const KeepShoppingBtnComponent = (args) => (
  <ButtonComponent2 {...args} />
);
KeepShoppingBtnComponent.args = {
  title: 'KEEP SHOPPING',
  onClick: action('You have clicked the button'),
  backgroundColor: 'white',
  color: '#8E0EF2',
  border: 'solid 1px',
};
