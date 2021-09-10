/** @format */

import React from "react";
import "./Basketitems.css";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import store from "./Store";

function Basketitems({
  title,
  expiry,
  condition,
  price,
  rating,
  src,
  quantity,
 ...styles
}) {
  const dis = () => {
    store.dispatch({
      type: "more",
      payload: {
        title: title,
        expiry: expiry,
        condition: condition,
        src: src,
        price: price,
        rating: rating,
      },
    });
  };
  const remove = () =>
    store.dispatch({
      type: "remove",
      payload: {
        src: src,
      },
    });
  return (
    <Link style={{ textDecoration: "none" }} onClick={dis} to="/productdetails">
      <div className="Basketitems">
        <div className="Basketitemscon" {...styles}>
          <div className="details2">
            {" "}
            <div className="leftd">
              <img src={src} alt="" />
            </div>
            <div className="rightd">
              <span>{title}</span>
              <div className="pricequan">
                <span
                  style={{
                    fontWeight: "bolder",
                    fontSize: "17px",
                  }}
                >
                  ${price}
                </span>
                <span className="q">Qty: {quantity}</span>
              </div>
              <span>Free shipping</span>
              <DeleteOutlineOutlinedIcon onClick={remove} className="trash" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Basketitems;
