import React from 'react';
import './MonthlyArrivalsPage.Style.css';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { ProductDetails } from '../../components/ProductDetails/ProductDetails.component';
import Loader from '../../components/Loader';

const MonthlyArrivalsPageContainer = () => {
  const monthlyArrivals = useFetchApi('products?daysBeforeToday=30');

  return (
    <div>
      <h1>MONTHLY ARRIVALS</h1>
      <div className="list">
        {monthlyArrivals.isLoading ? (
          <Loader />
        ) : (
          monthlyArrivals.data.map((product) => (
            <ProductDetails
              key={product.id}
              imgSource={product.picture}
              ProductName={product.name}
              RemainingUnit={product.stock_amount}
              Price={product.price}
              productColor={product.color}
              productSize={product.size}
              onClick={() => console.log(product)}
              isFavorite={true}
              imageAlt={product.name}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MonthlyArrivalsPageContainer;
