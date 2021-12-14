import React from 'react';
import PropTypes from 'prop-types';
import './Purchases.styles.css';
import { Link, BrowserRouter } from 'react-router-dom';

export default function Purchases({ orders }) {
  return (
    <div className="purchases">
      <div className="container">
        <h1 className="title">PURCHASES:</h1>
        {orders.length !== 0 ? (
          orders.map((order) => {
            return (
              <ul key={order.orderId}>
                <li>
                  <BrowserRouter>
                    <Link to={`/order/${order.id}`}> ORDERID:{order.id}</Link>
                  </BrowserRouter>
                </li>
                <li> STATUS: {order.status}</li>
                <li> DATE: {order.created_at}</li>
              </ul>
            );
          })
        ) : (
          <h2>You don`t have any orders yet</h2>
        )}
      </div>
    </div>
  );
}
Purchases.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.number,
      date: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};
