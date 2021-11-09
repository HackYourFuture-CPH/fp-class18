import React from 'react';
import './HeroImage.styles.css';
import heroImg from '../../assets/images/hero-image.png';
import PropTypes from 'prop-types';

export default function HeroImage({ heroText }) {
  return (
    <div className="hero-image">
      <img src={heroImg} alt="HeroImage" />
      <div className="hero-text">
        <h3 className="title-text">{heroText}</h3>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
HeroImage.propTypes = {
  heroText: PropTypes.string.isRequired,
};
