import React from "react";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      // whileInView={{ y: 0, opacity: 1 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="header"
    >
      <div className="headerSection">
        <NavLink to={"/"} className="link">
          <h1 className="logo">Trend Shopee</h1>
        </NavLink>
        <Nav />
      </div>
    </motion.div>
  );
};

export default Header;
