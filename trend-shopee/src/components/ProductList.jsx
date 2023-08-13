import React from "react";
import Product from "./Product";
import "../style/productPage.css";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const ProductList = ({ allProducts, gridView }) => {
  return (
    <div className="productList">
      {gridView ? (
        <div className="gridView grid">
          {allProducts.map((itemData, i) => {
            console.log(itemData);
            return <Product key={itemData.id} {...itemData} />;
          })}
        </div>
      ) : (
        <div className="ListView grid">
          {allProducts.map((item) => {
            const { id, image, category, name, price, description } = item;
            return (
              <div key={id}>
                <NavLink to={`/singleproduct/${id}`}>
                  <div className="listProduct flex">
                    <div className="productImg flex">
                      <img src={image} alt="name" />
                    </div>
                    <div className="productInfo">
                      <div>
                        <p className="name">{name}</p>
                        <p className="price">{<FormatPrice price={price} />}</p>
                      </div>
                      <p className="description">
                        {description.slice(0, 200) + "......"}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
