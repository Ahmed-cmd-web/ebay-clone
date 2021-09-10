/** @format */

import { TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { useFormikContext } from "formik";

const Apptextfield = ({
  title,
  type,
  label,
  setdisabled = () => null,
  ...styles
}) => {
  const {
    handleChange,
    errors,
    touched,
    setFieldTouched,
    dirty,
    
  } = useFormikContext();
  useEffect(() => setdisabled((!errors[title] && !dirty) || errors[title]), [
    errors,
    title,
    dirty,
    setdisabled,
  ]);
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <TextField
        {...styles}
        label={label}
        required
        onBlur={() => setFieldTouched(title)}
        onChange={handleChange(title)}
        type={type}
      />
      {errors[title] && touched[title] && (
        <p style={{ fontSize: "10px", color: "red" }}>{errors[title]}</p>
      )}
    </div>
  );
};

export default Apptextfield;
