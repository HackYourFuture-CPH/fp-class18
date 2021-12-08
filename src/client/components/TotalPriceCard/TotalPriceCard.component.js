import React from 'react';
import PropTypes from 'prop-types';
import './TotalPriceCard.styles.css';

const TotalPrice = ({ subTotal }) => {
  const delivering = subTotal === 0 || subTotal >= 1000 ? 0 : 49.99;
  const grandTotal = subTotal > 0 ? subTotal + delivering : 0;
  return (
    <>
      <aside className="wrapper">
        <h3>Total</h3>
        <div className="wrapper-content">
          <div className="row">
            <div>Subtotal</div>
            <div className="text-right">{subTotal.toFixed(2)} DKK</div>
          </div>
          <div className="row">
            <div>Delivering</div>
            <div className="text-right">{delivering.toFixed(2)} DKK</div>
          </div>
          <hr className="line" />
          <div className="text-right">
            <strong>{grandTotal.toFixed(2)} DKK</strong>
          </div>
        </div>
      </aside>
    </>
  );
};
TotalPrice.propTypes = {
  subTotal: PropTypes.number.isRequired,
};

export default TotalPrice;
