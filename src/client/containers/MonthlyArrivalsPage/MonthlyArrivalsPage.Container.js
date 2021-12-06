import React from 'react';
import './MonthlyArrivalsPage.Style.css';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';
import ButtonComponent2 from '../../components/ButtonV2/ButtonV2.component';
import { useShoppingCartContext } from '../../context/shoppingCart/shoppingCartContext';
import { useFirebase } from '../../firebase/FirebaseContext';

const MonthlyArrivalsPageContainer = () => {
  const monthlyArrivals = useFetchApi('products?daysBeforeToday=30');
  const { shoppingCart, changeProductQuantity } = useShoppingCartContext();
  const { auth } = useFirebase();
  const favorites = useFetchApi(`/users/${auth.currentUser.uid}/favorites`);

  return (
    <div>
      <h1>MONTHLY ARRIVALS</h1>
      <div className="list">
        {monthlyArrivals.isLoading ? (
          <Loader />
        ) : (
          monthlyArrivals.data.map((product) => (
            <ProductDetails
              userId={auth.currentUser.uid}
              key={product.id}
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
              // eslint-disable-next-line eqeqeq
              isFavorite={favorites.data.some((p) => p.id == product.id)}
              imageAlt={product.name}
            />
          ))
        )}
      </div>
      <div className="corner">
        <ButtonComponent2
          onClick={() => {
            window.location.href = '/';
          }}
          title="GO TO HOME"
        />
      </div>
    </div>
  );
};

export default MonthlyArrivalsPageContainer;
