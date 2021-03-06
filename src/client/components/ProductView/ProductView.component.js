import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductView.styles.css';
import Pagination from '../ProductsPagination/ProductsPagination.component';
import Sorting from '../Sorting/Sorting.component';
import { Link } from 'react-router-dom';

export default function ProductView({
  header,
  products,
  productsPerPage,
  categoriesList,
}) {
  const [productsToShow, setProductsToShow] = useState(products);
  const [currentRange, setCurrentRange] = useState(
    products.slice(0, productsPerPage),
  );

  React.useEffect(() => {
    setProductsToShow(products);
    setCurrentRange(products.slice(0, productsPerPage));
  }, [products, productsPerPage]);

  function handleSort(sortedArray) {
    if (sortedArray === undefined) return;
    setProductsToShow(sortedArray);
    setCurrentRange(sortedArray.slice(0, productsPerPage));
  }

  return (
    <div className="product-view">
      <h3>{header}</h3>
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
              <Link to={`/product/${product.id}`}>
                <img
                  // eslint-disable-next-line
                  src={require(`../../assets/images/${
                    product.picture.split('/')[4]
                  }`)}
                  alt={product.name}
                />
              </Link>
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
  header: PropTypes.string,
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

ProductView.defaultProps = {
  header: 'All Products',
};
