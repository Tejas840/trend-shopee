import React, { useEffect, useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="productImages flex">
      <div className="con1 flex">
        {images.map((ele, i) => {
          return (
            <img
              onClick={() => setMainImg(ele)}
              key={i}
              src={ele.url}
              alt={ele.filename}
            />
          );
        })}
      </div>
      <div className="con2">
        <img src={mainImg.url} alt={mainImg.filename} />
      </div>
    </div>
  );
};

export default ProductImages;
