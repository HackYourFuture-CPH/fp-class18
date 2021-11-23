import React from 'react';
import TotalPrice from './TotalPriceCard.component';

export default {
  title: 'Components / TotalPriceCard',
  component: TotalPrice,
};

export const GrandTotalPrice = (args) => <TotalPrice {...args} />;
GrandTotalPrice.args = {
  quantity: 3,
  price: 149.99,
};
