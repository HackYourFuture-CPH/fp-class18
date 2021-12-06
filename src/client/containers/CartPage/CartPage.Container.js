/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import './CartPage.Style.css';
import Loader from '../../components/Loader/Loader.component';
import ShoppingItem from '../../components/ShoppingItem/ShoppingItem';
// import DeliveryInfo from '../../components/DeliveryInfo/DeliveryInfo.component';
import TotalPrice from '../../components/TotalPriceCard/TotalPriceCard.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';
import ButtonComponent from '../../components/Button/Button.component';
// import { useFetchApi } from '../../hooks/UseFetchApi';
import { useFirebase } from '../../firebase/FirebaseContext';
import { PropTypes } from 'prop-types';
import { useShoppingCartContext } from '../../context/shoppingCart/shoppingCartContext';
import { useHistory } from 'react-router-dom';

const CartPageContainer = ({ isAuthenticated }) => {
  const [cartItem, setCartItem] = React.useState([]);
  const [IsLoading, setIsLoading] = React.useState(true);
  // const [user, setUser] = React.useState({});
  const [total, setTotal] = React.useState(0);
  // const [itemCost, setItemCost] = React.useState([]);
  const { auth } = useFirebase();

  const { shoppingCart, changeProductQuantity } = useShoppingCartContext();
  const history = useHistory();

  /*
  const userInfo = useFetchApi(`users/${userId}`);
  
  React.useEffect(() => {
    if (!userInfo.isLoading) {
      setUser(userInfo.data[0]);
    }
  }, [userInfo]);
 */
  React.useEffect(() => {
    Promise.all(
      Object.keys(shoppingCart).map((productId) => {
        return fetch(`api/products/${productId}`)
          .then((res) => res.json())
          .then((data) => {
            const newsItem = {
              productId: productId,
              quantity: shoppingCart[productId],
              name: data[0].name,
              picture: data[0].picture,
              price: data[0].price,
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
    let totalCost = 0;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cartItem.length; i++) {
      // eslint-disable-next-line operator-assignment
      totalCost = totalCost + cartItem[i].price * cartItem[i].quantity;
    }
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
  return (
    <div>
      <h1>SHOPPING CART</h1>
      <div className="main">
        <div className="left">
          <div className="item-list">
            {IsLoading ? (
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
                    getQuantity={(value) => {
                      getItemQuantity(index, value);
                    }}
                    onDelete={() => handleOnDeleteItem(index)}
                  />
                );
              })
            )}
          </div>

          {
            // eslint-disable-next-line spaced-comment
            /*DeliveryInfo Component*/
          }
        </div>
        <div className="right">
          <div className="total-price">
            <TotalPrice subTotal={total} />
          </div>
          <div className="contact">
            <ContactForm
              fullName={
                isAuthenticated ? `${auth.currentUser.displayName}` : 'Guest'
              }
              email={isAuthenticated ? `${auth.currentUser.email}` : ''}
            />
          </div>
          <div>
            <div className="review-btn">
              <ButtonComponent title="REVIEW ORDER" />
            </div>
            <div className="shopping-btn">
              <ButtonComponent
                title="KEEP SHOPPING"
                onClick={() => history.push('/')}
              />
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
