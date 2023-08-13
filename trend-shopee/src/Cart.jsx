import React from "react";
import { useCartContext } from "./context/cartContext";
import "./style/cart.css";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, totalPrice, shippingFee } = useCartContext();

  if (cart.length == 0) {
    return (
      <div className="cart section container">
        <h3>No Cart Items</h3>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="section">
        <div className="container">
          <div className="cartHead grid">
            <p>Item</p>
            <p>price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <p>Remove</p>
          </div>
          <hr className="line" />
          <div className="cartItems">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <hr className="line" />
          <div className="buttons flex">
            <NavLink to={"/products"}>
              <button className="btn">Continue Shopping</button>
            </NavLink>
            <button className="btn clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
        <div className="total flex">
          <div className="box">
            <p>
              Subtotal: <FormatPrice price={totalPrice} />{" "}
            </p>
            <p>
              Shipping Fee: <FormatPrice price={shippingFee} />{" "}
            </p>
            <hr className="line" />
            <p>
              Total: <FormatPrice price={totalPrice + shippingFee} />{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
