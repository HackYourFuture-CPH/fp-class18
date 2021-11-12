import React from 'react';
import productsImages from './ProductsImages.component';
import ProductsPagination from './ProductsPagination.component';

export default {
  title: 'Components / Products Pagination',
  component: ProductsPagination,
};

export const Component = () => (
  <ProductsPagination productsImages={productsImages} />
);
