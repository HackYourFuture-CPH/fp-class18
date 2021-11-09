import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './ProductsPagination.styles.css';

const ProductsPagiantion = ({ productsImages }) => {
  const productsPerPage = 5;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = productsImages
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((image) => {
      return (
        <div>
          <ul className="displayImgs">
            <li key={image.id}>
              <img
                src={image}
                alt="products-img"
                width="300px"
                height="280px"
              />
            </li>
          </ul>
        </div>
      );
    });

  const pageCount = Math.ceil(productsImages.length / productsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <h3>ALL PRODUCTS</h3>
      <div className="displayImgs">
        {displayProducts}
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="paginationButtons"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </>
  );
};

ProductsPagiantion.propTypes = {
  productsImages: PropTypes.array.isRequired,
};

export default ProductsPagiantion;
