import React from 'react';
import './Sorting.styles.css';
import { options } from './helper';
import PropTypes from 'prop-types';
import image01 from '../../assets/images/image01.png';

const sortProducts = (sortMode, products) => {
  if (sortMode === 'AlphabeticallyAZ') {
    return products.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortMode === 'AlphabeticallyZA') {
    return products.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sortMode === 'created-at') {
    return products.sort(
      (a, b) => new Date(b.created_date) - new Date(a.created_date),
    );
  }
};

export default function Sorting({ products, categories }) {
  const [sortMode, setSortMode] = React.useState(undefined);
  const [showSorting, setShowSorting] = React.useState(false);
  const [showCategories, setShowCategories] = React.useState(false);

  const currentProducts = sortProducts(sortMode, products);
  if (sortMode === 'category') {
    setShowCategories(!showCategories);
  }
  // const onSort = (id) => {
  //   const productInCategory = products.filter(
  //     (product) => product.category_id === id,
  //   );
  //   setAllProducts(productInCategory);
  //   setShowSorting(!showSorting);
  //   setShowCategories(!showCategories);
  // };

  return (
    <div className="sorting-div">
      <select
        onChange={(e) => {
          setSortMode(e.target.value);
          setShowSorting(!showSorting);
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
        currentProducts.map((product) => {
          return (
            <ul key={product.id}>
              <li className="sort-list">
                <span>{/* <img src={image01} alt="product" /> */}</span>
                <br />
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
        {categories.map((category) => {
          return (
            <div key={category.id} className="input-div">
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
