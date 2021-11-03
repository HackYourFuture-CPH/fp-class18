import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({ label, onClick }) {
  return (
    <div>
      <button className="btn" type="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}
// eslint-disable-next-line react/no-typos
Button.PropTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {
    // eslint-disable-next-line no-console
    console.log('default button handler clicked');
  },
};
