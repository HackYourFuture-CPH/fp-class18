import React from 'react';
import Paypal from './Paypal.component';

export default {
  title: 'Components / Paypal',
  component: Paypal,
};
// storybook-controls works with spread
// eslint-disable-next-line
export const PayPalBasic = (args) => <Paypal {...args} />;

PayPalBasic.args = {
  orderId: 'order#123 webshop-class-18-fp',
  totalSum: 200.0,
};
