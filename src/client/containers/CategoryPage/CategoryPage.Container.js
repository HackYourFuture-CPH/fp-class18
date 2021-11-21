import React from 'react';
import './CategoryPage.Style.css';
import ProductView from '../../components/ProductView/ProductView.component';
import { useParams } from 'react-router-dom';

const CategoryPageContainer = () => {
  const { name } = useParams();
  const products = useFetchApi('products?category=${name}');
  return (
    <div>
      <h1 className="category">{name}</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ProductView
          products={products}
          productsPerPage={8}
          categoriesList={[]}
        />
      )}
    </div>
  );
};

export default CategoryPageContainer;
