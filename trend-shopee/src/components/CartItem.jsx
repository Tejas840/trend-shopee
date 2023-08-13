import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import QuantitySelect from "./QuantitySelect";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, color, price, amount, image, max }) => {
  //
  const { removeItem, decrease, increase } = useCartContext();

  return (
    <div className="cartItem grid">
      <div className="cartImg">
        <img src={image} alt="" />
        <div>
          <p>{name}</p>
          <p className="color" style={{ background: color }}></p>
        </div>
      </div>
      <p className="price">{<FormatPrice price={price} />}</p>
      <div className="quantity">
        <QuantitySelect
          quanCart={amount}
          increase={() => increase(id)}
          decrease={() => decrease(id)}
        />
      </div>
      <p>{<FormatPrice price={amount * price} />}</p>
      <div className="delete">
        <FaTrash className="deleteIcon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
