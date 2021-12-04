import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
import itemImage from '../../assets/images/image01.png';
import ShoppingItem from './ShoppingItem';

export default {
  title: 'components / ShoppingItem',
  component: ShoppingItem,
};

export const component = () => (
  <ShoppingItem
    productName={text('productName', 'Product Name')}
    quantity={number('number', 20)}
    price={number('priceNumber', 1000)}
    productImg={itemImage}
    isDisable={boolean('Disable', false)}
  />
);
