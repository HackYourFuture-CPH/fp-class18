import React from 'react';
import './heroImage.css';
import heroImg from '../../../assets/images/hero-image.png';
import Button from '../buttonComponent/button';
import PropTypes from 'prop-types';

function onClickHandler() {
  // eslint-disable-next-line no-console
  console.log('Sign up button is clicked');
}
export default function HeroImage({ heroText }) {
  return (
    <div className="hero-image">
      <img src={heroImg} alt="" />
      <div className="hero-text">
        <h3 className="title-text">{heroText}</h3>
        <Button label="Sign Up" onClick={() => onClickHandler()} />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/no-typos
HeroImage.propTypes = {
  heroText: PropTypes.string.isRequired,
};
