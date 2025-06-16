import React, { createContext, useReducer, useContext } from 'react';

const ADD_ITEM    = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_CART  = 'CLEAR_CART';

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload;
      const exists = state.find(p => p.id === item.id);
      if (exists) {
        return state.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...state, { ...item, qty: 1 }];
    }
    case REMOVE_ITEM:
      return state.filter(p => p.id !== action.payload.id);
    case CLEAR_CART:
      return [];
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItem    = item => dispatch({ type: ADD_ITEM,    payload: item });
  const removeItem = item => dispatch({ type: REMOVE_ITEM, payload: item });
  const clearCart  = ()   => dispatch({ type: CLEAR_CART });

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
