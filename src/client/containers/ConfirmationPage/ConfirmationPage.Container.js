import React from 'react';
import ButtonComponent from '../../components/Button/Button.component';
import './ConfirmationPage.Style.css';
import { PropTypes } from 'prop-types';
import { useFirebase } from '../../firebase/FirebaseContext';

const ConfirmationPageContainer = ({ isAuthenticated, id }) => {
  const { auth } = useFirebase();
  return (
    <div className="confirmationPage">
      <div className="wrapper">
        <div>
          <h3>ORDER CONFIRMATION</h3>
        </div>
        <div className="wrapper-content">
          <p>
            THANK YOU FOR YOUR ORDER NO. <strong>{id}</strong>
          </p>
          <p>
            We have sent a receipt to the email:
            <strong> {isAuthenticated && `${auth.currentUser.email}`}</strong>
          </p>
        </div>
      </div>
      <div className="btn">
        <ButtonComponent
          title="KEEP SHOPPING"
          backgroundColor="blueviolet"
          onClick={() => {
            window.location.href = '/';
          }}
        />
      </div>
    </div>
  );
};
ConfirmationPageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
export default ConfirmationPageContainer;
