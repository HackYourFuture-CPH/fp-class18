import React from 'react';
import PropTypes from 'prop-types';
import './TotalPriceCard.styles.css';

const TotalPrice = ({ subTotal }) => {
  const delivering = subTotal >= 1000 ? 0 : 49.99;
  const grandTotal = subTotal > 0 ? subTotal + delivering : 0;
  return (
    <>
      <aside className="wrapper-total-price">
        <h3>Total</h3>
        <div className="wrapper-content-total-price">
          <div className="row">
            <div className='label'>Subtotal</div>
            <div>{subTotal.toFixed(2)} DKK</div>
          </div>
          <div className="row">
            <div className='label'>Delivering</div>
            <div>{delivering.toFixed(2)} DKK</div>
          </div>
          <hr className="border" />
          <div className="total-amount">
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
