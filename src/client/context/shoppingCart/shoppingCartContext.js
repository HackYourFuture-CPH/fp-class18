import { createContext, useContext } from 'react';

export const shoppingCartContext = createContext();
export const { Consumer, Provider } = shoppingCartContext;

export function useShoppingCartContext() {
  return useContext(shoppingCartContext);
}
