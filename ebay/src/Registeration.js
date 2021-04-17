/** @format */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Registeration.css";
import { auth, google, apple, fb } from "./Firebase";
import store from "./Store";
import { connect } from "react-redux";

function Registeration(props) {
  const show = () => {
    document.getElementById("pass").type === "password"
      ? (document.getElementById("pass").type = "text")
      : (document.getElementById("pass").type = "password");
  };
  const history = useHistory();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then((user) => {
        if (user) {
          user.user
            .updateProfile({
              displayName: first + " " + last,
            })
            .then(() => console.log("success"))
            .catch((err) => console.log(err.message));
          store.dispatch({
            type: "setuser",
            payload: {
              fname: first,
              lname: last,
              user: email,
            },
          });
          history.push(props.prop.reducer1.history[0]);
        }
      })
      .catch((e) => (document.getElementById("err").innerText = e.message));
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
          history.push(props.prop.reducer1.history[0]);
        }
      })
      .catch((e) => console.log(e.code));
  };
  const signinwithapple = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(apple)
      .then((res) => {
        history.push(props.prop.reducer1.history[0]);
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
        history.push(props.prop.reducer1.history[0]);
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="Registeration">
      <div className="Registerationcon">
        <div className="reghead">
          {" "}
          <Link to="/">
            <img
              className="logo2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
              alt=""
            />
          </Link>
          <span>
            Already a member?
            <Link to="/login">Sign in</Link>
          </span>
        </div>

        <div className="regcon">
          <h1>Create an account </h1>

          <div className="regtitle">
            <div className="regform">
              <span
                id="err"
                style={{
                  position: "relative",
                  bottom: "10px",
                  top: "10px",
                  color: "red",
                }}
              ></span>
              <form className="regleft">
                <div className="regrow">
                  <div className="regrowl">
                    <input
                      className="in"
                      type="text"
                      onChange={(e) => setfirst(e.target.value)}
                      required
                    />
                    <label className="la">First Name</label>
                  </div>
                  <div className="regrowr">
                    {" "}
                    <input
                      className="in"
                      type="text"
                      onChange={(e) => setlast(e.target.value)}
                      required
                    />
                    <label className="la">Last Name</label>
                  </div>
                </div>
                <div className="regemail">
                  <input
                    className="in"
                    type="text"
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                  <label className="la">Email</label>
                </div>
                <div className="regpass">
                  <input
                    className="in"
                    type="password"
                    onChange={(e) => setpass(e.target.value)}
                    id="pass"
                    required
                  />
                  <label className="la">Password</label>
                  <span className="check">
                    <input type="checkbox" onClick={show} />
                    Show
                  </span>
                </div>
                <div className="toc">
                  <p>
                    By Creating an account, you agree to our User Agreement and
                    acknowledge reading our User Privacy Notice.
                  </p>
                </div>
                <button className="createacc" value="submit" onClick={register}>
                  Create account
                </button>
              </form>
            </div>

            <div className="regright">
              <button
                onClick={signingoogle}
                className="google"
                style={{ marginRight: "100px" }}
              >
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
                  marginRight: "100px",
                }}
                onClick={signinwithfb}
              >
                <img
                  src="https://img.icons8.com/material-sharp/35/ffffff/facebook.png"
                  alt=""
                />
                <p>Continue with Facebook</p>
              </button>
              <button
                onClick={signinwithapple}
                className="google"
                style={{ marginRight: "100px" }}
              >
                <img
                  className="googlelogo"
                  src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19666.png"
                  alt=""
                />
                <p>Continue with Apple</p>
              </button>
            </div>
          </div>
          <hr
            style={{
              width: "0px",
              height: "480px",
              position: "relative",
              bottom: "520px",
              backgroundColor: "gray",
            }}
          ></hr>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { prop: state };
};

export default connect(mapStateToProps)(Registeration);
