import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Purchases from '../../components/Purchases/Purchases.component.js';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './ProfilePage.Style.css';

const ProfilePageContainer = () => {
  // const user = {
  //   address: 'Vildkildevej 21',
  //   city: 'Hedehusene',
  //   zip: '2640',
  //   country: 'Denmark',
  // };
  // const { address, city, zip, country } = user;

  const [user, setUser] = React.useState([]);
  const [order, setOrder] = React.useState({});
  const { id } = useParams();
  const newItems = useFetchApi(`orders/${id}`);
  const { auth } = useFirebase();

  React.useEffect(() => {
    if (!newItems.isLoading) {
      setItems(newItems.data.items);
      setOrder(newItems.data.order);
    }
  }, [newItems]);
  const userInfo = useFetchApi(`users/${order.userId}`);

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
    }
  }, [userInfo, user]);

  return (
    <div>
      <h1>Profile page Container</h1>
      <div className="delivery-contact">
        <div className="contact">
          <ContactForm fullName={authuser.full_name} email={auth.user.email} />
          {/* <ContactForm fullName="Jon Doe" email="jdoe@gmail.com" /> */}
        </div>
        <div className="delivery">
          {userInfo.isLoading ? (
            <Loader />
          ) : (
            <DeliveryInfo editMode={false} vertDisplay={false} user={user} />
          )}
        </div>
        <div className="purchases">
          <Purchases orderId={id} date={order.date} />
          {/* <Purchases orderId="12398098" date="30/09/2021" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
