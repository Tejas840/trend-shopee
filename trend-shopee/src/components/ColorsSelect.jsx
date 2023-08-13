import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";

const ColorsSelect = ({ colors = [""], selColor, setSelColor }) => {
  // const [selColor, setSelColor] = useState(colors[0]);

  return (
    <div>
      {colors[0] != "" ? (
        <div className="colorsSelect flex">
          <p>colors: </p>
          {colors.map((ele, i) => {
            console.log("items: " + ele);
            return (
              <button
                key={i}
                onClick={() => {
                  setSelColor(ele);
                }}
                className={
                  selColor == ele ? "colorActive colorBtn" : "colorBtn"
                }
                style={{ backgroundColor: ele }}
              >
                {selColor == ele ? (
                  <BsCheckLg className="colorCheck flex" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : (
        <p>loading..............</p>
      )}
    </div>
  );
};

export default ColorsSelect;
