/** @format */

import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Appformik from "./Appformik";
import backendfuncs from "./backend/backendfuncs";
import "./Login.css";
import validationschemas from "./content/validationschemas";
import Apptextfield from "./Apptextfield";
import Appsubmitbutton from "./Appsubmitbutton";

function Login(props) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [ver, setver] = useState(false);
  const [disable, setdisable] = useState(true);
  return (
    <Appformik
      schema={validationschemas.loginschema}
      initialvalues={{
        email: "",
        password: "",
      }}
      submit={async (e) => {
        const ok = await backendfuncs.signin(e, (i) => setver(i));
        if (ok.ok) {
          history.push(props.props[0]);
        }
      }}
    >
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
                <Apptextfield
                  type="text"
                  title={"email"}
                  label={"Email or username"}
                  style={{ flex: 1 }}
                  setdisabled={(e) => setdisable(e)}
                />
              </div>
              <button
                disabled={disable}
                style={{ width: "100%", fontWeight: "bold" }}
                onClick={() => setver(true)}
                className="createacc"
              >
                Continue
              </button>
              <hr style={{ color: "red", width: "100%" }}></hr>
              <button
                onClick={async (e) => {
                  await backendfuncs.signingoogle(e);
                  history.push(props.props[0]);
                }}
                className="google"
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
                }}
                onClick={async (e) => {
                  await backendfuncs.signinwithfb(e);
                  history.push(props.props[0]);
                }}
              >
                <img
                  src="https://img.icons8.com/material-sharp/35/ffffff/facebook.png"
                  alt=""
                />
                <p>Continue with Facebook</p>
              </button>
              <button
                onClick={async (e) => {
                  await backendfuncs.signinwithapple(e);
                  history.push(props.props[0]);
                }}
                className="google"
              >
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
                <span>
                  Not you?
                  <Link to="/login" onClick={() => setver(false)}>
                    Switch account
                  </Link>
                </span>
                <div className="signininput" style={{ margin: "10px" }}>
                  <Apptextfield
                    label={"Password"}
                    title={"password"}
                    type={show ? "text" : "Password"}
                    style={{ flex: 1 }}
                    InputProps={{
                      endAdornment: (
                        <span className="check">
                          <input
                            type="checkbox"
                            onClick={() => setShow(!show)}
                          />
                          Show
                        </span>
                      ),
                    }}
                  />
                </div>
                <Appsubmitbutton title="Sign in" style={{ width: "100%" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Appformik>
  );
}
const mapStateToProps = (state) => {
  return { props: state.reducer4.history };
};
export default connect(mapStateToProps)(Login);
