import React from "react";
import footeImg from "../../public/Images/foot.png";
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerSection grid">
        <div className="contactFooter">
          <h1>Trend Shopee</h1>
          <div className="number">
            <h3>Contact Us</h3>
            <div>
              <div className="iconDiv">
                <BsWhatsapp className="iconCon" />
              </div>
              <div>
                <p>Whats App</p>
                <p>+91 9999999999</p>
              </div>
            </div>

            <div>
              <div className="iconDiv">
                <BiPhoneCall className="iconCon" />
              </div>
              <div>
                <p>Call Us</p>
                <p>+91 888888888</p>
              </div>
            </div>
          </div>
        </div>
        <div className="category">
          <h3>Most Popular Category</h3>
          <ul>
            <li>mobile</li>
            <li>laptop</li>
            <li>computer</li>
            <li>accessories</li>
            <li>watch</li>
          </ul>
        </div>
        <div className="service">
          <h3>Most Popular products</h3>
          <ul>
            <li>Iphone x</li>
            <li>samsung 20</li>
            <li>Dell L</li>
            <li>MacBook Pro</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>© {new Date().getFullYear()} All rights reserved. Tejas Shelke</p>
      </div>
    </div>
  );
};

export default Footer;
