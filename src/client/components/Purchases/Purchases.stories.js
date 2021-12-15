import React from 'react';
import Purchases from './Purchases.component';

export default { title: 'Components / Purchases', component: Purchases };

const Template = () => (
  <Purchases
    orders={[
      { id: 12398098, created_at: '30/09/2021', status: 'created' },
      { id: 12398098, created_at: '30/09/2021', status: 'created' },
      { id: 12398098, created_at: '30/09/2021', status: 'created' },
    ]}
  />
);

export const Info = Template.bind({});
