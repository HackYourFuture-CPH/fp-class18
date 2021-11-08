import React from 'react';
import NumberInput from './NumberInput.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components / NumberInput',
  component: NumberInput,
  argTypes: {
    getQuantity: { action: 'clicked' },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const QuantityChanger = (args) => <NumberInput {...args} />;

QuantityChanger.args = {
  initValue: 1,
  maxAvailable: 9,
  getQuantity: action('You changed the quantity value'),
  disabled: false,
};
