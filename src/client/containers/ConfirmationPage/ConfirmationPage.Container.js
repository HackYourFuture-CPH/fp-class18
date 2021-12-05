import React from 'react';
import ButtonComponent from '../../components/Button/Button.component';
import './ConfirmationPage.Style.css';
import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { useFirebase } from '../../firebase/FirebaseContext';
import LandingPageContainer from '../LandingPage/LandingPage.Container';

const ConfirmationPageContainer = ({ isAuthenticated }) => {
  const { id } = useParams();
  const { auth } = useFirebase();
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
    </>
  );
};
ConfirmationPageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
export default ConfirmationPageContainer;
