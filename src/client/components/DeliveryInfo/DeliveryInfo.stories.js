import React from 'react';

import DeliveryInfo from './DeliveryInfo.component';

export default { title: 'Components / DeliveryInfo', component: DeliveryInfo };

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <DeliveryInfo {...args} />;

export const Info = Template.bind({});

Info.args = {
  editMode: true,
  vertDisplay: true,
  user: {
    address: 'Vildkildevej 21',
    city: 'Hedehusene',
    zipcode: '2640',
    country: 'Denmark',
  },
};
