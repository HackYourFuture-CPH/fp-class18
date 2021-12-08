/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './CartPage.Style.css';
import Loader from '../../components/Loader/Loader.component';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import ButtonComponent from '../../components/Button/Button.component';
import { useFirebase } from '../../firebase/FirebaseContext';
import { PropTypes } from 'prop-types';
import { useShoppingCartContext } from '../../context/shoppingCart/shoppingCartContext';
import { useHistory } from 'react-router-dom';
import DeliveryInfoV2 from '../../components/DeliveryInfo/DeliveryInfoV2.component';
import { useFetchApi } from '../../hooks/UseFetchApi';

const CartPageContainer = ({ isAuthenticated }) => {
  const [cartItem, setCartItem] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [total, setTotal] = React.useState(0);

  const [user, setUser] = React.useState({});
  const { auth } = useFirebase();

  const { shoppingCart, changeProductQuantity } = useShoppingCartContext();
  const history = useHistory();

  React.useEffect(() => {
    Promise.all(
      Object.keys(shoppingCart).map((productId) => {
        return fetch(`api/products/${productId}`)
          .then((res) => res.json())
          .then((data) => {
            const newsItem = {
              // eslint-disable-next-line object-shorthand
              productId: productId,
              quantity: shoppingCart[productId],
              name: data[0].name,
              picture: data[0].picture,
              price: data[0].price,
              // eslint-disable-next-line @typescript-eslint/camelcase
              stock_amount: data[0].stock_amount,
            };
            return newsItem;
          });
      }),
    ).then((data) => {
      setCartItem(data);
      setIsLoading(false);
    });
  }, [shoppingCart]);

  React.useEffect(() => {
    const totalCost = cartItem.reduce(
      (acc, item) => (acc += item.price * item.quantity),
      0,
    );
    setTotal(totalCost);
  }, [cartItem]);

  const getItemQuantity = (index, value) => {
    // eslint-disable-next-line prefer-destructuring
    const productId = cartItem[index].productId;
    changeProductQuantity(productId, value);
  };

  const handleOnDeleteItem = (index) => {
    // eslint-disable-next-line prefer-destructuring
    const productId = cartItem[index].productId;
    changeProductQuantity(productId, 0);
  };

  const userId = (isAuthenticated && auth.currentUser.uid) || '';

  const userInfo = useFetchApi(`users/${userId}`);

  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const showCartItems = () => {
    if (cartItem.length === 0) {
      return <h1> Your Cart is Empty </h1>;
    }

    return cartItem.map((item, index) => {
      return (
        <ShoppingItem
          productName={item.name}
          quantity={item.stock_amount}
          price={item.price}
          productImg={item.picture}
          initValue={item.quantity}
          getQuantity={(value) => {
            getItemQuantity(index, value);
          }}
          onDelete={() => handleOnDeleteItem(index)}
        />
      );
    });
  };
  const showDeliveryInfo = () => {
    if (userId) {
      return <DeliveryInfoV2 editMode={true} vertDisplay={false} user={user} />;
    }
  };
  const showContactDetails = () => {
    if (userId) {
      return (
        <ContactForm
          fullName={auth.currentUser.displayName}
          email={auth.currentUser.email}
        />
      );
    }
  };

  return (
    <div className="cart-page">
      <div className="header">
        <h1>SHOPPING CART</h1>
      </div>
      <div className="cart-page-containter">
        <div className="top">
          <div className="left">
            <div className="cart-items">
              {isLoading ? <Loader /> : showCartItems()}
            </div>
            <div className="delivery-info">
              {userId && userInfo.isLoading ? <Loader /> : showDeliveryInfo()}
            </div>
          </div>
          <div className="right">
            <div className="total">
              <TotalPrice subTotal={total} />
            </div>
            <div className="contact">
              {userId && userInfo.isLoading ? <Loader /> : showContactDetails()}
            </div>
            <div className="buttons">
              <div className="review-btn">
                <ButtonComponent title="REVIEW ORDER" />
              </div>
              <div className="shopping-btn">
                <ButtonComponent
                  title="KEEP SHOPPING"
                  backgroundColor="#fff"
                  onClick={() => history.push('/')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartPageContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default CartPageContainer;
