import React from 'react';
import { ContactForm } from '../..components/ContactForm/ContactForm.component.js';
import DeliveryInformation from '../..components/ContentCard/DeliveryInformation/DeliveryInformation.component';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './ProfilePage.Style.css';

const ProfilePageContainer = () => {
  const [user, setUser] = React.useState([]);
  const userInfo = useFetchApi(`users/${purchase.user_id}`);
  setUser(userInfo);
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
          <Purchases />{' '}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
