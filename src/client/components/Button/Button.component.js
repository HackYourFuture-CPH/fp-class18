import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

export default function ButtonComponent({ title, backgroundColor, onClick }) {
  return (
    <div className="button-component">
      <button
        type="button"
        onClick={onClick}
        className="button"
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
  onClick: () => {
    return 'clicked';
  },
  backgroundColor: '#8E0EF2',
};
