import { useParams } from 'react-router-dom';
import React from 'react';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './FavoritesPage.Style.css';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';

const FavoritesPageContainer = () => {
  const { id } = useParams();
  const favorites = useFetchApi(`/users/${id}/favorites`);
  return (
    <div>
      <h1>Favorites page</h1>
      <div className="favorite-container">
        {favorites.isLoading ? (
          <Loader />
        ) : favorites.data.error ? (
          <div className="favorites-error">
            You don`t have any favorite products yet
          </div>
        ) : (
          favorites.data.map((product) => {
            return (
              <ProductDetails
                key={product.id}
                imgSource={product.picture}
                ProductName={product.name}
                RemainingUnit={product.stock_amount}
                Price={product.price}
                productColor={product.color}
                productSize={product.size}
                onClick={() => {}}
                isFavorite={false}
                imageAlt={product.name}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default FavoritesPageContainer;
