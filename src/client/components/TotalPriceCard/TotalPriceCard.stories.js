import React from 'react';
import TotalPrice from './TotalPriceCard.component';

export default {
  title: 'Components / TotalPriceCard',
  component: TotalPrice,
};
// eslint-disable-next-line react/jsx-props-no-spreading
export const GrandTotalPrice = (args) => <TotalPrice {...args} />;
GrandTotalPrice.args = {
  subTotal: 100,
};
