import React from 'react';
import './CartPage.Style.css';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/index';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import ButtonComponent from '../../components/Button/Button.component';
import { useFetchApi } from '../../hooks/UseFetchApi';

const CartPageContainer = () => {
  const [cartItem, setCartItem] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [userId, setUserId] = React.useState('');

  const [total, setTotal] = React.useState(0);

  const [itemCost, setItemCost] = React.useState([]);

  const { id } = useParams();

  const orderData = useFetchApi(`orders/${id}`);

  React.useEffect(() => {
    let totalCost = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < itemCost.length; i++) {
      totalCost += itemCost[i];
    }
    setTotal(totalCost);
  }, [itemCost]);

  const getItemCost = (index, value) => {
    itemCost[index] = value;
    const newItemCost = [...itemCost];
    setItemCost(newItemCost);
  };

  React.useEffect(() => {
    if (!orderData.isLoading) {
      setCartItem(orderData.data.items);
      setUserId(orderData.data.order.userId);
    }
  }, [orderData]);

  const userInfo = useFetchApi(`users/${userId}`);

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  return (
    <div>
      <h1>SHOPPING CART</h1>
      <div className="main">
        <div className="left">
          <div className="item-list">
            {orderData.isLoading ? (
              <Loader />
            ) : (
              cartItem.map((item, index) => {
                return (
                  <ShoppingItem
                    productName={item.name}
                    quantity={item.stock_amount}
                    price={item.price}
                    productImg={item.picture}
                    initValue={item.quantity}
                    getCost={(value) => {
                      getItemCost(index, value);
                    }}
                  />
                );
              })
            )}
          </div>
          <div className="delivery-info">
            {userInfo.isLoading ? (
              <Loader />
            ) : (
              <DeliveryInfo editMode={true} vertDisplay={false} user={user} />
            )}
          </div>
        </div>
        <div className="right">
          <div className="total-price">
            <TotalPrice subTotal={total} />
          </div>
          <div className="contact">
            <ContactForm fullName="Jon Doe" email="jdoe@gmail.com" />
          </div>
          <div>
            <div className="review-btn">
              <ButtonComponent title="REVIEW ORDER" />
            </div>
            <div className="shopping-btn">
              <ButtonComponent title="KEEP SHOPPING" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageContainer;
