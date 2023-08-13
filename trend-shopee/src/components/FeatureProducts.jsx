import React from "react";
import { useProductsContext } from "../context/productContext";
import Product from "./Product";

const FeatureProducts = () => {
  const { isLoading, featureProducts, isError } = useProductsContext();

  console.log(
    `Loading = ${isLoading}, productList = ${featureProducts}, error = ${isError}`
  );

  if (isLoading == true) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  }
  return (
    <div className="featureProducts">
      <div className="featureProSection section">
        <div className="container">
          <h3>Featured Items</h3>
          <div className="items flex">
            {featureProducts.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
