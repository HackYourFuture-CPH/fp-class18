import React from 'react';
import { text, number, boolean } from '@storybook/addon-knobs';
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
    productImg={text('Image', 'src/client/assets/images/image01.png')}
    isDisable={boolean('Disable', false)}
    onDelete={() => {
      return 'click';
    }}
    isFavorite={boolean('Change Favorite Heart', false)}
    userId={text('userId', '')}
    productId={number('number', 2)}
  />
);

export const AuthenticatedComponent = () => (
  <ShoppingItem
    productName={text('productName', 'Product Name')}
    quantity={number('number', 20)}
    price={number('priceNumber', 1000)}
    productImg={text('Image', 'src/client/assets/images/image01.png')}
    isDisable={boolean('Disable', false)}
    onDelete={() => {
      return 'click';
    }}
    isFavorite={boolean('Change Favorite Heart', true)}
    userId={text('userId', 'xsszx')}
    productId={number('number', 2)}
  />
);

export const DisableFavoriteComponent = () => (
  <ShoppingItem
    productName={text('productName', 'Product Name')}
    quantity={number('number', 20)}
    price={number('priceNumber', 1000)}
    productImg={text('Image', 'src/client/assets/images/image01.png')}
    isDisable={boolean('Disable', true)}
    onDelete={() => {
      return 'click';
    }}
    isFavorite={boolean('Change Favorite Heart', true)}
    userId={text('userId', 'asasa')}
    productId={number('number', 2)}
  />
);

export const DisableComponent = () => (
  <ShoppingItem
    productName={text('productName', 'Product Name')}
    quantity={number('number', 20)}
    price={number('priceNumber', 1000)}
    productImg={text('Image', 'src/client/assets/images/image01.png')}
    isDisable={boolean('Disable', true)}
    onDelete={() => {
      return 'click';
    }}
    isFavorite={boolean('Change Favorite Heart', false)}
    userId={text('userId', 'sadasd')}
    productId={number('number', 2)}
  />
);
