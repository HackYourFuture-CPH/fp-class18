import React from 'react';
import Paypal from '../../components/Paypal/Paypal.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import Loader from '../../components/Loader/Loader.component';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import { useParams, useHistory } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';
import { PropTypes } from 'prop-types';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [items, setItems] = React.useState([]);
  const [order, setOrder] = React.useState({});
  const [user, setUser] = React.useState({});
  const [total, setTotal] = React.useState(0);
  const { id: orderId } = useParams();
  const history = useHistory();

  const currentUser = JSON.parse(localStorage.getItem('user'));
  const newItems = useFetchApi(`orders/${orderId}`);

  React.useEffect(() => {
    if (!newItems.isLoading) {
      if (currentUser.uid !== newItems.data.order.userId) {
        history.push('/order-not-found');
      }
      setItems(newItems.data.items);
      setOrder(newItems.data.order);
    }
  }, [newItems, order, currentUser, history]);

  const userInfo = useFetchApi(`users/${currentUser.uid}`);
  React.useEffect(() => {
    if (!userInfo.isLoading && !newItems.isLoading) {
      setUser(userInfo.data[0]);
    }
  }, [userInfo, user, newItems.isLoading]);

  React.useEffect(() => {
    let cost = 0;
    const subTotal = items.map((item) => item.price * item.quantity);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < subTotal.length; i++) {
      cost += subTotal[i];
    }
    setTotal(cost);
  }, [items]);

  const handlePaymentSuccess = () => {
    fetch(`api/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: orderId, status: 'payed' }),
    })
      .then(() => {
        history.push(`/order-confirmation/${orderId}`);
      })
      .catch((e) => {
        throw new Error('Could not change order status', e.message);
      });
  };

  function renderDependingOnStatus() {
    switch (order.orderStatus) {
      case 'confirmed':
        return (
          <Paypal
            orderId={orderId}
            totalSum={total}
            userName={currentUser.displayName}
            onSuccess={handlePaymentSuccess}
            onError={() => history.push('/payment-error')}
          />
        );
      case 'created':
        return <div>Order was not confirmed</div>;
      case 'payed':
        return <div>Order already payed</div>;
      default:
        return <div>Order status {order.orderStatus}</div>;
    }
  }
  return (
    <div className="orderpage">
      <div className="header">
        <h1>ORDER SUMMARY</h1>
      </div>
      <div className="order-page-container">
        <div className="top">
          <div className="left">
            <div className="orderInfo">
              <div className="orderId">ORDER ID: {orderId}</div>
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
                      price={Number(product.price)}
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
            <div className="payment-btn">{renderDependingOnStatus()}</div>
          </div>
        </div>
        <div className="botton">
          <div className="delivery">
            {userInfo.isLoading || user === undefined ? (
              <Loader />
            ) : (
              <DeliveryInfo editMode={false} vertDisplay={true} user={user} />
            )}
          </div>
          <div className="contact">
            <ContactForm
              fullName={currentUser.displayName}
              email={currentUser.email}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPageContainer;
