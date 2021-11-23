import React from 'react';
import PropTypes from 'prop-types';
import './TotalPriceCard.styles.css';

const TotalPrice = ({ quantity, price }) => {
  const subTotal = quantity * price;
  const deliveryCharge = subTotal >= 1000 ? 0 : 49.99;
  const grandTotal = subTotal + deliveryCharge;
  return (
    <>
      <aside className="wrapper">
        <h3>Total</h3>
        <div className="wrapper-content">
          <div className="row">
            <div>SubTotal:</div>
            <div className="text-right">{subTotal.toFixed(2)} DKK</div>
          </div>
          <div className="row">
            <div>Delivery Charge:</div>
            <div className="text-right">{deliveryCharge.toFixed(2)} DKK</div>
          </div>
          <hr />
          <div className="row">
            <div>
              <strong>Grand Total:</strong>
            </div>
            <div className="text-right">
              <strong>{grandTotal.toFixed(2)} DKK</strong>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
TotalPrice.propTypes = {
  quantity: PropTypes.number,
  price: PropTypes.number,
};

TotalPrice.defaultProps = {
  quantity: 1,
  price: 100,
};
export default TotalPrice;
