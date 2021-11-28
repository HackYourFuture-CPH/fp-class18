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

const cartOrder = {
  order: {
    orderId: 4,
    orderStatus: 'created',
    orderDate: '2021-11-12 18:00:00',
    user_id: 1,
  },
  items: [
    {
      quantity: 1,
      productId: 5,
      name: 'Pillow case',
      price: '65.00',
      color: 'white',
      size: 'medium',
      picture: 'src/client/assets/images/image05.png',
      stock_amount: 2,
    },
    {
      quantity: 1,
      productId: 3,
      name: 'Lunch box',
      price: '650.00',
      color: 'red',
      size: 'large',
      picture: 'src/client/assets/images/image09.png',
      stock_amount: 3,
    },
  ],
};

const CartPageContainer = () => {
  const [cartItem, setCartItem] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState({});
  const { id } = useParams();

  const userInfo = useFetchApi(`users/${cartOrder.order.user_id}`);

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
      console.log(user);
    }
  }, [user, userInfo]);

  /* this useeffect will be updated when we have api available */
  React.useEffect(() => {
    setCartItem(cartOrder.items);
    setIsLoading(false);
    console.log(cartItem);
    const priceArray = cartItem.map(
      (item) => parseInt(item.price) * item.quantity,
    );
    console.log(priceArray);
  }, [id, cartItem]);

  // eslint-disable-next-line radix

  const total = 715;

  return (
    <div>
      <h1>SHOPPING CART</h1>
      <div className="main">
        <div className="left">
          <div className="item-list">
            {IsLoading ? (
              <Loader />
            ) : (
              cartItem.map((item) => {
                return (
                  <ShoppingItem
                    productName={item.name}
                    quantity={item.stock_amount}
                    price={item.price}
                    productImg={item.picture}
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
            <ContactForm fullName="Varsha" email="varsha.verma@gmail.com" />
          </div>
          <div>
            <div className="review-btn">
              <ButtonComponent title={'REVIEW ORDER'} />
            </div>
            <div className="shopping-btn">
              <ButtonComponent title={'KEEP SHOPPING'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageContainer;
