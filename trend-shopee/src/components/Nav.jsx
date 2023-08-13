import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const [navList, setNavList] = useState("nav-list");
  const [navButton, setNavButton] = useState(true);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  const showNav = () => {
    setNavList("nav-list showNav");
    setNavButton(false);
  };
  const hideNav = () => {
    setNavList("nav-list");
    setNavButton(true);
  };
  const { totalItems } = useCartContext();

  return (
    <div className="nav">
      <div className="navSection">
        <ul className={navList}>
          <li onClick={hideNav}>
            <NavLink to={"/"} className="link">
              Home
            </NavLink>
          </li>
          <li onClick={hideNav}>
            <NavLink to={"/about"} className="link">
              About
            </NavLink>
          </li>
          <li onClick={hideNav}>
            <NavLink to={"/products"} className="link">
              Products
            </NavLink>
          </li>
          <li onClick={hideNav}>
            <NavLink to={"/contact"} className="link">
              Contact
            </NavLink>
          </li>

          <li className="logButtons">
            <div className="user">{isAuthenticated && <p>{user.name}</p>}</div>{" "}
            {isAuthenticated ? (
              <button
                className="btn"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button className="btn" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}
          </li>
          <li onClick={hideNav}>
            <NavLink to={"/cart"} className="link cartItemsContainer">
              <AiOutlineShoppingCart className="icon" />
              <span className="cartItems">{totalItems}</span>
            </NavLink>
          </li>
        </ul>
        <div className="navButtons">
          {navButton ? (
            <CgMenuRound onClick={showNav} className="navMenu navButton" />
          ) : (
            <CgCloseO onClick={hideNav} className="navClose navButton" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
