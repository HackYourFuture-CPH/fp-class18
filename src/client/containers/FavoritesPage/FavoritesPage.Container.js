import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import './FavoritesPage.Style.css';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';

const FavoritesPageContainer = () => {
  const [favorites, setFavorites] = React.useState([]);

  const { id } = useParams();
  React.useEffect(() => {
    fetch(`api/users/${id}/favorites`)
      .then((res) => res.json())
      .then((data) => {
        setFavorites(data);
      })
      .catch(() => {});
  }, [id]);
  console.log('render favorite page');
  return (
    <div>
      <h1>Favorites page</h1>
      <div className="favorite-container">
        {favorites.map((product) => {
          const {
            id,
            picture,
            name,
            stock_amount,
            price,
            color,
            size,
          } = product;

          return (
            <ProductDetails
              key={id}
              imgSource={picture}
              ProductName={name}
              RemainingUnit={stock_amount}
              Price={price}
              productColor={color}
              productSize={size}
              onClick={() => console.log(product)}
              isFavorite={true}
              imageAlt={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPageContainer;
