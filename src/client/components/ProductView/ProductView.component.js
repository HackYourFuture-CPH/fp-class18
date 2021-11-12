import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductView.styles.css';
import Pagination from './Pagination.component';
import Sorting from './Sorting.component';

export default function ProductView({
  products,
  productsPerPage = 6,
  categoriesList,
}) {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [currentRange, setCurrentRange] = useState(products);

  return (
    <div>
      <h3>All Products</h3>
      <Sorting
        arrayToSort={products}
        categoriesList={categoriesList}
        onSortChange={(sortedArray) => setSortedProducts(sortedArray)}
      />
      {currentRange.map((product) => {
        return (
          <ul key={product.id}>
            <li className="products-list">
              <span>
                <img src={product.picture} alt={`${product.name}`} />
              </span>
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

      <Pagination
        arrayToFilter={sortedProducts}
        productsPerPage={productsPerPage}
        onPageChange={(range) => setCurrentRange(range)}
      />
    </div>
  );
}

ProductView.propTypes = {
  products: PropTypes.array,
  productsPerPage: PropTypes.number,
  categoriesList: PropTypes.arrayOf(String),
};

ProductView.defaultProps = {
  products: [],
  productsPerPage: 6,
  categoriesList: ['Catgory1', 'Catgory2', 'Catgory2'],
};
