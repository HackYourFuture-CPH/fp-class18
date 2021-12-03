import React from 'react';
import PropTypes from 'prop-types';
import './ButtonV2.styles.css';

export default function ButtonComponent2({ title, backgroundColor, onClick }) {
  return (
    <div className="button-component">
      <button
        type="button"
        onClick={onClick}
        className="button2"
        style={{ backgroundColor }}
      >
        {title}
      </button>
    </div>
  );
}

ButtonComponent2.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
};

ButtonComponent2.defaultProps = {
  onClick: () => {
    return 'clicked';
  },
  backgroundColor: '#8E0EF2',
};
