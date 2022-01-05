import React from 'react';
import { useHistory } from "react-router-dom";
import './MonthlyArrivalsPage.Style.css';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader/Loader.component';
import ButtonComponent2 from '../../components/ButtonV2/ButtonV2.component';

const MonthlyArrivalsPageContainer = ({ isAuthenticated }) => {
  // Monthly arrival removed from frontend.
  // Because the database will not update anymore with new products.
  // const monthlyArrivals = useFetchApi('products?daysBeforeToday=30');
  const monthlyArrivals = useFetchApi('products');

  const id =
    (isAuthenticated && JSON.parse(localStorage.getItem('user')).uid) || ' ';
  const history = useHistory();
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
              isFavorite={true}
              imageAlt={product.name}
              isAuthenticated={isAuthenticated}
            />
          ))
        )}
      </div>
      <div className="corner">
        <ButtonComponent2
          onClick={() => {
            history.push('/')
          }}
          title="GO TO HOME"
        />
      </div>
    </div>
  );
};

export default MonthlyArrivalsPageContainer;
