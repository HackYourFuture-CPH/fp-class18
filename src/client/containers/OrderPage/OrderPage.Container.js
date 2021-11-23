import React from 'react';
import ShoppingItem from '../..components/ShoppingItem/ShoppingItem.component';
import ContactForm from '../..components/ContactForm/ContactForm.component';
import DeliveryInformation from '../..components/ContentCard/DeliveryInformation/DeliveryInformation.component';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [purchase, setPurchase] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const { id } = useParams();
  const newPurchase = useFetchApi(`orders/${id}`);
  const userInfo = useFetchApi(`users/${purchase.user_id}`);
  console.log(newPurchase.data[0]);
  console.log(userInfo.data[0]);
  setPurchase(newPurchase.data[0]);
  setUser(userInfo);
  return (
    <div>
      <h1>Order page Container</h1>
      <div className="order-product-total">
        <div className="order-product">
          <div className="order">
            <div>ORDER ID: {id}</div>
            <div>ORDER STATUS: {purchase.orderStatus}</div>
          </div>
          <div className="product">
            <div className="picture-name-quantity">
              <div>
                {purchase.map((product) => (
                  <li>
                    <ShoppingItem
                      name={product.name}
                      image={product.picture}
                      quantity={product.stock_amount}
                      price={product.price}
                    />
                  </li>
                ))}{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="total">total Component</div>
      </div>
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
      </div>
    </div>
  );
};

export default OrderPageContainer;
