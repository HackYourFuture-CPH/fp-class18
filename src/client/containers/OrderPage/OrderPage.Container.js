import React from 'react';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [purchase, setPurchase] = React.useState([]);
  const [user, setUser] = React.useState([]);
  const { id } = useParams();

  const newPurchase = useFetchApi(`orders/${id}`);
  const userInfo = useFetchApi(`users/${purchase.user_id}`);
  setPurchase(newPurchase);
  setUser(userInfo);
  const { address, zipcode, city, country, full_name: fullName, email } = user;

  console.log(newPurchase);
  console.log(userInfo);

  return (
    <div>
      <h1>ORDER SUMMARY</h1>
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
        <div className="total">
          <TotalPrice />
        </div>
      </div>
      <div className="delivery-contact">
        <div className="delivery">
          <DeliveryInfo
            address={address}
            zipcode={zipcode}
            city={city}
            country={country}
          />{' '}
        </div>
        <div className="contact">
          <ContactForm fullName={fullName} email={email} />
        </div>
      </div>
    </div>
  );
};

export default OrderPageContainer;
