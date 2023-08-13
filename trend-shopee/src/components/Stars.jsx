import React from "react";
import { BsStarHalf, BsFillStarFill, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, i) => {
    let num = i + 0.5;

    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <BsFillStarFill className="star" />
        ) : stars >= num ? (
          <BsStarHalf className="star" />
        ) : (
          <BsStar className="star" />
        )}
      </span>
    );
  });

  return <div className="stars flex">{ratingStar}</div>;
};

export default Stars;
