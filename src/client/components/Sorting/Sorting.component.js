import React from 'react';
import './Sorting.styles.css';
import { options } from './helper';
import PropTypes from 'prop-types';

export default function Sorting({ arrayToSort, categoriesList, onSortChange }) {
  const [showCategories, setShowCategories] = React.useState(false);

  function sortProducts(option) {
    if (option === 'category') {
      setShowCategories(true);
    } else {
      setShowCategories(false);
    }
    if (option === 'AlphabeticallyAZ') {
      return arrayToSort.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (option === 'AlphabeticallyZA') {
      return arrayToSort.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (option === 'created-at') {
      return arrayToSort.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at),
      );
    }
  }

  function sortCategories(option) {
    return arrayToSort.filter((product) => product.category_id === option);
  }

  return (
    <div className="sorting-div">
      <select
        defaultValue="DEFAULT"
        onChange={(e) => onSortChange(sortProducts(e.target.value))}
        className="sort-options"
      >
        <option value="DEFAULT" disabled hidden>
          SORT BY
        </option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} className="options">
              {option.label}
            </option>
          );
        })}
      </select>
      <div>
        {showCategories &&
          categoriesList.map((category) => {
            return (
              <div key={category.id} className="input-div">
                <input
                  className="input-button"
                  type="button"
                  onClick={() => onSortChange(sortCategories(category.id))}
                  value={category.name}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

Sorting.propTypes = {
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      map: PropTypes.func,
    }),
  ).isRequired,
  arrayToSort: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      // eslint-disable-next-line @typescript-eslint/camelcase
      created_date: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
  onSortChange: PropTypes.func.isRequired,
};
