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
  const [user, setUser] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  const orderItems = useFetchApi(`orders/user/EVJOWMzhWTYdqNGkyaBnn3LpINl2`);
  React.useEffect(() => {
    if (!orderItems.isLoading) {
      // setItems(orderItems.data.items);
      setOrders(orderItems.data);
    }
  }, [orderItems]);
  const userInfo = useFetchApi(
    isAuthenticated && `users/${auth.currentUser.uid}`,
  );

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
    }
  }, [userInfo, user]);

  return (
    <div>
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
        <Purchases orders={orders} />
      </div>
    </div>
  );
};

export default ProfilePageContainer;
