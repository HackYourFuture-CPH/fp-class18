import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Purchases from '../../components/Purchases/Purchases.component.js';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './ProfilePage.Style.css';

const ProfilePageContainer = () => {
  const user = {
    address: 'Vildkildevej 21',
    city: 'Hedehusene',
    zip: '2640',
    country: 'Denmark',
  };
  // const { address, city, zip, country } = user;
  // const [purchase, setPurchase] = React.useState([]);
  // const [user, setUser] = React.useState([]);
  // const { id } = useParams();

  // const newPurchase = useFetchApi(`orders/${id}`);
  // const userInfo = useFetchApi(`users/${purchase.user_id}`);
  // setPurchase(newPurchase.data[0]);
  // setUser(userInfo);

  // console.log(newPurchase.data[0]);
  // console.log(userInfo.data[0]);
  return (
    <div>
      <h1>Profile page Container</h1>
      <div className="delivery-contact">
        <div className="contact">
          {/* <ContactForm fullName={user.full_name} email={user.email} /> */}
          <ContactForm fullName="Jon Doe" email="jdoe@gmail.com" />
        </div>
        <div className="delivery">
          {/*<DeliveryInformation
            address={address}
            zip={zipcode}
            city={city}
            country={country}
          />*/}
          <DeliveryInfo user={user} editMode={true} vertDisplay={true} />
        </div>
        <div className="purchases">
          {/* <div>ORDER ID: {id}</div>
          <div>DATE: {purchase.date}</div> */}
          <Purchases orderId="12398098" date="30/09/2021" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
