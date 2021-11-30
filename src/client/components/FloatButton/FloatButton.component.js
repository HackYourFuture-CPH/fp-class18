import React from 'react';
import './FloatButton.styles.css';

export default function FloatButtonComponent() {
  return (
    <div>
      <a href="/" className="float">
        <p>Back</p>
      </a>
      <div className="label-container">
        <div className="label-text">Go to Home</div>
      </div>
    </div>
  );
}

FloatButtonComponent.propTypes = {};

FloatButtonComponent.defaultProps = {};
