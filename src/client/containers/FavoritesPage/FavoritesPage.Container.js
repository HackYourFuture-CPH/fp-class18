/* eslint-disable no-nested-ternary */
import React from 'react';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './FavoritesPage.Style.css';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';

const FavoritesPageContainer = () => {
  const id = JSON.parse(localStorage.getItem('user')).uid;
  const favorites = useFetchApi(`users/${id}/favorites`);

  return (
    <div className="favoritesPage">
      <h1 className="h1-favorites">MY FAVORITES</h1>
      <div className="list">
        {favorites.isLoading ? (
          <Loader />
        ) : !favorites.data.error ? (
          favorites.data.map((product) => {
            return (
              <ProductDetails
                key={product.id}
                userId={id}
                productId={product.id}
                imgSource={product.picture}
                ProductName={product.name}
                RemainingUnit={product.stock_amount}
                Price={product.price}
                productColor={product.color}
                productSize={product.size}
                isFavorite={false}
                imageAlt={product.name}
              />
            );
          })
        ) : (
          <>
            <div className="favorites-error">
              <h1>You don`t have any favorite products yet</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPageContainer;
