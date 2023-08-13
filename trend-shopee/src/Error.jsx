import React from "react";
import { NavLink } from "react-router-dom";
import error from "../public/Images/004.jpg";

const Error = () => {
  return (
    <div className="error">
      <div className="errorSection section flex">
        <img src={error} className="photo" alt="" />
        <NavLink className="errorBtnDiv" to={"/"}>
          <button className="btn">Go Back To Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
