import React from 'react';
import PropTypes from 'prop-types';
import './Modal.styles.css';

export default function Modal2Component({ show, handleCloseModal }) {
  if (show) {
    return (
      <div className="modalView">
        <div className="modalVisible">
          <div className="span">
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              title="Click to close this dialog"
            >
              &times;
            </button>
          </div>
          <div className="warning"> </div>
          <div>
            <h2 className="warningText">PLEASE FILL DELIVERY INFO</h2>
          </div>

          <div>
            <button
              type="button"
              onClick={handleCloseModal}
              className="btnCart"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

Modal2Component.propTypes = {
  show: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func,
};

Modal2Component.defaultProps = {
  handleCloseModal: () => {
    return 'clicked';
  },
};
