import React from "react";
import c1 from "../../public/Images/c1.png";
import c2 from "../../public/Images/c2.png";
import c3 from "../../public/Images/c3.png";
import c4 from "../../public/Images/c4.png";
import c5 from "../../public/Images/c5.png";

const Company = () => {
  return (
    <div className="company">
      <div className="companySection section">
        <p>Trusted by 1000+ Companies</p>
        <div className="companyImages flex">
          <img src={c1} className="companyImg" />
          <img src={c2} className="companyImg" />
          <img src={c3} className="companyImg" />
          <img src={c4} className="companyImg" />
          <img src={c5} className="companyImg" />
        </div>
      </div>
    </div>
  );
};

export default Company;
