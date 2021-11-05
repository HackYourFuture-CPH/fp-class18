import React from 'react';
import PropTypes from 'prop-types';

export default function SortingOptions({ option }) {
  return <option value={option.value}>{option.label}</option>;
}
SortingOptions.propTypes = {
  option: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};
