import React from 'react';
import './CategoryPage.Style.css';
import '../../components/menu/Menu.component';
import { Menu } from '../../components/menu/Menu.component';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const CategoryPageContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/categories/${id}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then((data) => {
        console.log(data[0].name);
        setProduct(data[0]);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  useEffect(() => {
    fetch(`/api/products?category=lamp`)
      .then((res) => {
        if (res.ok) {
          return res.json();
          console.log('Products');
        } else {
          throw new Error('Something went wrong!');
        }
      })
      .then((data) => {
        console.log(data);
        setCategory(data[0]);
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
