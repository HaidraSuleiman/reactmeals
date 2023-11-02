import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];

    if (exisitingCartItemIndex > -1) {
      const updatedItem = {
        ...state.items[exisitingCartItemIndex],
        quantity: state.items[exisitingCartItemIndex].quantity + 1,
      };
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIndex];
    const updatedItems = [...state.items];
    if (exisitingCartItem.quantity === 1) {
      updatedItems.splice(exisitingCartItem, 1);
    } else {
      const updatedItem = {
        ...exisitingCartItem,
        quantity: exisitingCartItem.quantity - 1,
      };
      updatedItems[exisitingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({type: 'CLEAR_CART'})
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
