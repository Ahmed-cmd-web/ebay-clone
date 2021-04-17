/** @format */
import React, { useState } from "react";
import "./Cartitems.css";
import store from "./Store";
import { Link } from "react-router-dom";

function Cartitems(props) {
  var { src, title, expiry, condition, price, rating, quantity } = props.props;
  const { originalprice, discount } = props.props;
  var [quantity2, setquantity2] = useState(quantity);
  const handleChange = (e) => {
    setquantity2((quantity2 = e.target.value));
    store.dispatch({
      type: "update",
      payload: {
        src: src,
        quantity: quantity2,
        price: (originalprice * e.target.value * discount).toFixed(2),
      },
    });
  };

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
  const remove = () => {
    store.dispatch({
      type: "remove",
      payload: {
        src: src,
      },
    });
  };
  return (
    <div className="cartitems">
      <div className="cartitemscon">
        <div className="leftsec">
          {" "}
          <div className="imgcontainer">
            <img className="cartitemsimg" src={src} alt="" />
          </div>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            onClick={dis}
            to="/productdetails"
          >
            {" "}
            <h3 style={{ textDecoration: "underline" }}>{title}</h3>
          </Link>
        </div>
        <div className="rightsec">
          {" "}
          <div className="quansec">
            {" "}
            <h3 style={{ fontWeight: "normal" }}>
              Qty{" "}
              <input
                type="number"
                min={1}
                defaultValue={quantity}
                onChange={handleChange}
                required
              />
            </h3>
            <h2 style={{ fontWeight: "normal" }}>US ${price}</h2>
          </div>
          <span className="rem" onClick={remove}>
            Remove
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
