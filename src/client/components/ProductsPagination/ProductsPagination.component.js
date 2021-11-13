import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagination = ({ products, productsPerPage, onPageChange }) => {
  // const productsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i += 1) {
    pages.push(i);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const displayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </li>
      );
    }
    return null;
  });

  const displayProducts =
    currentProducts &&
    currentProducts.map((product) => {
      return (
        <ul key={product.id}>
          <li>
            <img
              src={product.picture}
              alt="product-img"
              height="300px"
              width="280px"
            />
            <br />
            <h3>{product.name}</h3>
          </li>
        </ul>
      );
    });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li
        onClick={handleNextBtn}
        disabled={currentPage === pages[pages.length - 1]}
      >
        &hellip;
      </li>
    );
  }
  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = (
      <li onClick={handlePrevBtn} disabled={currentPage === 0}>
        &hellip;
      </li>
    );
  }

  return (
    <>
      <h3>ALL PRODUCTS</h3>
      <br />
      <div className="displayImgs">{displayProducts}</div>
      <ul className="pageNumbers">
        <li>
          <button
            type="button"
            onClick={handlePrevBtn}
            disabled={currentPage === 0}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {displayPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            type="button"
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1]}
          >
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

ProductsPagination.propTypes = {
  productsImages: PropTypes.arrayOf,
};

ProductsPagination.defaultProps = {
  productsImages: [],
};
export default ProductsPagination;
