import React from 'react';
import Loader from '../../components/Loader/index';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import ButtonComponent from '../../components/Button/Button.component';
import { useParams, useHistory } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [purchase, setPurchase] = React.useState({});
  const [user, setUser] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const { id } = useParams();
  const history = useHistory();

  const newPurchase = useFetchApi(`orders/${id}`);

  React.useEffect(() => {
    setPurchase(newPurchase);
  }, [newPurchase]);

  const { order, items } = purchase.data;

  const userInfo = useFetchApi(`users/${order.userId}`);

  React.useEffect(() => {
    setUser(userInfo.data[0]);
  }, [userInfo, user]);

  const { full_name: fullName, email } = user;

  React.useEffect(() => {
    let cost = 0;
    const subTotal = items.map((item) => item.price * item.quantity);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < subTotal.length; i++) {
      cost += subTotal[i];
    }
    setTotal(cost);
  }, [items]);

  return (
    <div>
      <h1>ORDER SUMMARY</h1>
      <div className="order-page-container">
        <div className="order-product">
          <div className="order">
            <div>ORDER ID: {id}</div>
            <div>ORDER STATUS: {order.orderStatus}</div>
          </div>
          <div className="product">
            <div className="picture-name-quantity">
              <div>
                {purchase.isLoading ? (
                  <Loader />
                ) : (
                  items.map((product) => (
                    <li>
                      <ShoppingItem
                        name={product.name}
                        image={product.picture}
                        quantity={product.stock_amount}
                        price={product.price}
                      />
                    </li>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="total-payment">
          <div className="total">
            <TotalPrice subTotal={total} />
          </div>
          <div className="payment-btn">
            <ButtonComponent
              title="PAYMENT"
              backgroundColor="blueviolet"
              onClick={() => history.push(`paymentSystem/${id}`)}
            />
          </div>
        </div>
      </div>
      <div className="delivery-contact">
        <div className="delivery">
          {userInfo.isLoading ? (
            <Loader />
          ) : (
            <DeliveryInfo editMode={true} vertDisplay={false} user={user} />
          )}
        </div>
        <div className="contact">
          <ContactForm fullName={fullName} email={email} />
        </div>
      </div>
    </div>
  );
};

export default OrderPageContainer;
