import React from 'react';
import Purchases from './Purchases.component';

export default { title: 'Components / Purchases', component: Purchases };

const Template = () => (
  <Purchases
    orders={[
      { orderId: 12398098, date: '30/09/2021' },
      { orderId: 12398098, date: '30/09/2021' },
      { orderId: 12398098, date: '30/09/2021' },
    ]}
  />
);

export const Info = Template.bind({});
