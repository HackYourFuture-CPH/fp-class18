/* eslint-disable no-console */
/* eslint-disable radix */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Carousel from '../../components/Carousel/Carousel.component';
import ButtonComponent from '../../components/Button/Button.component';
import './ProductPage.Style.css';

const ProductPageContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState({});
  const [similarProduct, setSimilarProduct] = React.useState([]);

  React.useEffect(() => {
    fetch(`api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id]);

  React.useEffect(() => {
    fetch(`api/categories/${product.category_id}`)
      .then((res) => res.json())
      .then((category) => {
        console.log(category);

        fetch(`api/products?category=${category[0].name}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const images = data.map((item) => item.picture);
            setSimilarProduct(images);
          })
          .catch((e) => console.log(e));
      });
  }, [product]);

  const addToCartHandler = () => {
    console.log('add to cart');
    // if user is login, this product will add to cart but this functionality is not working now
  };
  const exploreCategoryHandler = () => {
    console.log('explore product category');
  };
  return (
    <div>
      <div>
        <div className="p-detail">
          <ProductDetails
            imgSource={product.picture}
            ProductName={product.name}
            RemainingUnit={parseInt(product.stock_amount)}
            Price={parseInt(product.price)}
            productColor={product.color}
            productSize={product.size}
            onClick={addToCartHandler}
          />
        </div>
        <div className="similar-product">
          <h1>SIMILAR PRODUCT</h1>
          <Carousel imageArray={similarProduct} />
        </div>
        <div className="explore-btn">
          <ButtonComponent
            title="EXPLORE THIS CATEGORY"
            onClick={exploreCategoryHandler}
            backgroundColor="gray"
          />
        </div>
      </div>
    </div>
  );
};
export default ProductPageContainer;
