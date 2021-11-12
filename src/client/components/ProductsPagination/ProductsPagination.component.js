import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagination = ({ productsImages }) => {
  const [productsPerPage] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(productsImages.length / productsPerPage);
    i += 1
  ) {
    pages.push(i);
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsImages.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPageNumbers = pages.map((number) => {
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
    currentProducts.map((image) => {
      return (
        <div>
          <img src={image} alt="product-img" height="300px" width="280px" />
        </div>
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
        disabled={currentPage === pages[pages.length - 1] ? true : false}
      >
        &hellip;
      </li>
    );
  }
  let pageDecrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageDecrementBtn = (
      <li
        onClick={handlePrevBtn}
        disabled={currentPage === pages[0] ? true : false}
      >
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
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button
            type="button"
            onClick={handleNextBtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
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
