/** @format */
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { connect } from "react-redux";
import { total } from "./reducer";
import { useHistory, Link } from "react-router-dom";

const CheckoutForm = (props) => {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      document.getElementById("parmenterror").innerHTML = error.message;
    } else {
      history.pushState("/");
    }
  };

  return (
    <div className="payment">
      <div className="loginhead">
        {" "}
        <Link to="/">
          <img
            className="logo2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="paymentcon">
        <h1 style={{ fontSize: "1.25rem", fontWeight: "normal" }}>
          total: US ${(total(props.props) + 45.16 + 87.61).toFixed(2)}
        </h1>
        <form className="paymentform" onSubmit={handleSubmit}>
          <span id="parmenterror" style={{ color: "red" }}></span>
          <div className="card">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>

          <button className="pay" type="submit" disabled={!stripe}>
            Pay ${(total(props.props) + 45.16 + 87.61).toFixed(2)}
          </button>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { props: state.reducer1.basket };
};

export default connect(mapStateToProps)(CheckoutForm);
