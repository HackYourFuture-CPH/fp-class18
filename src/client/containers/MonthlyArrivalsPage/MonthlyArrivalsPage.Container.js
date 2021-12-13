import React from 'react';
import './MonthlyArrivalsPage.Style.css';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';
import ButtonComponent2 from '../../components/ButtonV2/ButtonV2.component';

const MonthlyArrivalsPageContainer = ({ isAuthenticated }) => {
  const monthlyArrivals = useFetchApi('products?daysBeforeToday=30');
  const id =
    (isAuthenticated && JSON.parse(localStorage.getItem('user')).uid) || ' ';

  return (
    <div className="monthlyArrivalsPage">
      <h1>MONTHLY ARRIVALS</h1>
      <div className="list">
        {monthlyArrivals.isLoading ? (
          <Loader />
        ) : (
          monthlyArrivals.data.map((product) => (
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
