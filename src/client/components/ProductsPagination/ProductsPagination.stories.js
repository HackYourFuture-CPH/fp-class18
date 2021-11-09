import React from 'react';
import ProductsPagiantion from './ProductsPagination.component';
import productsImages from './ProductsPaginationImages.component';

export default { title: 'components/Products Pagination' };

export const PaginationStoryComponent = () => (
  <ProductsPagiantion productsImages={productsImages} />
);
