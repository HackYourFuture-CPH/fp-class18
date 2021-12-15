import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';

import { ProductDetails } from './ProductDetails.component';

export default {
  title: 'Components / ProductDetails Component',
  component: ProductDetails,
  shoppingCart: {},
};

export const Product = () => (
  <ProductDetails
    imgSource={text('Image', 'src/client/assets/images/image01.png')}
    ProductName={text('Name', 'PRODUCT TITLE')}
    RemainingUnit={number('Unit', '20')}
    Price={number('Price', '200')}
    productColor={text('Color', 'Black')}
    productSize={text('Size', 'XL')}
    isFavorite={boolean('Change Favorite Heart', false)}
  />
);
