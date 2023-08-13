import React from "react";
import { ImTruck } from "react-icons/im";
import { BsShieldCheck } from "react-icons/bs";
import { BsFillLockFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { motion } from "framer-motion";

// initial={{ y: 250, opacity: 0 }}
// whileInView={{ y: 0, opacity: 1 }}
// transition={{ duration: 0.6 }}

const Features = () => {
  return (
    <div className="features">
      <div className="featuresCon section grid">
        <motion.div
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ImTruck className="fIcon" />
          <p>Super Fast and Free Delivery</p>
        </motion.div>
        <div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <BsShieldCheck className="fIcon" />
            <p>Non Contact Shipping</p>
          </motion.div>
          <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <GiReceiveMoney className="fIcon" />
            <p>Money Back Guaranteed</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <BsFillLockFill className="fIcon" />
          <p>Super Secure Payment System</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
