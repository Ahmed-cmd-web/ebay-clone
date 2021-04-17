/** @format */
import "./App.css";
import Header from "./Header";
import Headertop from "./Headertop";
import Headermid from "./Headermid";
import Body from "./Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bottom from "./Bottom";
import Productinfo from "./Productinfo";
import "react-device-emulator/lib/styles/style.css";
import Registeration from "./Registeration";
import { auth, db } from "./Firebase";
import store from "./Store";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import Cart from "./Cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51IhCAHJlx8WfFvjNJbGmAHDWBcNZnWv3S8Ka4lkdD69tjXIjhjwnQuYcNLQUB7UmwblYDLvHMxXz4sqXWHmTpNGn00TQoywPz4"
);

function App(props) {
  var { basket } = props.prop.reducer1;
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        store.dispatch({
          type: "setuser",
          payload: {
            fname: user.displayName.match(/\S+/g)[0],
            lname: user.displayName.match(/\S+/g)[1],
            user: user.email,
          },
        });
        db.doc(`users/${auth.currentUser.email}`)
          .get()
          .then((i) => {
            let info = i.data().basket;

            if (info) {
              info.map((i) =>
                store.dispatch({
                  type: "add",
                  payload: {
                    title: i.title,
                    quantity: i.quantity,
                    price: i.price,
                    expiry: i.expiry,
                    condition: i.condition,
                    rating: i.rating,
                    src: i.src,
                  },
                })
              );
            } else {
              console.log("basket empty");
            }
          })
          .catch((err) => console.log(err.message));
      } else {
        store.dispatch({
          type: "removeuser",
        });
      }
    });
  }, []);
  useEffect(() => {
    if (auth.currentUser) {
      db.doc(`users/${auth.currentUser.email}`)
        .set({ basket })
        .catch((e) => console.log(e.message));
    }
  }, [basket]);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registeration">
            <Registeration />
          </Route>
          <Route path="/productdetails">
            <Headertop />
            <Headermid />
            <Productinfo />
          </Route>
          <Route path="/cart">
            <Headertop />
            <Headermid />
            <Cart />
            <Bottom />
          </Route>
          <Route path="/checkout">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Body />
            <Bottom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (s) => {
  return { prop: s };
};

export default connect(mapStateToProps)(App);
