import React from 'react';
import Sorting from './Sorting.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components / Sorting',
  component: Sorting,
  argTypes: {
    categories: { control: '' },
    products: { control: '' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const template = (args) => <Sorting {...args} />;

export const showSorting = template.bind({});

showSorting.args = {
  // onclick: {action ()},
  categoriesList: [
    {
      id: 1,
      name: 'Furniture',
      created_at: '2020-05-11 00:00:00',
    },
    {
      id: 2,
      name: 'Lamps',
      created_at: '2020-05-11 00:00:00',
    },
    {
      id: 3,
      name: 'Home decor',
      created_at: '2020-05-11 00:00:00',
    },
    {
      id: 4,
      name: 'Linens',
      created_at: '2020-05-11 00:00:00',
    },
  ],
  arrayToSort: [
    {
      id: 1,
      name: 'Ceramic pot',
      price: 50,
      picture: 'src/client/assets/images/image01.png',
      stock_amount: 20,
      category_id: 3,
      created_date: '2020-02-11 00:00:00',
    },
    {
      id: 2,
      name: 'Table lamp',
      price: 150,
      color: 'white',
      picture: 'src/client/assets/images/image02.png',
      stock_amount: 58,
      category_id: 2,
      created_date: '2020-04-16 00:00:00',
    },
    {
      id: 3,
      name: 'Ceramic pottery',
      price: 120,
      color: 'blue',
      picture: 'src/client/assets/images/image03.png',
      stock_amount: 140,
      category_id: 3,
      created_date: '2020-11-28 00:00:00',
    },
    {
      id: 4,
      name: 'Picture frame',
      price: 80,
      color: 'white',
      picture: 'src/client/assets/images/image04.png',
      stock_amount: 2,
      category_id: 3,
      created_date: '2019-11-28 00:00:00',
    },
    {
      id: 5,
      name: 'Pillow case',
      price: 65,
      color: 'white',
      picture: 'src/client/assets/images/image05.png',
      stock_amount: 2,
      category_id: 4,
      created_date: '2020-12-16 00:00:00',
    },
    {
      id: 6,
      name: 'Knitted plaid',
      price: 80,
      picture: 'src/client/assets/images/image06.png',
      stock_amount: 134,
      category_id: 4,
      created_date: '2020-12-10 00:00:00',
    },
    {
      id: 7,
      name: 'Mirror diamonds',
      price: 520,
      picture: 'src/client/assets/images/image07.png',
      stock_amount: 12,
      category_id: 3,
      created_date: '2021-04-16 00:00:00',
    },
    {
      id: 8,
      name: 'Ceramic candliers',
      price: 150,
      picture: 'src/client/assets/images/image08.png',
      stock_amount: 321,
      category_id: 3,
      created_date: '2021-10-16 00:00:00',
    },
    {
      id: 9,
      name: 'Retro chair',
      price: 850,
      picture: 'src/client/assets/images/image09.png',
      stock_amount: 7,
      category_id: 1,
      created_date: '2021-08-16 00:00:00',
    },
    {
      id: 10,
      name: 'Modern table lamp',
      price: 430,
      color: 'black',
      picture: 'src/client/assets/images/image10.png',
      stock_amount: 12,
      category_id: 3,
      created_date: '2020-04-17 00:00:00',
    },
    {
      id: 11,
      name: 'Silk pillow case',
      price: 120,
      color: 'black',
      picture: 'src/client/assets/images/image11.png',
      stock_amount: 12,
      category_id: 3,
      created_date: '2021-11-07 00:00:00',
    },
    {
      id: 12,
      name: 'Modern dinig table',
      price: 520,
      picture: 'src/client/assets/images/image12.png',
      stock_amount: 12,
      category_id: 3,
      created_date: '2021-11-09 00:00:00',
    },
  ],
};
