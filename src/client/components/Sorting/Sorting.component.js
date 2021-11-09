import React from 'react';
import './Sorting.styles.css';
import { options } from './helper';
import PropTypes from 'prop-types';

export default function Sorting({ products, categories }) {
  const [allProducts, setAllProducts] = React.useState(products);
  const [showSorting, setShowSorting] = React.useState(false);
  const [showCategories, setShowCategories] = React.useState(false);

  const handleSort = (e) => {
    if (e === 'AlphabeticallyAZ') {
      const ascSort = allProducts.sort((a, b) => a.name.localeCompare(b.name));
      setAllProducts(ascSort);
      setShowSorting(!showSorting);
      return;
    }
    if (e === 'AlphabeticallyZA') {
      const decSort = allProducts.sort((a, b) => b.name.localeCompare(a.name));
      setAllProducts(decSort);
      setShowSorting(!showSorting);
      return;
    }

    if (e === 'created-at') {
      const newProducts = allProducts.sort(
        (a, b) => new Date(b.created_date) - new Date(a.created_date),
      );
      setAllProducts(newProducts);
      setShowSorting(!showSorting);
      return;
    }
    if (e === 'category') {
      setShowCategories(!showCategories);
    }
  };

  const onSort = (id) => {
    const productInCategory = allProducts.filter(
      (product) => product.category_id === id,
    );
    setAllProducts(productInCategory);
    setShowSorting(!showSorting);
  };

  return (
    <div className="sorting-div">
      <select
        onChange={(e) => handleSort(e.target.value)}
        className="sort-options"
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {showSorting &&
        allProducts.map((product) => {
          return (
            <ul key={product.id}>
              <li className="sort-list">
                <span>{product.name}</span> <br />
                <span>
                  {new Date(product.created_date).toLocaleDateString()}
                </span>
              </li>
            </ul>
          );
        })}
      <div>
        {showCategories &&
          categories.map((category) => {
            return (
              <div key={category.id}>
                <input
                  className="input-button"
                  type="button"
                  onClick={() => onSort(category.id)}
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
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      map: PropTypes.func,
    }),
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      // eslint-disable-next-line @typescript-eslint/camelcase
      created_at: PropTypes.instanceOf(Date),
    }),
  ).isRequired,
};
