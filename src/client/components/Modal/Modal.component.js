import React from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.css';
import addedCart from '../../assets/images/addedCart.png';

export default function ModalComponent({ show, handleLink, handleCloseModal }) {
  if (show) {
    return (
      <div className="modalView">
        <div className="modalVisible">
          <div className="span">
            <span
              className="btn-close"
              onChange={handleCloseModal}
              title="Click to close this dialog"
            >
              &times;
            </span>
          </div>

          <div>
            <h2>ADDED TO THE CART</h2>
            <img src={addedCart} alt="success" width="20%" />
          </div>
          <div>
            <button type="button" onClick={handleLink} className="btnCart">
              GO TO CART
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleCloseModal}
              className="btnCart btnShopping"
            >
              KEEP SHOPPING
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

ModalComponent.propTypes = {
  show: PropTypes.bool.isRequired,
  handleLink: PropTypes.func,
  handleCloseModal: PropTypes.func,
};

ModalComponent.defaultProps = {
  handleLink: () => {
    return 'clicked';
  },
  handleCloseModal: () => {
    return 'clicked';
  },
};
