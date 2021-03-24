import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import Image from './avatar.png'

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
  return (
    <div className='login-wrapper'>
    <div className="form-control">
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <img src={Image} alt="i"/>
      <div className="underline"></div>


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
              placeholder="Enter Email"
            />
            <FormikControl
              control="input"
              type="password"
              label="Password"
              name="password"
              placeholder="Enter Password"
            />
            <div className='btn'>
            <Button
              type="submit"
              disabled={!formik.isValid}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
};

export default LoginForm;
