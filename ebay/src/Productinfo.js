/** @format */

import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Add from "./Add";
import "./Productinfo.css";

const bans = [
  "https://www.animatedbanner.com/images/samples/leader/swimradar_728x90_b.gif",
  "https://www.5banners.com/store/img/cms/00100-728x90.gif",
  "https://www.animatedbanner.com/images/samples/leader/tektonic728x90b.gif",
];

function Productinfo(props) {
  var [quantity, setquantity] = useState(1);
  const handleChange = (e) => {
    setquantity(quantity = e.target.value)
  }
  const { src, price, title, expiry, condition, rating } = props.prop.reducer2;
  
  return (
    <div className="Productinfo">
      <div className="Productinfocon">
        
          <iframe
            className="frame"
            src={bans[Math.floor(Math.random() * bans.length)]}
            title="banner"
          ></iframe>
          <div className="productdetails2">
            {src !== undefined ? (
              <img className="img__info" src={src} alt="" />
            ) : (
              ""
            )}
         
          <div className="rightside">
            <div className="toppart">
              {" "}
              <h2>{title}</h2>
              {price > 0 ? (
                <span>
                  ✔ WORLDWIDE SHIPPING ✔ FRESH - EXPIRY {expiry.toUpperCase()}
                </span>
              ) : (
                ""
              )}
              <span className="rating">
                {price > 0 ? (
                  <p>
                    🔥 {Math.floor(Math.random() * 200) + 10} viewed per hour
                  </p>
                ) : (
                  ""
                )}
                {price > 0 ? <span>{"⭐".repeat(rating)}</span> : ""}
                {price > 0 ? (
                  <a href="ex">
                    {Math.floor(Math.random() * 200) + 10} product ratings
                  </a>
                ) : (
                  ""
                )}
              </span>
            </div>
            <div className="bottompart">
              {price > 0 ? (
                <div className="prop">
                  <span>Condition: </span>
                  <h3 style={{ paddingLeft: "10px" }}>
                    {condition === true ? "New" : "Used"}
                  </h3>{" "}
                </div>
              ) : (
                ""
              )}
              {price > 0 ? (
                <div className="prop">
                  <span>Quantity:</span>
                  <input
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    type="number"
                    min={1}
                    defaultValue={1}
                    onChange={handleChange}
                    required
                    className='quan'
                  />
                  <span>
                    More than {Math.floor(Math.random() * 200) + 10} available /{" "}
                  </span>
                  <a href="ex"> {Math.floor(Math.random() * 200) + 10} sold</a>
                </div>
              ) : (
                ""
              )}
              {price > 0 ? (
                <Add
                  quantity={quantity}
                  src={src}
                  price={price}
                  title={title}
                  expiry={expiry}
                  condition={condition}
                  rating={rating}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prop: state,
  };
};

export default connect(mapStateToProps)(Productinfo);
