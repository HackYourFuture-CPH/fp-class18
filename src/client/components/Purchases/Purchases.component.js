import React from 'react';
import PropTypes from 'prop-types';
import './Purchases.styles.css';

export default function Purchases({ orderId, date }) {
  return (
    <div className="infoBox">
      <div className="wrapper">
        <form className="form">
          <label className="title">PURCHASES:</label>
          <label className="orderid">ORDER ID: {orderId}</label>
          <label className="date">DATE: {date}</label>
        </form>
      </div>
    </div>
  );
}

Purchases.defaultProps = {
  orderId: '',
  date: '',
};

Purchases.propTypes = {
  orderId: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};
