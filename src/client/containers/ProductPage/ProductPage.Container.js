import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ButtonComponent from '../../components/Button/Button.component';
import Loader from '../../components/Loader/Loader.component';
import './ProductPage.Style.css';
import { useFetchApi } from '../../hooks/UseFetchApi';
import Page404Container from '../404Page/404Page.Container';
import ButtonComponent2 from '../../components/ButtonV2/ButtonV2.component';
import { useFirebase } from '../../firebase/FirebaseContext';

const ProductPageContainer = ({ isAuthenticated }) => {
  const { auth } = useFirebase();
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [category, setCategory] = React.useState('');
  const [similarProduct, setSimilarProduct] = React.useState([]);
  const [fav, setFav] = React.useState(false);

  const productData = useFetchApi(`products/${id}`);
  const userUid = JSON.parse(localStorage.getItem('user')).uid;
  const favsData = useFetchApi(`users/${userUid}/${id}/favorites`);

  React.useEffect(() => {
    if (!productData.isLoading && !favsData.isLoading) {
      setProduct(productData.data[0]);
      if (favsData.data && !favsData.data.error) {
        const result = favsData.data.some((item) => {
          return item.id === parseInt(id, 10);
        });
        setFav(result);
      }
    }
  }, [id, productData, favsData]);

  const categoryData = useFetchApi(`categories/${product.category_id}`);

  React.useEffect(() => {
    if (!categoryData.isLoading) {
      setCategory(categoryData.data[0]);
    }
  }, [product, categoryData]);

  const similarProductData = useFetchApi(`products?category=${category.name}`);

  React.useEffect(() => {
    if (!similarProductData.isLoading) {
      setSimilarProduct(similarProductData.data);
    }
  }, [similarProductData]);

  const exploreCategoryHandler = () => {
    console.log('explore product category');
  };

  return (
    <>
      <div className="p-detail">
        {productData.isLoading ? (
          <Loader />
        ) : (
          <>
            {product.id ? (
              <ProductDetails
                userId={(isAuthenticated && auth.currentUser.uid) || 'Guest'}
                productId={product.id}
                imgSource={product.picture}
                ProductName={product.name}
                RemainingUnit={parseInt(product.stock_amount, 10)}
                Price={parseInt(product.price, 10)}
                productColor={product.color}
                productSize={product.size}
                isFavorite={fav}
              />
            ) : (
              <Page404Container />
            )}
          </>
        )}
      </div>
      <div className="similar-product">
        <h1>SIMILAR PRODUCT</h1>
        {similarProductData.isLoading ? (
          <Loader />
        ) : (
          <Carousel
            imageArray={similarProduct.map((item) => item.picture)}
            products={similarProductData.data}
          />
        )}
      </div>
      <div className="explore-btn">
        <Link to={`../category/${category.name}`}>
          <ButtonComponent
            title="EXPLORE THIS CATEGORY"
            onClick={exploreCategoryHandler}
            backgroundColor="gray"
          />
        </Link>
      </div>
      <div className="corner">
        <ButtonComponent2
          onClick={() => {
            window.location.href = '/';
          }}
          title="GO TO HOME"
        />
      </div>
    </>
  );
};
export default ProductPageContainer;
