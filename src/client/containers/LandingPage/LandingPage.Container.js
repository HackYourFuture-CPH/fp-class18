import React from 'react';
import './LandingPage.Style.css';
import HeroImage from '../../components/HeroImage/HeroImage.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ProductView from '../../components/ProductView/ProductView.component';

const LandingPageContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [productsImages, setProductsImages] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsImages(data.map((product) => product.picture));
      });
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <main>
      <div className="hero-image">
        <HeroImage heroText="WELCOME" />
      </div>
      <div>
        <Carousel imageArray={productsImages} show={3} />
      </div>
      <div>
        <ProductView
          products={products}
          productsPerPage={6}
          categoriesList={categories}
        />
      </div>
    </main>
  );
};

export default LandingPageContainer;
