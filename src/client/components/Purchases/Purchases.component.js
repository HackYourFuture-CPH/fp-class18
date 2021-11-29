import React from 'react';
import PropTypes from 'prop-types';
import './Purchases.styles.css';

export default function Purchases({ orderId, date }) {
  return (
    <form>
      <label className="title">PURCHASES:</label>
      <label className="orderid">ORDER ID: {orderId}</label>
      <label className="date">DATE: {date}</label>
    </form>
  );
}

Purchases.defaultProps = {
  orderId: '',
  date: '',
};

Purchases.propTypes = {
  orderId: PropTypes.string,
  date: PropTypes.string,
};
