import React from 'react';
import ButtonComponent from '../../components/Button/Button.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Loader from '../../components/Loader/Loader.component';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import { useParams, useHistory } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { useFirebase } from '../../firebase/FirebaseContext';
import { PropTypes } from 'prop-types';
import './OrderPage.Style.css';

const OrderPageContainer = ({ isAuthenticated }) => {
  const [items, setItems] = React.useState([]);
  const [order, setOrder] = React.useState({});
  const [user, setUser] = React.useState({});
  const [total, setTotal] = React.useState(0);
  const { id } = useParams();
  const history = useHistory();
  const { auth } = useFirebase();

  const newItems = useFetchApi(`orders/${id}`);

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
      <div className="header">
        <h1>ORDER SUMMARY</h1>
      </div>
      <div className="order-page-container">
        <div className="top">
          <div className="left">
            <div className="orderInfo">
              <div className="orderId">ORDER ID: {id}</div>
              <div className="orderStatus">
                ORDER STATUS: {order.orderStatus}
              </div>
            </div>
            <div className="product">
              {newItems.isLoading ? (
                <Loader />
              ) : (
                items.map((product) => (
                  <li key={product.productId}>
                    <ShoppingItem
                      productName={product.name}
                      productImg={product.picture}
                      quantity={product.stock_amount}
                      price={product.price}
                      initValue={product.quantity}
                      isDisable={true}
                    />
                  </li>
                ))
              )}
            </div>
          </div>
          <div className="right">
            <div className="total">
              <TotalPrice subTotal={total} />
            </div>
            <div className="payment-btn">
              <ButtonComponent
                title="PAYMENT"
                backgroundColor="blueviolet"
                onClick={() => history.push(`payment/${id}`)}
              />
            </div>
          </div>
        </div>
        <div className="botton">
          <div className="delivery">
            {userInfo.isLoading ? (
              <Loader />
            ) : (
              <DeliveryInfo editMode={false} vertDisplay={true} user={user} />
            )}
          </div>
          <div className="contact">
            <ContactForm
              fullName={isAuthenticated && `${auth.currentUser.displayName}`}
              email={isAuthenticated && `${auth.currentUser.email}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

OrderPageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default OrderPageContainer;
