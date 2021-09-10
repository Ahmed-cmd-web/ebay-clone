/** @format */

import { useFormikContext } from "formik";
import React from "react";

const Appsubmitbutton = ({ title = "Create account",...style }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <button
      {...style}
      className="createacc"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      {title}
    </button>
  );
};

export default Appsubmitbutton;
