import React from 'react';
import './CategoryPage.Style.css';
import ProductView from '../../components/ProductView/ProductView.component';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';

const CategoryPageContainer = () => {
  const { name } = useParams();
  const products = useFetchApi(`products?category=${name}`).data;
  return (
    <div>
      {products.isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ProductView
          header={name}
          products={products}
          productsPerPage={8}
          categoriesList={[]}
        />
      )}
    </div>
  );
};

export default CategoryPageContainer;
