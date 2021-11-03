import React from 'react';
import './heroImage.css';
import heroImg from '../../../assets/images/hero-image.png';
import Button from '../buttonComponent/button';
import PropTypes from 'prop-types';

export default function HeroImage({ heroText }) {
  return (
    <div className="hero-image">
      <img className="heroImage" src={heroImg}></img>
      <div class="hero-text">
        <h3 className="title-text">{heroText}</h3>
        <Button
          label="Sign Up"
          onClick={() => console.log('Sign up button is clicked')}
        />
      </div>
    </div>
  );
}

HeroImage.PropTypes = {
  heroText: PropTypes.string.isRequired,
};
