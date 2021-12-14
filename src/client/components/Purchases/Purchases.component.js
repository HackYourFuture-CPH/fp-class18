import React from 'react';
import PropTypes from 'prop-types';
import './Purchases.styles.css';
import { Link } from 'react-router-dom';

export default function Purchases({ orders }) {
  return (
    <div className="purchases">
      <div className="container">
        <h1 className="title">PURCHASES:</h1>
        {orders.map((order) => {
          return (
            <ul key={order.orderId}>
              <Link to={`/order/${order.id}`}>
                <li> ORDERID:{order.id}</li>
              </Link>
              <li> STATUS: {order.status}</li>
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
