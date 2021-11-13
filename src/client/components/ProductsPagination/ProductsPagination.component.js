import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagination = () => {
  const productsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);
  // i have hard coded the products array length and the productsPerPage, since i will get these as props
  // from another component which is not yet merged
  const productsLen = 37;
  const pageNumberLimit = 5;
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(productsLen / productsPerPage); i += 1) {
    pages.push(i);
  }
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
    pageIncrementBtn = <li onClick={handleNextBtn}> &hellip;</li>;
  }
  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevBtn}> &hellip;</li>;
  }

  return (
    <>
      <ul className="pageNumbers">
        <li>
          <button
            type="button"
            onClick={handlePrevBtn}
            disabled={currentPage === pages[0] ? true : false}
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
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next &#10095;
          </button>
        </li>
      </ul>
    </>
  );
};

ProductsPagination.propTypes = {
  products: PropTypes.arrayOf,
  productsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
};

ProductsPagination.defaultProps = {
  productsImages: [],
};
export default ProductsPagination;
