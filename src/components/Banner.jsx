import React from "react";

function Banner({ src, title, btnTitle }) {
  return (
    <div className="banner">
      <img src={src} alt="" />
      <h3>{title}</h3>
      <button className="incele">{btnTitle}</button>
    </div>
  );
}

export default Banner;
