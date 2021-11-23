import React from 'react';
import './LandingPage.Style.css';
import HeroImage from '../../components/HeroImage/HeroImage.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ProductView from '../../components/ProductView/ProductView.component';
import { useFetchApi } from '../../hooks/UseFetchApi';

const LandingPageContainer = () => {
  const products = useFetchApi('products');
  const categories = useFetchApi('categories');
  const monthlyArrivals = useFetchApi('products?daysBeforeToday=30');

  const compareMonth = (date) => {
    return new Date().getMonth() === new Date(date).getMonth();
  };
  const imageArray = monthlyArrivals.data.filter((product) =>
    compareMonth(product.created_at) ? product : false,
  );

  return (
    <main>
      <div className="hero-image">
        <HeroImage heroText="WELCOME" />
      </div>
      <h2>MONTHLY ARRIVALS</h2>
      <div>
        {products.isLoading ? (
          <h2 className="loading">Loading...</h2>
        ) : (
          <Carousel
            imageArray={imageArray.map((product) => product.picture)}
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
