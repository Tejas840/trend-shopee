import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (itemData) => {
  return (
    <NavLink to={`/singleproduct/${itemData.id}`}>
      <div className="product">
        <div className="productImg">
          <img src={itemData.image} alt="name" />
        </div>
        <div className="productInfo">
          <p className="category">{itemData.category}</p>
          <p className="name">{itemData.name}</p>
          <p className="price">{<FormatPrice price={itemData.price} />}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
