import React from 'react';
import './ProfilePage.Style.css';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import Purchases from '../../components/Purchases/Purchases.component.js';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { useFirebase } from '../../firebase/FirebaseContext';
import Loader from '../../components/Loader/Loader.component';
import DeliveryInfoV2 from '../../components/DeliveryInfo/DeliveryInfoV2.component';

const ProfilePageContainer = ({ isAuthenticated }) => {
  const { auth } = useFirebase();
  const id = JSON.parse(localStorage.getItem('user')).uid;
  const [user, setUser] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  const orderItems = useFetchApi(`orders/user/${id}`);
  React.useEffect(() => {
    if (!orderItems.isLoading) {
      if (!orderItems.data.error) {
        setOrders(orderItems.data);
      }
    }
  }, [orderItems]);
  const userInfo = useFetchApi(`users/${id}`);

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
      console.log(userInfo.data[0]);
    }
  }, [userInfo, user]);

  return (
    <div className="profilePage">
      <h1>MY ACCOUNT</h1>
      <div className="delivery-contact">
        <div className="contact">
          {auth ? (
            <ContactForm
              fullName={isAuthenticated && `${auth.currentUser.displayName}`}
              email={isAuthenticated && `${auth.currentUser.email}`}
            />
          ) : (
            <Loader />
          )}
        </div>
        <div className="delivery">
          {userInfo.isLoading ? (
            <Loader />
          ) : (
            <DeliveryInfoV2 editMode={true} vertDisplay={true} user={user} />
          )}
        </div>
      </div>
      <div className="purchases">
        {!orderItems.data.error ? (
          <Purchases orders={orders} />
        ) : (
          <h2>You don`t have any orders yet</h2>
        )}
      </div>
    </div>
  );
};

export default ProfilePageContainer;
