import React from 'react';
import PropTypes from 'prop-types';

export const Heart = ({
  height = 320,
  fill,
  stroke = 'black',
  strokeWidth = 10,
}) => (
  <svg
    width={height}
    height={height}
    viewBox="0 -5 100 110"
    preserveAspectRatio="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.841 9.35281L55.8413 9.35256C64.9133 0.215868 79.6148 0.215732 88.688 9.35265C97.7708 18.4992 97.7708 33.3351 88.687 42.4817L82.6222 48.5869L82.6219 48.5872L48.0001 83.452L13.3782 48.5872L13.3778 48.5868L7.3121 42.4818C-1.77071 33.3352 -1.77071 18.5003 7.3121 9.35373L7.31219 9.35364C16.3842 0.216947 31.0867 0.216811 40.16 9.35373L40.1601 9.35389L46.2263 15.4615L48.0001 17.2474L49.7738 15.4615L55.841 9.35281Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

Heart.propTypes = {
  height: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
};
