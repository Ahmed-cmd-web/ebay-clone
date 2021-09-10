/** @format */

import React from "react";
import { Formik } from "formik";

const Appformik = ({ schema, initialvalues, submit, children }) => {
  return (
    <Formik
      initialValues={initialvalues}
      validationSchema={schema}
      onSubmit={submit}
      
    >
      {() =>
        children
      }
    </Formik>
  );
};

export default Appformik;
