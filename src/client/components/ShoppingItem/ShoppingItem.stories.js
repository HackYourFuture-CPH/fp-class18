import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import itemImage from '../../assets/images/image01.png';
// import { action } from '@storybook/addon-actions';
import ShoppingItem from './ShoppingItem';

export default {
  title: 'components / ShoppingItem',
  component: ShoppingItem,
  //   argTypes: {
  //     onClick: { action: 'clicked' },
  //   },
  //   parameters: { actions: { argTypesRegex: '^on.*' } },
};

export const component = () => (
  <ShoppingItem
    productName={text('productName', 'Product Name')}
    quantity={number('number', 20)}
    price={number('priceNumber', 1000)}
    productImg={itemImage}

    // onClick={action('You have clicked the button')}
  />
);
