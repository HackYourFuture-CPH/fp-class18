import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Purchases from '../../components/Purchases/Purchases.component.js';
import './Profile.styles.css';

export const Profile = () => {
  const user = {
    address: 'Vildkildevej 21',
    city: 'Hedehusene',
    zip: '2640',
    country: 'Denmark',
  };

  return (
    <div>
      <h1>Profile page Component</h1>
      <div className="delivery-contact">
        <div className="contact">
          <ContactForm fullName="Jon Doe" email="jdoe@gmail.com" />
        </div>
        <div className="delivery">
          <DeliveryInfo user={user} editMode={true} vertDisplay={true} />
        </div>
        <div className="form">
          <Purchases orderId="12398098" date="30/09/2021" />
        </div>
      </div>
    </div>
  );
};
