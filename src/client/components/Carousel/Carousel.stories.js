import React from 'react';
import Carousel from './Carousel.component';
import { MemoryRouter } from 'react-router';

export default {
  title: 'components/Carousel for monthly and similar products',
};

const productImages = [
  'src/client/assets/images/image01.png',
  'src/client/assets/images/image02.png',
  'src/client/assets/images/image03.png',
  'src/client/assets/images/image04.png',
  'src/client/assets/images/image05.png',
  'src/client/assets/images/image06.png',
  'src/client/assets/images/image07.png',
  'src/client/assets/images/image08.png',
  'src/client/assets/images/image09.png',
  'src/client/assets/images/image10.png',
  'src/client/assets/images/image11.png',
  'src/client/assets/images/image12.png',
];

export const component = () => (
  <MemoryRouter>
    <Carousel imageArray={productImages} show={3} />
  </MemoryRouter>
);
