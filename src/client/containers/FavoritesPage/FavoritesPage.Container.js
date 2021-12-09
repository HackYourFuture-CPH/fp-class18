/* eslint-disable no-nested-ternary */
import { useParams } from 'react-router-dom';
import React from 'react';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './FavoritesPage.Style.css';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';
import { useShoppingCartContext } from '../../context/shoppingCart/shoppingCartContext';
import Page404Container from '../404Page/404Page.Container';
import { useFirebase } from '../../firebase/FirebaseContext';

const FavoritesPageContainer = (isAuthenticated) => {
  const { auth } = useFirebase();
  const { id } = useParams();
  const favorites = useFetchApi(
    `/users/${id || localStorage.getItem('user').uid}/favorites`,
  );
  const { shoppingCart, changeProductQuantity } = useShoppingCartContext();

  return (
    <div className="favoritesPage">
      <h1 className="h1-favorites">MY FAVORITES</h1>
      <div className="list">
        {favorites.isLoading ? (
          <Loader />
        ) : !favorites.data.error &&
          (isAuthenticated && auth.currentUser.uid) === id ? (
          favorites.data.map((product) => {
            return (
              <ProductDetails
                key={product.id}
                userId={id || 'Guest'}
                productId={product.id}
                imgSource={product.picture}
                ProductName={product.name}
                RemainingUnit={product.stock_amount}
                Price={product.price}
                productColor={product.color}
                productSize={product.size}
                onClick={() => {
                  if (product) {
                    // TODO: change the quantity to be the real one from the NumberInput instead of a randomly set one
                    const newQuantity = shoppingCart[product.id]
                      ? shoppingCart[product.id] + 1
                      : 1;
                    changeProductQuantity(product, newQuantity);
                  }
                }}
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
            <Page404Container />
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesPageContainer;
