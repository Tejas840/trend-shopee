import React from "react";
import shopping from "../../public/Images/shopping.jpg";
import "../style/about.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const InfoWithImg = () => {
  return (
    <div className="Info">
      <div className="InfoSection section flex">
        <div className="text divContainer">
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            WELCOME TO
          </motion.h3>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            Trend Shopee
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
            excepturi dignissimos cumque est eveniet, praesentium consectetur
            officia provident amet maiores modi possimus. Numquam, voluptate
            quidem enim accusamus voluptatibus voluptates quas!
          </motion.p>
          <NavLink to={"/products"}>
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="btn"
            >
              Shop Now
            </motion.button>
          </NavLink>
        </div>
        <div className="imgDiv flex">
          <motion.img
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5 }}
            src={shopping}
            className="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoWithImg;
