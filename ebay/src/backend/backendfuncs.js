/** @format */

import store from "../Store";
import { auth, google, apple, fb } from "../Firebase";

const register = async ({ email, password, last, first }) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    if (res.user) {
      await res.user.updateProfile({
        displayName: first + " " + last,
      });
      store.dispatch({
        type: "setuser",
        payload: {
          fname: first,
          lname: last,
          user: email,
        },
      });
      return { ok: true };
    }
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
};
const signin = async ({ email, password }, setver) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    if (res.user) {
      store.dispatch({
        type: "setuser",
        payload: {
          fname: res.user.displayName.match(/\S+/g)[0],
          lname: res.user.displayName.match(/\S+/g)[1],
          user: res.user.email,
        },
      });
      return { ok: true };
    }
  } catch (error) {
    setver(false);
    document.getElementById("error").innerText = error;
    return { ok: false };
  }
};
const signingoogle = async (e) => {
  e.preventDefault();
  await auth
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
      }
    })
    .catch((e) => console.log(e));
};
const signinwithapple = async (e) => {
  e.preventDefault();
  await auth
    .signInWithPopup(apple)
    .then((res) => {})
    .catch((e) => alert(e.message));
};
const signinwithfb = async (e) => {
  e.preventDefault();
  await auth
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
    })
    .catch((e) => alert(e.message));
};
const funcs = {
  register,
  signin,
  signinwithfb,
  signinwithapple,
  signingoogle,
};
export default funcs;
