import React from 'react';
import './CategoryPage.Style.css';
import ProductView from '../../components/ProductView/ProductView.component';
import { useParams } from 'react-router-dom';

const CategoryPageContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { name } = useParams();
  React.useEffect(() => {
    fetch(`api/products?category=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [name]);

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
