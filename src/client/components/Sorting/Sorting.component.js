import React from 'react';
import './Sorting.styles.css';
import { options } from './helper';
import PropTypes from 'prop-types';

const sortProducts = (sortMode, arrayToSort) => {
  if (sortMode === 'AlphabeticallyAZ') {
    return arrayToSort.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortMode === 'AlphabeticallyZA') {
    return arrayToSort.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortMode === 'created-at') {
    return arrayToSort.sort(
      (a, b) => new Date(b.created_date) - new Date(a.created_date),
    );
  }
};

export default function Sorting({ arrayToSort, categoriesList }) {
  const [sortMode, setSortMode] = React.useState('AlphabeticallyAZ');
  const [showSorting, setShowSorting] = React.useState(false);
  const [showCategories, setShowCategories] = React.useState(false);

  let currentRange = sortProducts(sortMode, arrayToSort);

  const onSort = (id) => {
    const productInCategory = arrayToSort.filter(
      (product) => product.category_id === id,
    );
    currentRange = productInCategory;

    setShowSorting(!showSorting);
  };

  return (
    <div className="sorting-div">
      <select
        onChange={(e) => {
          setSortMode(e.target.value);

          if (e.target.value === 'category') {
            setShowCategories(!showCategories);
            setShowSorting(false);
          } else {
            setShowSorting(true);
            setShowCategories(false);
          }
        }}
        className="sort-options"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value} className="options">
              {option.label}
            </option>
          );
        })}
      </select>

      {showSorting &&
        !showCategories &&
        currentRange.map((product) => {
          return (
            <ul key={product.id}>
              <li className="sort-list">
                <h3>{product.name}</h3>
                <h5>
                  production date:
                  {new Date(product.created_date).toLocaleDateString()}
                </h5>
                <br />
              </li>
            </ul>
          );
        })}
      <div>
        {showCategories &&
          !showSorting &&
          categoriesList.map((category) => {
            return (
              <div key={category.id} className="input-div">
                <input
                  className="input-button"
                  type="button"
                  onClick={() => {
                    onSort(category.id);
                  }}
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
      created_at: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};
