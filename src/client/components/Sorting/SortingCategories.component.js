import React from 'react';
import PropTypes from 'prop-types';

export default function SortingCategories({ category, onSort }) {
  return (
    <div>
      <input
        className="input-button"
        type="button"
        onClick={(e) => onSort(e.target.value)}
        value={category.name}
      />
    </div>
  );
}

SortingCategories.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onSort: PropTypes.func.isRequired,
};
