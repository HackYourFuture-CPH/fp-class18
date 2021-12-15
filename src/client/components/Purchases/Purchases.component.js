import React from 'react';
import PropTypes from 'prop-types';
import './Purchases.styles.css';

export default function Purchases({ orders }) {
  return (
    <div className="purchases">
      <div className="container">
        <h1 className="title">PURCHASES:</h1>
        {orders.map((order) => {
          return (
            <ul key={order.orderId}>
              <li> ORDERID:{order.id}</li>
              <li> DATE: {order.created_at}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
Purchases.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      orderId: PropTypes.number,
      date: PropTypes.string,
    }),
  ).isRequired,
};
