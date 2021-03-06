import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagination = ({
  arrayToFilter,
  productsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(arrayToFilter.length / productsPerPage);
    i += 1
  ) {
    pages.push(i);
  }

  const getCurrentProducts = (page) => {
    const indexOfLastProduct = page * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProductsOnPage = arrayToFilter.slice(
      indexOfFirstProduct,
      indexOfLastProduct,
    );
    return currentProductsOnPage;
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    return getCurrentProducts(pageNumber);
  };

  const displayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <button
          type="button"
          key={number}
          onClick={() => onPageChange(paginate(number))}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </button>
      );
    }
    return null;
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
    return getCurrentProducts(currentPage + 1);
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
    return getCurrentProducts(currentPage - 1);
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <button type="button" onClick={() => onPageChange(handleNextBtn())}>
        {' '}
        &hellip;
      </button>
    );
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button type="button" onClick={() => onPageChange(handlePrevBtn())}>
        {' '}
        &hellip;
      </button>
    );
  }

  return (
    <>
      <nav className="pagination">
        <button
          type="button"
          onClick={() => onPageChange(handlePrevBtn())}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
        {pageDecrementBtn}
        {displayPageNumbers}
        {pageIncrementBtn}
        <button
          type="button"
          onClick={() => onPageChange(handleNextBtn())}
          disabled={currentPage === pages.length}
        >
          Next &raquo;
        </button>
      </nav>
    </>
  );
};

ProductsPagination.propTypes = {
  arrayToFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      // eslint-disable-next-line @typescript-eslint/camelcase
      created_at: PropTypes.string,
    }),
  ).isRequired,
  productsPerPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

ProductsPagination.defaultProps = {
  productsPerPage: 6,
};
export default ProductsPagination;
