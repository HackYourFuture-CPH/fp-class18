import React from 'react';
import './LandingPage.Style.css';
import HeroImage from '../../components/HeroImage/HeroImage.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ProductView from '../../components/ProductView/ProductView.component';
import { UseFetchApi } from './UseFetchApi';

const LandingPageContainer = () => {
  const products = UseFetchApi('products');
  const categories = UseFetchApi('categories');

  return (
    <main>
      <div className="hero-image">
        <HeroImage heroText="WELCOME" />
      </div>
      <div>
        {products.isLoading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <Carousel
            imageArray={products.data.map((product) => product.picture)}
            show={3}
          />
        )}
      </div>
      <div>
        {categories.isLoading && products.isLoading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <ProductView
            products={products.data}
            productsPerPage={6}
            categoriesList={categories.data}
          />
        )}
      </div>
    </main>
  );
};

export default LandingPageContainer;
