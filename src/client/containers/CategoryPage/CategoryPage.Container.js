import React from 'react';
import './CategoryPage.Style.css';
import { Menu } from '../../components/menu/Menu.component';
import ProductView from '../../components/ProductView/ProductView.component';
import { useParams } from 'react-router-dom';

const CategoryPageContainer = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  let { name } = useParams();
  React.useEffect(() => {
    console.log(`id : ${name}`);
    fetch(`api/products?category=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [name]);
  console.log(products);
  return (
    <div>
      <Menu isAuthenticated={true} />
      <h1>Category page Container</h1>
      {/* {products.map(item => console.log(item.picture))} */}
      <ProductView
        products={products}
        productsPerPage={8}
        categoriesList={[]}
      />
    </div>
  );
};

export default CategoryPageContainer;
