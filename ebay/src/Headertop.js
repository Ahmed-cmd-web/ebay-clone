/** @format */

import React from "react";
import "./Headertop.css";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { connect } from "react-redux";
import Basketitems from "./Basketitems";
import { total } from './reducer'
import  CurrencyFormat  from  "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";



function Headertop(props) {
  const history = useHistory();
  const { user } = props.prop.reducer1;
    

  const signout = () => {
      auth.signOut().then(() =>
      history.push("/registeration"));
    }
  
  return (
    <div className="head">
      <ul className="headercontent">
        <div className="left">
          {user.length > 0 ? (
            <div className="userdrop">
              <div className="userdroptitle">
                <span>
                  Hi {user[0].fname} !{" "}
                  <KeyboardArrowDownRoundedIcon className="arrowdown" />{" "}
                </span>
              </div>
              <div className="userdropmenu">
                <span>{user[0].fname + " " + user[0].lname}</span>
                <span className="signout" onClick={signout}>
                  sign out
                </span>
              </div>
            </div>
          ) : (
            <ul>
              Hi! {"  "}
              <span className="headeropt">
                <Link
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                  className="headeropt"
                  to="/login"
                >
                  {" "}
                  Sign in
                </Link>
              </span>
              or
              <span className="headeropt">
                <Link
                  style={{ paddingRight: "5px", paddingLeft: "5px" }}
                  className="headeropt"
                  to={"/Registeration"}
                >
                  Register
                </Link>
              </span>
            </ul>
          )}
          <ul className="ul">
            <span className="headeropt">Daily Deals</span>
          </ul>
          <ul className="ul">
            <span className="headeropt">Help & Contact</span>
          </ul>
        </div>
        <div className="right">
          <ul className="ul">
            <span className="headeropt">ship to</span>
          </ul>
          <ul className="ul">
            <span className="headeropt">Sell</span>
          </ul>
          <ul className="ul">
            <span className="headeropt">
              Watchlist
              <KeyboardArrowDownRoundedIcon className="arrowdown" />
            </span>
          </ul>
          <ul className="dropdown">
            <span className="headeropt">
              My eBay
              <KeyboardArrowDownRoundedIcon className="arrowdown" />
            </span>
            <div className="dropdown-menu">
              <a href="ex">Summary</a>
              <a href="ex">Recently Viewed </a>
              <a href="ex">Bids/Offers</a>
              <a href="ex">Watchlist</a>
              <a href="ex">Purchase History</a>
              <a href="ex">Buy Again</a>
              <a href="ex">Selling</a>
              <a href="ex">Saved Searches</a>
              <a href="ex">Saved Sellers</a>
              <a href="ex">Messages</a>
            </div>
          </ul>
          <ul style={{ minWidth: "23px" }}>
            <span className="headeropt">
              <NotificationsNoneIcon className="bell" />
            </span>
          </ul>
          <ul style={{ minWidth: "23px" }}>
            <div className="drp">
              {" "}
              <span className="headeropt">
                <div className="headeroptcart">
                  <ShoppingCartOutlinedIcon className="cart" />
                  {props.prop.reducer1.basket.length > 0 ? (
                    <span className="basketlength">
                      {props.prop.reducer1.basket.length}
                    </span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="basketdropdown">
                  {props.prop.reducer1.basket.length > 0 ? (
                    <h2 style={{ color: "black", padding: "0px 5px 0px 15px" }}>
                      Shopping cart
                    </h2>
                  ) : (
                    ""
                  )}
                  {props.prop.reducer1.basket.length > 0 ? (
                    props.prop.reducer1.basket
                      .filter(
                        (v, i, a) => a.findIndex((t) => t.src === v.src) === i
                      )
                      .map((item, index) => (
                        <Basketitems
                          key={index}
                          quantity={item.quantity}
                          src={item.src}
                          price={item.price}
                          title={item.title}
                          expiry={item.expiry}
                          condition={item.condition}
                          rating={item.rating}
                        />
                      ))
                  ) : (
                    <span style={{ padding: "0px 5px 10px 20px" }}>
                      <h2>Your cart is empty</h2>
                      Time to start shopping!
                    </span>
                  )}
                  {props.prop.reducer1.basket.length > 0 ? (
                    <div className="total">
                      <span style={{ color: "grey" }}>Total</span>
                      <CurrencyFormat
                        style={{ fontWeight: "bolder" }}
                        value={total(props.prop.reducer1.basket)}
                        prefix={"$"}
                        thousandSeparator={true}
                        decimalScale={2}
                        displayType={"text"}
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className="checkout2"
                    disabled={
                      props.prop.reducer1.basket.length > 0 ? false : true
                    }
                  >
                    Checkout
                  </button>
                  <button
                    className="viewc"
                    disabled={
                      props.prop.reducer1.basket.length > 0 ? false : true
                    }
                  >
                    View cart
                  </button>
                </div>
              </span>
            </div>
          </ul>
        </div>
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    prop: state,
  };
};

export default connect(mapStateToProps)(Headertop);
