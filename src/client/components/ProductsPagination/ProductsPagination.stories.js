import React from 'react';
import ProductsPagination from './ProductsPagination.component';

export default {
  title: 'Components / Products Pagination',
  component: ProductsPagination,
};

export const Pagination = (args) => <ProductsPagination {...args} />;
Pagination.args = {
  arrayToFilter: [
    {
      id: 1,
      name: 'Ceramic pot',
      price: '50.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image01.png',
      stock_amount: 20,
      category_id: 3,
    },
    {
      id: 2,
      name: 'Table lamp',
      price: '150.00',
      color: 'white',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image02.png',
      stock_amount: 58,
      category_id: 2,
    },
    {
      id: 3,
      name: 'Ceramic pottery',
      price: '120.00',
      color: 'blue',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image03.png',
      stock_amount: 140,
      category_id: 3,
    },
    {
      id: 4,
      name: 'Picture frame',
      price: '80.00',
      color: 'white',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image04.png',
      stock_amount: 2,
      category_id: 3,
    },
    {
      id: 5,
      name: 'Pillow case',
      price: '65.00',
      color: 'white',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image05.png',
      stock_amount: 2,
      category_id: 4,
    },
    {
      id: 6,
      name: 'Knitted plaid',
      price: '80.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image06.png',
      stock_amount: 134,
      category_id: 4,
    },
    {
      id: 7,
      name: 'Mirror diamonds',
      price: '520.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image07.png',
      stock_amount: 12,
      category_id: 3,
    },
    {
      id: 8,
      name: 'Ceramic candliers',
      price: '150.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image08.png',
      stock_amount: 321,
      category_id: 3,
    },
    {
      id: 9,
      name: 'Retro chair',
      price: '850.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image09.png',
      stock_amount: 7,
      category_id: 1,
    },
    {
      id: 10,
      name: 'Modern table lamp',
      price: '430.00',
      color: 'black',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image10.png',
      stock_amount: 12,
      category_id: 2,
    },
    {
      id: 11,
      name: 'Silk pillow case',
      price: '120.00',
      color: 'black',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image11.png',
      stock_amount: 12,
      category_id: 3,
    },
    {
      id: 12,
      name: 'Modern dinig table',
      price: '520.00',
      color: 'red',
      size: 'small',
      status: 'out_of_stock',
      created_at: '2021-11-11T05:45:55.000Z',
      picture: 'src/client/assets/images/image12.png',
      stock_amount: 12,
      category_id: 1,
    },
  ],
  productsPerPage: 6,
  onPageChange: (range) => console.log(range),
};
