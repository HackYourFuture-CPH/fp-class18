import React, { useState } from 'react';
import './Carousel.style.css';
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

const Carousel = () => {
  const show = 3;
  const [current, setCurrent] = useState(0);
  const imageArraLength = productImages.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? imageArraLength - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === imageArraLength - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(productImages) || imageArraLength <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <button type="button" className="left-arrow" onClick={prevSlide}>
        &lt;
      </button>
      <button type="button" className="right-arrow" onClick={nextSlide}>
        &gt;
      </button>
      {productImages.slice(current, current + show).map((image) => {
        return <img src={image} alt="product images" className="image" />;
      })}
    </section>
  );
};

export default Carousel;
