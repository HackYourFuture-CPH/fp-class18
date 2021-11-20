import React from 'react';
import './LandingPage.Style.css';
import HeroImage from '../../components/HeroImage/HeroImage.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ProductView from '../../components/ProductView/ProductView.component';
import { UseFetchApi } from '../../hooks/UseFetchApi';

const LandingPageContainer = () => {
  const products = UseFetchApi('products');
  const categories = UseFetchApi('categories');
  const monthlyArrivals = UseFetchApi('products?daysBeforeToday=30');

  const compareMonth = (date) => {
    return new Date().getMonth() === new Date(date).getMonth();
  };

  return (
    <main id="landing-main">
      <div className="hero-image">
        <HeroImage heroText="WELCOME" />
      </div>
      <h2>MONTHLY ARRIVALS</h2>
      <div>
        {products.isLoading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <Carousel
            imageArray={monthlyArrivals.data.map((product) =>
              compareMonth(product.created_at) ? product.picture : false,
            )}
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
