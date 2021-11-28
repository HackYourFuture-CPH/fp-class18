import React from 'react';
import './FloatButton.styles.css';
import { FaHome } from 'react-icons/fa';

export default function FloatButtonComponent() {
  return (
    <div>
      <a href="/" className="float">
        <FaHome className="my-float" />
      </a>
      <div className="label-container">
        <div className="label-text">Go to Home</div>
        <i className="fa fa-play label-arrow" />
      </div>
    </div>
  );
}

FloatButtonComponent.propTypes = {};

FloatButtonComponent.defaultProps = {};
