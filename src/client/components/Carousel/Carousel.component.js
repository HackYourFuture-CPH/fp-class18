import React, { useState } from 'react';
import './Carousel.style.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Carousel = ({ imageArray, show, products }) => {
  const [current, setCurrent] = useState(0);
  const imageArrayLength = imageArray.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? imageArrayLength - 1 : current - 1);
  };
  const nextSlide = () => {
    setCurrent(current === imageArrayLength - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(imageArray) || imageArrayLength <= 0) {
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
        const productData = products
          ? products.filter(
              (product) =>
                product.picture.split('/')[4] === `${image.split('/')[4]}`,
            )
          : false;
        return (
          <Link to={productData ? `/product/${productData[0].id}` : ''}>
            <img
              // eslint-disable-next-line
              src={require(`../../assets/images/${image.split('/')[4]}`)}
              alt={image}
              className="image"
            />
          </Link>
        );
      })}
    </section>
  );
};

Carousel.propTypes = {
  imageArray: PropTypes.arrayOf(PropTypes.any),
  show: PropTypes.number,
};
Carousel.defaultProps = {
  imageArray: [],
  show: 3,
};
export default Carousel;
