import React from 'react';
import PropTypes from 'prop-types';
import './ButtonComponent.styles.css';

export default function ButtonComponent({ title, backgroundColor, onClick }) {
  return (
    <div className="button-component">
      <button
        type="button"
        onClick={onClick}
        className="storybook-button storybook-button--primary storybook-button--medium"
        style={{ backgroundColor }}
      >
        {title}
      </button>
    </div>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

ButtonComponent.defaultProps = {
  onClick: null,
  backgroundColor: 'purple',
};
