import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './Carousel.style.css';
import productImages from './CarouselImages.js';

const Carousel = () => {
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
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {productImages.slice(current, current + 3).map((image) => {
        return <img src={image} alt="product images" className="image" />;
      })}
    </section>
  );
};

export default Carousel;
