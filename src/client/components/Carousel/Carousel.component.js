import React, { useState } from 'react';
import './Carousel.style.css';

const Carousel = ({ imageArray }) => {
  const show = 3;
  const [current, setCurrent] = useState(0);
  const imageArraLength = imageArray.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? imageArraLength - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === imageArraLength - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(imageArray) || imageArraLength <= 0) {
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
      {imageArray.slice(current, current + show).map((image) => {
        return <img src={image} alt="product images" className="image" />;
      })}
    </section>
  );
};

export default Carousel;
