import React from 'react';
import PropTypes from 'prop-types';
import './ButtonV2.styles.css';

export default function ButtonComponent2({
  title,
  backgroundColor,
  onClick,
  size = 'md',
  color,
  border,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border,
    color,
  };
  return (
    <button type="button" onClick={onClick} style={style} className="button2">
      {title}
    </button>
  );
}

ButtonComponent2.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
};

ButtonComponent2.defaultProps = {
  onClick: () => {
    return 'clicked';
  },
  backgroundColor: '#8E0EF2',
  size: 'md',
  color: 'white',
  border: 'none',
};
