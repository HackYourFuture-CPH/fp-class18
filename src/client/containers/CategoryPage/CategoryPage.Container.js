import React from 'react';
import './CategoryPage.Style.css';
import '../../components/menu/Menu.component';
import { Menu } from '../../components/menu/Menu.component';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const CategoryPageContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then((data) => {
        console.log(data);
        setProduct(data[0]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  return (
    <div>
      <Menu isAuthenticated={true} />
      <h1>Category page Container</h1>
    </div>
  );
};

export default CategoryPageContainer;
