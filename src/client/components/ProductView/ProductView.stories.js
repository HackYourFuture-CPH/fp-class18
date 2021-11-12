import React from 'react';
import ProductView from './ProductView.component';

export default {
  title: 'Components / ProductView',
  component: ProductView,
};
// storybook-controls works with spread, but `Prop spreading is forbidden eslint(react/jsx-props-no-spreading)`
// eslint-disable-next-line
export const basicProductView = (args) => <ProductView {...args} />;

basicProductView.args = {
  products: arr,
};

const stringData = `[
    {
       "id":1,
       "name":"Ceramic pot",
       "price":"50.00",
       "color":"red",
       "size":"small",
       "status":"out_of_stock",
       "created_at":"2021-11-11T05:45:55.000Z",
       "picture":"src/client/assets/images/image01.png",
       "stock_amount":20,
       "category_id":3
    },
    {
       "id":2,
       "name":"Table lamp",
       "price":"150.00",
       "color":"white",
       "size":"small",
       "status":"out_of_stock",
       "created_at":"2021-11-11T05:45:55.000Z",
       "picture":"src/client/assets/images/image02.png",
       "stock_amount":58,
       "category_id":2
    }
 ]`;
var arr = JSON.parse(stringData);
