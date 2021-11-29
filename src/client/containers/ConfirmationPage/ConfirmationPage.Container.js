import React from 'react';
import ButtonComponent from '../../components/Button/Button.component';
import './ConfirmationPage.Style.css';
import PropTypes from 'prop-types';

const ConfirmationPageContainer = ({ id, email }) => {
  return (
    <>
      <div className="wrapper">
        <div>
          <h3>ORDER CONFIRMATION</h3>
        </div>
        <div className="wrapper-content">
          <p>
            THANK YOU FOR YOUR ORDER NO. <strong>{id}</strong>
          </p>
          <p>
            We have sent a receipt to the email: <strong>{email}</strong>
          </p>
        </div>
      </div>
      <div className="btn">
        <ButtonComponent title="KEEP SHOPPING" backgroundColor="blueviolet" />
      </div>
    </>
  );
};
ConfirmationPageContainer.propTypes = {
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

export default ConfirmationPageContainer;
