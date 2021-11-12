import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

import { ProductDetails } from './ProductDetails.component';

export default {
    title: 'Components / ProductDetails Component',
    component: ProductDetails,
}

export const Product = () => (
    <ProductDetails
        ProductName={text('Name', 'PRODUCT TITLE')}
        RemainingUnit={number('Unit', '20')}
        Price={number('Price', '200')}
        productColor={text('Color', 'Black')}
        productSize={text('Size', 'XL')}
        onClick={action('Clicked add button')}
    />)