/** @format */

import React from "react";
import "./Arrow.css";
const Arrow = ({ onClick, children, direction = "left" }) => {
  return (
    <button
      className="scroller"
      onClick={onClick}
      style={direction === "left" ? { left: "5px" } : { right: "5px" }}
    >
      {children}
    </button>
  );
};

export default Arrow;
