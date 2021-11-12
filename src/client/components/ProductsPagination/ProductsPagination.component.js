import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagination = ({ productsImages }) => {
  const [productsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [];
  for (
    let i = 1;
    i <= Math.ceil(productsImages.length / productsPerPage);
    i++
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
    return (
      <li
        key={number}
        onClick={() => paginate(number)}
        className={currentPage == number ? 'active' : null}
      >
        {number}
      </li>
    );
  });

  const displayProducts =
    currentProducts &&
    currentProducts.map((image) => {
      return (
        <div>
          <img src={image} alt="product-image" height="300px" width="280px" />
        </div>
      );
    });

  return (
    <>
      <h3>ALL PRODUCTS</h3>
      <br />
      <div className="displayImgs">{displayProducts}</div>
      <div className="pageNumbers">{renderPageNumbers}</div>
    </>
  );
};

ProductsPagination.propTypes = {
  productsImages: PropTypes.array.isRequired,
  productsPerPage: PropTypes.number,
  paginate: PropTypes.func,
};
export default ProductsPagination;
