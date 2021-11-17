import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductView.styles.css';
import Pagination from '../ProductsPagination/ProductsPagination.component';
import Sorting from '../Sorting/Sorting.component';

export default function ProductView({
  products,
  productsPerPage,
  categoriesList,
}) {
  const [productsToShow, setProductsToShow] = useState(products);
  const [currentRange, setCurrentRange] = useState([]);

  React.useEffect(() => {
    setProductsToShow(products);
    setCurrentRange(productsToShow.slice(0, productsPerPage));
  }, [products]);

  function handleSort(sortedArray) {
    if (sortedArray === undefined) return;
    setProductsToShow(sortedArray);
    setCurrentRange(sortedArray.slice(0, productsPerPage));
  }

  return (
    <div className="product-view">
      <h3>All Products</h3>
      <Sorting
        arrayToSort={products}
        categoriesList={categoriesList}
        onSortChange={(sortedArray) => {
          handleSort(sortedArray);
        }}
      />
      <ul className="product-list">
        {currentRange.map((product) => {
          return (
            <li className="product-item" key={product.id}>
              <img
                // eslint-disable-next-line
                src={product.picture}
                alt={product.name}
              />
            </li>
          );
        })}
      </ul>

      <Pagination
        arrayToFilter={productsToShow}
        productsPerPage={productsPerPage}
        onPageChange={(range) => setCurrentRange(range)}
      />
    </div>
  );
}

ProductView.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      created_at: PropTypes.string,
    }),
  ).isRequired,
  productsPerPage: PropTypes.number.isRequired,
  categoriesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      map: PropTypes.func,
    }),
  ).isRequired,
};
