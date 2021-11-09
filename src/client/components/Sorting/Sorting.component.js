import React from 'react';
import './Sorting.styles.css';
import { options } from './helper';
import PropTypes from 'prop-types';

export default function Sorting({ products, categories }) {
  const [allProducts, setAllProducts] = React.useState(products);
  const [showCategories, setShowCategories] = React.useState(false);

  const handleSort = (e) => {
    if (e === 'AlphabeticallyAZ') {
      const ascSort = allProducts
        .map((product) => product.name)
        .sort((a, b) => a.name.localeCompare(b.name));
      setAllProducts(ascSort);
      return setShowCategories(!showCategories);
    }
    if (e === 'AlphabeticallyZA') {
      const decSort = allProducts.sort((a, b) => b.name.localeCompare(a.name));
      return setAllProducts(decSort);
    }

    if (e === 'created-at') {
      const newProducts = allProducts.sort(
        (a, b) => new Date(b.created_date) - new Date(a.created_date),
      );
      return setAllProducts(newProducts);
    }
    if (e === 'category') {
      setShowCategories(!showCategories);
    }
  };

  const onSort = (name) => {
    setAllProducts(name);
  };

  return (
    <div className="sorting-div">
      <select onChange={(e) => handleSort(e.target.value)} className="select">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {showCategories && <div>{allProducts}</div>}
      <div>
        {showCategories &&
          categories.map((category) => {
            return (
              <div>
                <input
                  className="input-button"
                  type="button"
                  key={category.id}
                  onClick={(e) => onSort(e.target.value)}
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
  categories: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    map: PropTypes.func,
  }).isRequired,
  products: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    // eslint-disable-next-line @typescript-eslint/camelcase
    created_at: PropTypes.instanceOf(Date),
  }).isRequired,
};
