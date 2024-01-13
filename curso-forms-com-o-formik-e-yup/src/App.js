import React from "react";
import "./styles.css";
import MaskedInput from "react-text-mask";
import * as yup from "yup";

import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: ""
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("This info. is required.")
        .email("Fill up with valid email."),
      password: yup
        .string()
        .required("This info. is required.")
        .matches(/(?=[a-zA-z])/, "This info should have at least one letter")
        .matches(/(?=[0-9])/, "This info should have at least one number")
        .min(3, "This info. required minimum 3."),
      phone: yup
        .string()
        .required("This info is required.")
        .min(13, "This info shoudl have at least 10.")
    }),
    onSubmit: values => {
      const registerData = {
        email: values.email.toLowerCase(),
        password: values.password,
        phone: values.phone
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
      };
      console.log(registerData);
    }
  });
  console.log(formik);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          type="email"
          autoComplete="off"
          maxLength="20"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email ? <small>{formik.errors.email}</small> : null}
      </div>
      <div>
        <input
          type="password"
          autoComplete="off"
          maxLength="10"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password ? (
          <small>{formik.errors.password}</small>
        ) : null}
      </div>
      <div>
        <MaskedInput
          autoComplete="off"
          mask={[
            "(",
            /[0-9]/,
            /[0-9]/,
            ")",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            "-",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/
          ]}
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone ? <small>{formik.errors.phone}</small> : null}
      </div>
      <input type="submit" disabled={!formik.isValid} value="Enviar" />
    </form>
  );
}
