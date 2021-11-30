import React from 'react';
import './CategoryPage.Style.css';
import ProductView from '../../components/ProductView/ProductView.component';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import Loader from '../../components/Loader/index';
import Page404Container from '../404Page/404Page.Container';

const CategoryPageContainer = () => {
  const { name } = useParams();
  const products = useFetchApi(`products?category=${name}`);
  return (
    <>
      <div className="product-container">
        {products.data.isLoading ? (
          <Loader />
        ) : (
          <>
            {' '}
            {products.data.length === 0 ? (
              <Page404Container />
            ) : (
              <ProductView
                header={name}
                products={products.data}
                productsPerPage={8}
                categoriesList={[]}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CategoryPageContainer;
