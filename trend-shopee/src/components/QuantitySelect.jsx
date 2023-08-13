import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantitySelect = ({ quanCart, increase, decrease }) => {
  return (
    <div className="quantitySelect flex">
      <button className="quanBtn" onClick={decrease}>
        <AiOutlineMinus />
      </button>
      <p>{quanCart}</p>
      <button className="quanBtn" onClick={increase}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default QuantitySelect;
