import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm.component.js';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Purchases from '../../components/Purchases/Purchases.component.js';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './ProfilePage.Style.css';
import { useFirebase } from '../../firebase/FirebaseContext';

const ProfilePageContainer = () => {
  // const user = {
  //   address: 'Vildkildevej 21',
  //   city: 'Hedehusene',
  //   zip: '2640',
  //   country: 'Denmark',
  // };
  // const { address, city, zip, country } = user;

  // const [user, setUser] = React.useState([]);
  // const [order, setOrder] = React.useState({});
  // const orderItems = useFetchApi(`orders`);
  // console.log(orderItems);
  const { auth } = useFirebase();
  console.log(auth);

  // React.useEffect(() => {
  //   if (!orderItems.isLoading) {
  //     setItems(orderItems.data.items);
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
          <ContactForm
            fullName={auth.currentUser.displayName}
            email={auth.currentUser.email}
          />
        </div>
        <div className="delivery">
          {userInfo.isLoading ? (
            <Loader />
          ) : (
            <DeliveryInfo
              editMode={false}
              vertDisplay={false}
              user={auth.currentUser}
            />
          )}
        </div>
        <div className="purchases">
          <Purchases orderId={orderID.id} date={orderDate.date} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePageContainer;
