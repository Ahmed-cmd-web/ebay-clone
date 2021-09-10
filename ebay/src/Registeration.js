/** @format */

import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Registeration.css";
import { connect } from "react-redux";
import Appformik from "./Appformik";
import Appsubmitbutton from "./Appsubmitbutton";
import Apptextfield from "./Apptextfield";
import backendfuncs from "./backend/backendfuncs";
import validationschemas from "./content/validationschemas";

function Registeration(props) {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  return (
    <Appformik
      schema={validationschemas.regschema}
      initialvalues={{
        first: "",
        last: "",
        email: "",
        password: "",
      }}
      submit={async (e) => {
        const res = await backendfuncs.register(e);
        if (!res.ok) return setErr("This email exists. ");
        history.push(props.prop.reducer4.history[0]);
      }}
    >
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
                <span id="error" style={{ color: "red" }}>
                  {err}
                </span>
                <form className="regleft">
                  <div className="regrow">
                    <Apptextfield
                      label={"First Name"}
                      title={"first"}
                      type={"text"}
                      style={{ paddingRight: "5px" }}
                    />
                    <Apptextfield
                      label={"Last Name"}
                      title={"last"}
                      type={"text"}
                    />
                  </div>
                  <div className="regrow">
                    <Apptextfield
                      label={"Email"}
                      title={"email"}
                      type={"email"}
                      style={{ flex: 1, width: "100%" }}
                    />
                  </div>

                  <div className="regrow">
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

                  <div className="toc">
                    <p>
                      By Creating an account, you agree to our User Agreement
                      and acknowledge reading our User Privacy Notice.
                    </p>
                  </div>
                  <Appsubmitbutton />
                </form>
              </div>

              <div className="regright">
                <button
                  onClick={async (e) => {
                    await backendfuncs.signingoogle(e);
                    history.push(props.prop.reducer4.history[0]);
                  }}
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
                  onClick={async (e) => {
                    await backendfuncs.signinwithfb(e);
                    history.push(props.prop.reducer4.history[0]);
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
                    history.push(props.prop.reducer4.history[0]);
                  }}
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
    </Appformik>
  );
}

const mapStateToProps = (state) => {
  return { prop: state };
};

export default connect(mapStateToProps)(Registeration);
