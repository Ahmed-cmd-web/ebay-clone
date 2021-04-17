/** @format */

import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import "./Add.css";
import store from "./Store";

function Add(props) {
  const { src } = props;
  const history=useHistory()
  const discount = Math.floor(Math.random() * 70) + 1;
  const addtocart = () => {
    props.prop.basket.findIndex((i) => i.src === src) === -1 &&
    props.quantity > 0
      ? store.dispatch({
          type: "add",
          payload: {
            quantity: props.quantity,
            src: props.src,
            originalprice: props.price,
            discount: 1 - discount / 100,
            price: (
              props.price *
              props.quantity *
              (1 - discount / 100)
            ).toFixed(2),
            title: props.title,
            expiry: props.expiry,
            condition: props.condition,
            rating: props.rating,
          },
      })
    
      
      : (document.getElementById("errorch").innerHTML =
        "this product is already in your cart or check the quantity");
    
      history.push('/cart');
  };

  return (
    <div className="add">
      <div className="addcon">
        <div className="addconr">
          <p>
            List price:<span className="addprice">${props.price}</span>
          </p>

          <p>
            You save:{" "}
            <span className="addprice">
              ${((props.price * discount) / 100).toFixed(2)} ({discount}% off)
            </span>
          </p>
          <p>
            Now:
            <span className="addprice">
              {" "}
              US ${(props.price * (1 - discount / 100)).toFixed(2)}
            </span>{" "}
          </p>
        </div>
        <div
          id="errorch"
          style={{
            color: "red",
            fontWeight: "bold",
            position: "relative",
            bottom: "30px",
            left: "30px",
          }}
        ></div>
        <div className="addconl">
          <button
            onClick={() =>
              alert(
                "not implemented try adding to the the cart or watchlisting it"
              )
            }
            className="buynow"
            value="Submit"
          >
            Buy it Now
          </button>
          <button
            className="addtocart"
            onClick={addtocart}
            disabled={props.quantity === "" ? true : false}
          >
            Add to cart
          </button>
          <div>
            {" "}
            <span>🧿</span>
            <span className="watchlistadd"> Add to Watchlist</span>
          </div>
        </div>
        <div className="addconb">
          <span className="sats">
            100% buyer <br></br> satisfaction
          </span>
          <div className="sold">
            <span className="soldcon">
              {Math.floor(Math.random() * 1170) + 1}
            </span>
            <br></br>
            <span>sold</span>
          </div>
          <div className="sold">
            <span className="soldcon">
              More than {Math.floor(Math.random() * 99)}%
            </span>
            <br></br>
            <span>sold</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    prop: state.reducer1,
  };
};

export default connect(mapStateToProps)(Add);
