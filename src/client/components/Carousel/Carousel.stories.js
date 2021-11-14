import React from 'react';
import Carousel from './Carousel.component';
import image01 from '../../assets/images/image01.png';
import image02 from '../../assets/images/image02.png';
import image03 from '../../assets/images/image03.png';
import image04 from '../../assets/images/image04.png';
import image05 from '../../assets/images/image05.png';
import image06 from '../../assets/images/image06.png';
import image07 from '../../assets/images/image07.png';
import image08 from '../../assets/images/image08.png';
import image09 from '../../assets/images/image09.png';
import image10 from '../../assets/images/image10.png';
import image11 from '../../assets/images/image11.png';
import image12 from '../../assets/images/image12.png';

const productImages = [
  image01,
  image02,
  image03,
  image04,
  image05,
  image06,
  image07,
  image08,
  image09,
  image10,
  image11,
  image12,
];
export default {
  title: 'components/Carousel for monthly and similar products',
};

export const component = () => <Carousel imageArray={productImages} />;
