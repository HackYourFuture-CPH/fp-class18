import {boolean} from '@storybook/addon-knobs';
import React from 'react';

import DeliveryInfo from './DeliveryInfo.component';

export default {title: 'Components / DeliveryInfo', component: DeliveryInfo};

export const Component = () => (<DeliveryInfo editMode={
            boolean('editMode', false)
        }/>);
