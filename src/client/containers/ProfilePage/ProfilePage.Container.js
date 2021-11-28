import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInformation from '../../components/DeliveryInfo/DeliveryInfo.component';
import Purchases from '../../components/Purchases/Purchases.component.js';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './ProfilePage.Style.css';

const ProfilePageContainer = () => {
  const [purchase, setPurchase] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const { id } = useParams();

  const newPurchase = useFetchApi(`orders/${id}`);
  const userInfo = useFetchApi(`users/${purchase.user_id}`);
  setPurchase(newPurchase.data[0]);
  setUser(userInfo);

  console.log(newPurchase.data[0]);
  console.log(userInfo.data[0]);
  return (
    <div>
      <h1>Profile page Container</h1>
      <div className="delivery-contact">
        <div className="delivery">
          <DeliveryInformation
            address={user.address}
            zipcode={user.zipcode}
            city={user.city}
            country={user.country}
          />{' '}
        </div>
        <div className="contact">
          <ContactForm fullName={user.full_name} email={user.email} />{' '}
        </div>
        <div className="purchases">
          <div>ORDER ID: {id}</div>
          <div>DATE: {purchase.date}</div>
          <Purchases />{' '}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
