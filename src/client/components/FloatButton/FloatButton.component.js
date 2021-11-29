import React from 'react';
import './FloatButton.styles.css';
import homeIcon from '../../assets/images/homeicon.png';

export default function FloatButtonComponent() {
  return (
    <div>
      <a href="/" className="float">
        <img src={homeIcon} alt="home-icon" />
      </a>
      <div className="label-container">
        <div className="label-text">Go to Home</div>
      </div>
    </div>
  );
}

FloatButtonComponent.propTypes = {};

FloatButtonComponent.defaultProps = {};
