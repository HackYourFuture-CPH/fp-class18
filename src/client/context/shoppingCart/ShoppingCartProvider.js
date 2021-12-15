import React from 'react';
import { Provider } from './shoppingCartContext';

// const shoppingCardToArray = Object.keys(shoppingCart).map((productId) => ({
//   productId,
//   quantity: shoppingCart[productId],
// }));

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = React.useState(
    () => JSON.parse(localStorage.getItem('shoppingCart')) || {},
  );

  React.useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const changeProductQuantity = React.useCallback((productId, quantity = 0) => {
    if (quantity < 0) return;

    setShoppingCart((oldShopingCart) => {
      const newState = { ...oldShopingCart, [productId]: quantity };
      if (quantity === 0) {
        delete newState[productId];
      }
      return newState;
    });
  }, []);

  const clearShoppingCart = React.useCallback(() => setShoppingCart({}), []);

  const contextValue = React.useMemo(() => {
    return {
      shoppingCart,
      changeProductQuantity,
      clearShoppingCart,
    };
  }, [shoppingCart, changeProductQuantity, clearShoppingCart]);

  return <Provider value={contextValue}>{children}</Provider>;
}
