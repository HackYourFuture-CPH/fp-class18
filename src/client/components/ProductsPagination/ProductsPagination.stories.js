import React from 'react';
import ProductsPagination from './ProductsPagination.component';
import ProductView from '../ProductView/ProductView.component';

export default {
  title: 'Components / Products Pagination',
  component: ProductsPagination,
};

export const Component = () => (
  <ProductsPagination
    products={arrayToFilter}
    productsPerPage={productsPerPage}
    onPageChange={(range) => setCurrentRange(range)}
  />
);
