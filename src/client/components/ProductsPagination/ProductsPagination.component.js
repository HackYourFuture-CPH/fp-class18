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
        <li
          key={number}
          onClick={() => onPageChange(paginate(number))}
          className={currentPage === number ? 'active' : null}
        >
          {number}
        </li>
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
      <li onClick={() => onPageChange(handleNextBtn())}> &hellip;</li>
    );
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li onClick={() => onPageChange(handlePrevBtn())}> &hellip;</li>
    );
  }

  return (
    <>
      <ul className="pageNumbers">
        <li>
          <button
            type="button"
            onClick={() => onPageChange(handlePrevBtn())}
            disabled={currentPage === 1}
          >
            &#10094; Prev
          </button>
        </li>
        {pageDecrementBtn}
        {displayPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            type="button"
            onClick={() => onPageChange(handleNextBtn())}
            disabled={currentPage === pages.length}
          >
            Next &#10095;
          </button>
        </li>
      </ul>
    </>
  );
};

ProductsPagination.propTypes = {
  arrayToFilter: PropTypes.array,
  productsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

ProductsPagination.defaultProps = {
  arrayToFilter: [],
  productsPerPage: 6,
};
export default ProductsPagination;
