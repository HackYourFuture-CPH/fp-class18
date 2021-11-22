import React from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.css';
import { action } from '@storybook/addon-actions';
import addedCart from '../../assets/images/addedCart.png';

export default function ModalComponent({ show, handleLink, handleCloseModal }) {
  if (show) {
    return (
      <div
        style={{
          zIndex: 999999,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.8)',
        }}
      >
        <div
          style={{
            background: '#fff',
            width: '30%',
            padding: '1em',
            margin: '10% auto',
          }}
        >
          <div className="card-panel teal lighten-2 ">
            <h2>ADDED TO THE CART</h2>
            <img src={addedCart} alt="success" width="20%" />
          </div>
          <div>
            <button onClick={handleLink} className="btnCart">
              GO TO CART
            </button>
          </div>
          <div>
            <button onClick={handleCloseModal} className="btnCart btnShopping">
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
  show: false,
  handleLink: () => {
    return 'clicked';
  },
  handleCloseModal: () => {
    return 'clicked';
  },
};