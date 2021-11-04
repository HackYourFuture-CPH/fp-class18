import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import productsImages from './ProductsPaginationImages.component';
import './ProductsPagination.styles.css';

const ProductsPagiantion = () => {
  const productsPerPage = 3;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = productsImages
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((image) => {
      return (
        <div>
          <img src={image} alt="products-img" />
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
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={'paginationButtons'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </>
  );
};

export default ProductsPagiantion;
