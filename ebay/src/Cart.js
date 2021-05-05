/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Cart.css";
import Cartitems from "./Cartitems";
import { total, totalitems } from "./reducer";
import store from "./Store";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Cart(props) {
  const history = useHistory();
  const { user } = props.prop;
  var [loading, setloading] = useState(true);

  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      if (mounted) {
        setloading(false);
      }
    }, 3000);

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="cartpage">
      <div className="cartcon">
        <div className="title2">
          Shopping cart({totalitems(props.props)} items)
        </div>

        <div className="mainsection">
          {loading ? (
            <div className="loading2">
              <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <div className="productsection">
              {" "}
              {props.props.map((i) => (
                <Cartitems props={i} key={i.src} />
              ))}
            </div>
          )}

          <div className="subtotalsection">
            <button
              className="finalize"
              onClick={() => {
                user.length > 0
                  ? history.push("/checkout")
                  : history.push("/login");
                return store.dispatch({
                  type: "sethistory",
                  payload: {
                    his: "/checkout",
                  },
                });
              }}
              disabled={total(props.props) === 0 || loading ? true : false}
            >
              Go to checkout
            </button>
            <div className="subinfo">
              <span>items({totalitems(props.props)})</span>
              <span>US ${total(props.props).toFixed(2)}</span>
            </div>
            <div className="subinfo" style={{ fontSize: "0.875rem" }}>
              <span>Shipping to 234544</span>
              <span>US $45.16</span>
            </div>
            <div className="subinfo">
              <span>Import charges</span>
              <span>US $87.61</span>
            </div>
            <hr style={{ color: "gainsboro", width: "100%" }}></hr>
            <div className="subinfo">
              <h3 style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
                Subtotal
              </h3>
              <span style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
                US ${(total(props.props) + 45.16 + 87.61).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { props: state.reducer1, prop: state.reducer4 };
};
export default connect(mapStateToProps)(Cart);
