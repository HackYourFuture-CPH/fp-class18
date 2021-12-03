import React from 'react';
import './ProfilePage.Style.css';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
// import Purchases from '../../components/Purchases/Purchases.component.js';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { useFirebase } from '../../firebase/FirebaseContext';
import Loader from '../../components/Loader/Loader.component';

const ProfilePageContainer = ({ isAuthenticated }) => {
  const { auth } = useFirebase();
  console.log(auth);
  // const [user, setUser] = React.useState([]);
  // const [items, setItems] = React.useState([]);
  // const [order, setOrder] = React.useState({});
  // const orderItems = useFetchApi(`orders`);
  // console.log(orderItems);
  // React.useEffect(() => {
  //   if (!orderItems.isLoading) {
  //     // setItems(orderItems.data.items);
  //     setOrder(orderItems.data.order);
  //   }
  // }, [orderItems]);
  // const userInfo = useFetchApi(`users/${order.userId}`);

  // React.useEffect(() => {
  //   if (!userInfo.isLoading) {
  //     setUser(userInfo.data[0]);
  //   }
  // }, [userInfo, user]);

  return (
    <div>
      <h1>Profile page Container</h1>
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
        {/* <div className="delivery">
        {userInfo.isLoading ? (
          <Loader />
        ) : (
          <DeliveryInfo
            editMode={false}
            vertDisplay={false}
            user={isAuthenticated && `${auth.currentUser}`}
          />
        )}
      </div> */}
        {/* <div className="purchases">
        <Purchases orderId={orderID.id} date={orderDate.date} />
      </div> */}
      </div>
    </div>
  );
};

export default ProfilePageContainer;
