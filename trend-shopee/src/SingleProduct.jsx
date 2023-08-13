import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductsContext } from "./context/productContext";
import "./style/singleProduct.css";
import FormatPrice from "./Helpers/FormatPrice";
import {
  TbTruckDelivery,
  TbReplace,
  TbShieldCheckFilled,
} from "react-icons/tb";
import ProductImages from "./components/ProductImages";
import Stars from "./components/Stars";
import ColorsSelect from "./components/ColorsSelect";
import QuantitySelect from "./components/QuantitySelect";
import { useCartContext } from "./context/cartContext";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct, isError } =
    useProductsContext();
  const { addToCart } = useCartContext();
  const {
    name,
    category,
    colors = [""],
    company,
    description,
    image,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;

  const [quanCart, setQuanCart] = useState(1);
  const [selColor, setSelColor] = useState(colors[0]);
  useEffect(() => {
    setSelColor(colors[0]);
  }, colors);

  const increase = () => {
    if (quanCart < stock) {
      setQuanCart((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (quanCart > 1) {
      setQuanCart((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      {isSingleLoading ? (
        <p>loading.....</p>
      ) : (
        <div className="singleProduct">
          <div className="singleNav">
            <h3>
              <NavLink className="homeLink" to={"/"}>
                Home
              </NavLink>{" "}
              / {name}
            </h3>
          </div>
          <div className="singleProductCon flex section">
            <div className="container flex">
              <div className="imgContainer">
                <ProductImages images={image} />
              </div>
              <div className="infoContainer">
                <h2 className="name">{name}</h2>
                <div className="rating">
                  <Stars stars={stars} reviews={reviews} />
                </div>
                <div className="price">
                  <p>
                    MRP:{" "}
                    <del>
                      <FormatPrice price={price * 0.5 + price} />
                    </del>
                  </p>
                  <p>
                    Deal of the day : <FormatPrice price={price} />
                  </p>
                </div>
                <div className="des">
                  <p>{description}</p>
                </div>
                <div className="benefits flex">
                  <div>
                    <TbTruckDelivery className="icon" />
                    <p>free Delivery</p>
                  </div>
                  <div>
                    <TbReplace className="icon" />
                    <p>Easy return</p>
                  </div>
                  <div>
                    <TbTruckDelivery className="icon" />
                    <p>Secure Delivery</p>
                  </div>
                  <div>
                    <TbShieldCheckFilled className="icon" />
                    <p>Quality Assure</p>
                  </div>
                </div>
                <div className="stockInfo">
                  <p>
                    Available :{" "}
                    {stock > 0 ? (
                      <span>In Stock</span>
                    ) : (
                      <span>Out of Stock</span>
                    )}
                  </p>
                  <p>
                    ID : <span>{id}</span>
                  </p>
                  <p>
                    Brand : <span>{company}</span>
                  </p>
                </div>
                <hr className="line" />
                {stock > 0 ? (
                  <>
                    <ColorsSelect
                      selColor={selColor}
                      setSelColor={setSelColor}
                      colors={colors}
                    />
                    <QuantitySelect
                      quanCart={quanCart}
                      increase={increase}
                      decrease={decrease}
                      stock={stock}
                    />
                  </>
                ) : null}
                <NavLink to={"/cart"}>
                  <button
                    onClick={() =>
                      addToCart(id, selColor, quanCart, singleProduct)
                    }
                    className="btn"
                  >
                    Add To Cart
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
