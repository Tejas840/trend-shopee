import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// get From local Storage
let data = JSON.parse(localStorage.getItem("CartData")) || [];

const initialState = {
  cart: data,
  totalItems: 0,
  totalPrice: 0,
  shippingFee: 10000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //local Storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "TOTAL_CART_ITEMS" });
    localStorage.setItem("CartData", JSON.stringify(state.cart));
  }, [state.cart]);

  //Add to cart
  const addToCart = (id, selColor, quanCart, singleProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, selColor, quanCart, singleProduct },
    });
  };

  //increament and Decrement
  const increase = (id) => {
    console.log("increase" + id);
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };
  const decrease = (id) => {
    console.log("decrease" + id);
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  //clear Cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //remove from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItem, clearCart, increase, decrease }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook
export const useCartContext = () => {
  return useContext(CartContext);
};
