/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth, google, apple, fb } from "./Firebase";
import "./Login.css";
import store from "./Store";

function Login(props) {
  
  const history = useHistory();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [ver, setver] = useState(false);
  const [disable, setdisable] = useState(true);
  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((user) => {
        if (user) {
          console.log(user.user);
          store.dispatch({
            type: "setuser",
            payload: {
              fname: user.user.displayName.match(/\S+/g)[0],
              lname: user.user.displayName.match(/\S+/g)[1],
              user: user.user.email,
            },
          });
          history.push(props.props[0]);
        }
      })
      .catch((e) => {
        setver(false);
        return (document.getElementById("error").innerText = e.message);
      });
  };
  const check = (e) => {
    if (e.target.value.length > 0) {
      setpass(e.target.value);
      setdisable(false);
    } else {
      setdisable(true);
    }
  };
  const signingoogle = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(google)
      .then((credentials) => {
        if (credentials) {
          store.dispatch({
            type: "setuser",
            payload: {
              fname: credentials.additionalUserInfo.profile.given_name,
              lname: credentials.additionalUserInfo.profile.family_name,
              user: credentials.additionalUserInfo.profile.email,
            },
          });
          history.push(props.props[0]);
        }
      })
      .catch((e) => console.log(e.code));
  };
  const signinwithapple = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(apple)
      .then((res) => {
        history.push(props.props[0]);
      })
      .catch((e) => alert(e.message));
  };
  const signinwithfb = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(fb)
      .then((credentials) => {
        store.dispatch({
          type: "setuser",
          payload: {
            fname: credentials.additionalUserInfo.profile.first_name,
            lname: credentials.additionalUserInfo.profile.last_name,
            user: credentials.additionalUserInfo.profile.email,
          },
        });
        history.push(props.props[0]);
      })
      .catch((e) => alert(e.message));
  };
  const trans = () => {
    setver(true);
  };

  return (
    <div className="login">
      <div className="logincon">
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
        {ver === false ? (
          <div className="signincon">
            <div className="signtitle">
              <h1>Hello</h1>
              <span>
                Sign in to eBay or{" "}
                <Link style={{ color: "blue" }} to="/registeration">
                  create an account
                </Link>{" "}
              </span>
            </div>
            <span id="error" style={{ color: "red" }}></span>
            <div className="signininput">
              <input
                className="username"
                type="text"
                onChange={(e) => setemail(e.target.value)}
                required
              />{" "}
              <label className="la2">Email or username</label>
            </div>
            <button
              style={{ width: "100%", fontWeight: "bold" }}
              onClick={trans}
              className="createacc"
            >
              Continue
            </button>
            <hr style={{ color: "red", width: "100%" }}></hr>
            <button onClick={signingoogle} className="google">
              <img
                className="googlelogo"
                src="https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png"
                alt=""
              />
              <p>Continue with Google</p>
            </button>
            <button
              className="google"
              style={{
                backgroundColor: "#4267b2",
                color: "white",
              }}
              onClick={signinwithfb}
            >
              <img
                src="https://img.icons8.com/material-sharp/35/ffffff/facebook.png"
                alt=""
              />
              <p>Continue with Facebook</p>
            </button>
            <button onClick={signinwithapple} className="google">
              <img
                className="googlelogo"
                src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png"
                alt=""
              />
              <p>Continue with Apple</p>
            </button>
          </div>
        ) : (
          <div
            className="signincon"
            style={{ justifyContent: "flex-start", paddingTop: "5%" }}
          >
            <div className="signtitle" style={{ width: "100%" }}>
              <h1>Welcome</h1>
              <span>{email}</span>
              <span>
                Not you?
                <Link to="/login" onClick={() => setver(false)}>
                  Switch account
                </Link>
              </span>
              <div className="signininput" style={{ marginTop: "5%" }}>
                <input
                  className="passin"
                  type="password"
                  onChange={check}
                  required
                />{" "}
                <label className="passla">Password</label>
              </div>
              <button
                style={{ width: "100%", fontWeight: "bold" }}
                className="createacc"
                disabled={disable}
                onClick={signin}
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { props: state.reducer1.history };
};
export default connect(mapStateToProps)(Login);
