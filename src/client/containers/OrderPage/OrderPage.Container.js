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
  const [items, setItems] = React.useState({});
  const [order, setOrder] = React.useState({});
  const [user, setUser] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const { id } = useParams();
  const history = useHistory();

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
                {newItems.isLoading ? (
                  <Loader />
                ) : (
                  items.map((product) => (
                    <li>
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
          <ContactForm fullName={user.full_name} email={user.email} />
        </div>
      </div>
    </div>
  );
};

export default OrderPageContainer;
