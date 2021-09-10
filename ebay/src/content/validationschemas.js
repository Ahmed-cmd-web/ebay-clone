/** @format */

import * as yup from "yup";

const regschema = yup.object().shape({
  first: yup
    .string()
    .min(3, "too short for a name don't you think ?")
    .label("first Name")
    .required(),
  last: yup
    .string()
    .min(3, "too short for a name don't you think ?")
    .label("Last Name")
    .required(),

  email: yup.string().email().label("Email").required(),
  password: yup.string().min(5).label("Password").required(),
});

const loginschema = yup.object().shape({
  email: yup.string().email().label("Email").required(),
  password: yup.string().min(5).label("Password").required(),
});

const schemas = { regschema, loginschema };

export default schemas;
