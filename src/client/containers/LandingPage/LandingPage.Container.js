import React from 'react';
import './LandingPage.Style.css';
import { Menu } from '../../components/menu/Menu.component'
import HeroImage from '../../components/HeroImage/HeroImage.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ProductView from '../../components/ProductView/ProductView.component';
import { Footer } from '../../components/Footer/Footer.component';

const LandingPageContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [productsImages, setProductsImages] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setProductsImages(data.map((product) => product.picture));
      });
    // fetch('/api/categories')   We Dont have categories backend yet
    //   .then(res => res.json())
    //   .then(data => setCategories(data))
  }, []);

  return (
    <div>
      <div className='menu'>
        <Menu isAuthenticated={false} />
      </div>
      <div className='hero-image'>
        <HeroImage heroText="WELCOME" />
      </div>
      <div>
        <Carousel imageArray={productsImages} show={3} />
      </div>
      <div>
        <ProductView products={products} productsPerPage={6} categoriesList={categories} />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageContainer;
