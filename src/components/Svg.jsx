import React from "react";
import "./ComponentStyle.css";
import image from "../assets/leo.png";
const Svg = () => {
  return (
    <>
      <div
        className="svg absolute z-10 blur-lg opacity-30 flex justify-end 
      "
      >
        <img src={image} className="w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2" />
      </div>
    </>
  );
};

export default Svg;
