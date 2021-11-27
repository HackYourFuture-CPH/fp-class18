import React from 'react';
import Purchases from './Purchases.component';

export default { title: 'Components / Purchases', component: Purchases };

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Purchases {...args} />;

export const Info = Template.bind({});

Info.args = {
  orderId: '12398098',
  date: '30/09/2021',
};
