import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

export default function ButtonComponent({
  title,
  backgroundColor,
  onClick,
  disabled,
}) {
  return (
    <div className="button-component">
      {disabled ? (
        <button type="button" className="disableBt">
          {title}
        </button>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className="button"
          style={{ backgroundColor }}
        >
          {title}
        </button>
      )}
    </div>
  );
}

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonComponent.defaultProps = {
  disabled: false,
  onClick: () => {
    return 'clicked';
  },
  backgroundColor: '#8E0EF2',
};
