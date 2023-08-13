import React, { useEffect } from "react";
import { useProductsContext } from "./context/productContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import watch from "../public/Images/home.png";
import mobile from "../public/Images/home1.png";
import Product from "./components/Product";
import "./style/home.css";
import { NavLink } from "react-router-dom";
import { easeOut, motion, spring } from "framer-motion";

// fade
// initial={{ opacity: 0 }}
// whileInView={{ opacity: 1 }}
// transition={{ duration: 0.7 }}

// initial={{ y: 250, opacity: 0 }}
// whileInView={{ y: 0, opacity: 1 }}
// transition={{ duration: 0.6 }}

const Home = () => {
  let { products } = useProductsContext();

  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 600 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  function getData(prop) {
    let List = products.filter((item, i) => {
      if (item.category == prop) {
        return item;
      }
    });
    return List;
  }

  return (
    <div className="home">
      {getData("mobile") == [] ? (
        <>
          <h1>Loading........</h1>
        </>
      ) : (
        <div className="section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="con1"
          >
            <Carousel className="carousel1" responsive={responsive1}>
              <div className="card flex">
                <div className="info">
                  <h3 className="offer">Best Deal online on smart waches</h3>
                  <h3 className="name">I Watch</h3>
                  <h3 className="off">upto 80% off</h3>
                </div>
                <div className="img flex">
                  <img src={watch} alt="" />
                </div>
              </div>
              <div className="card flex">
                <div className="info">
                  <h3 className="offer">Best Deal online on smart phone</h3>
                  <h3 className="name">Galaxy s22</h3>
                  <h3 className="off">upto 25% off</h3>
                </div>
                <div className="img flex">
                  <img src={mobile} alt="" />
                </div>
              </div>
            </Carousel>
          </motion.div>
          <div className="con2">
            <div className="featureProducts">
              <div className="featureProSection">
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="container"
                >
                  <div className="flex">
                    <h3>Featured Mobiles</h3>
                    <NavLink to={"/products"}>
                      <button className="btn">View All</button>
                    </NavLink>
                  </div>
                  <div className="items flex">
                    {getData("mobile").map((item) => {
                      return <Product {...item} />;
                    })}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="container"
                >
                  <div className="flex">
                    <h3>Featured Laptops</h3>
                    <NavLink to={"/products"}>
                      <button className="btn">View All</button>
                    </NavLink>
                  </div>
                  <div className="items flex">
                    {getData("laptop").map((item) => {
                      return <Product {...item} />;
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
