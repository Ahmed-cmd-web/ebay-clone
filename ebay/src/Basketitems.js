/** @format */

import React from "react";
import "./Basketitems.css";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import store from "./Store";

function Basketitems(props) {
  const dis = () => {
    store.dispatch({
      type: "more",
      payload: {
        title: props.title,
        expiry: props.expiry,
        condition: props.condition,
        src: props.src,
        price: props.price,
        rating: props.rating,
      },
    });
    
  };
    const remove = () =>
      store.dispatch({
        type: "remove",
        payload: {
          src: props.src,
        },
      });
    return (
      <Link
        style={{ textDecoration: "none" }}
        onClick={dis}
        to="/productdetails"
      >
        <div className="Basketitems">
          <div className="Basketitemscon">
            <div className="details2">
              {" "}
              <div className="leftd">
                <img src={props.src} alt="" />
              </div>
              <div className="rightd">
                <span>{props.title}</span>
                <div className="pricequan">
                  <span
                    style={{
                      fontWeight: "bolder",
                      fontSize: "17px",
                    }}
                  >
                    ${props.price}
                  </span>
                  <span className="q">Qty: {props.quantity}</span>
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
