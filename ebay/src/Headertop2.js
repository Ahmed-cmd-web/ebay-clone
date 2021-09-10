/** @format */

import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import "./headertop2.css";
import store from "./Store";
import Appdropdown from "./Appdropdown";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import CurrencyFormat from "react-currency-format";
import { total } from "./reducer";
import Appoffcanvas from "./Appoffcanvas";
import headerdrp from "./content/headerdrp";

const Headertop2 = (props) => {
  const history = useHistory();
  const { user } = props.prop.reducer4;
  const signout = () => {
    auth.signOut().then(() => {
      store.dispatch({
        type: "sethistory",
        payload: {
          his: "/",
        },
      });
      history.push("/registeration");
    });
  };
  const handleclick = () => {
    window.location.pathname === "/cart"
      ? store.dispatch({
          type: "sethistory",
          payload: {
            his: "/cart",
          },
        })
      : store.dispatch({
          type: "sethistory",
          payload: {
            his: "/",
          },
        });
  };

  return (
    <div className="header2">
      <div className="left">
        {user.length > 0 ? (
          <Appdropdown
            padding={"10px"}
            itempadding={"5px"}
            title={
              <span style={{ display: "flex", alignItems: "center" }}>
                {`Hi ${user[0].fname}`}
                <FiChevronDown />
              </span>
            }
            items={[
              {
                title: user[0].fname + " " + user[0].lname,
                onClick: null,
              },
              {
                title: "sign out",
                onClick: () => signout(),
              },
            ]}
          />
        ) : (
          <span>
            Hi!{" "}
            <Link
              onClick={handleclick}
              style={{ paddingRight: "5px", paddingLeft: "5px" }}
              className="header2opt"
              to="/login"
            >
              {" "}
              Sign in
            </Link>
            or
            <Link
              onClick={handleclick}
              style={{ paddingRight: "5px", paddingLeft: "5px" }}
              className="header2opt"
              to={"/Registeration"}
            >
              Register
            </Link>
          </span>
        )}
        <span>Daily Deals</span>
        <span>Help & Contact</span>
      </div>
      <div className="right">
        <span>ship to</span>
        <span>Sell</span>
        <span>
          Watchlist
          <FiChevronDown />
        </span>
        <Appdropdown
          padding={"10px"}
          itempadding={"5px"}
          title={
            <span style={{ display: "flex", alignItems: "center" }}>
              My ebay
              <FiChevronDown />
            </span>
          }
          items={headerdrp.drpcontent}
        />
        <span>
          <AiOutlineBell size={25} className="bell" />
        </span>
        <span>
          <Appdropdown
            minmenuwidth={"300px"}
            title={
              <Badge badgeContent={props.prop.reducer1.length} color="error">
                <ShoppingCartOutlinedIcon className="bell" />
              </Badge>
            }
            header={
              props.prop.reducer1.length > 0 && (
                <h2 style={{ color: "black", padding: "0px 5px 0px 15px" }}>
                  Shopping cart
                </h2>
              )
            }
            footer={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "15px",
                  alignItems: "center",
                }}
              >
                {props.prop.reducer1.length > 0 && (
                  <div className="total">
                    <div
                      style={{
                        width: "95%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "grey" }}>Total</span>
                      <CurrencyFormat
                        style={{ fontWeight: "bolder" }}
                        value={total(props.prop.reducer1)}
                        prefix={"$"}
                        thousandSeparator={true}
                        decimalScale={2}
                        displayType={"text"}
                      />
                    </div>
                  </div>
                )}
                <button
                  className="checkoutbutton"
                  onClick={() => {
                    user.length > 0
                      ? history.push("/checkout")
                      : history.push("/login");
                    store.dispatch({
                      type: "sethistory",
                      payload: {
                        his: "/checkout",
                      },
                    });
                  }}
                  disabled={props.prop.reducer1.length > 0 ? false : true}
                >
                  Checkout
                </button>
                <button
                  onClick={() => history.push("/cart")}
                  className="viewcartbutton"
                  disabled={props.prop.reducer1.length > 0 ? false : true}
                >
                  View cart
                </button>
              </div>
            }
            items={
              props.prop.reducer1.length > 0 ? (
                props.prop.reducer1.filter(
                  (v, i, a) => a.findIndex((t) => t.src === v.src) === i
                )
              ) : (
                <span
                  style={{
                    color: "#767676",
                    textDecoration: "none",
                  }}
                >
                  <h2>Your cart is empty</h2>
                  Time to start shopping!
                </span>
              )
            }
            custom={true}
          />
        </span>
        <Appoffcanvas
          cartlength={props.prop.reducer1.length}
          cartitems={props.prop.reducer1}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prop: state,
  };
};

export default connect(mapStateToProps)(Headertop2);
