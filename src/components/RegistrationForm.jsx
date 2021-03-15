import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

const RegistrationForm = () => {
  const select = [
    { key: "Phone", value: "Phone" },
    { key: "Email", value: "Email" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirm: "",
    modofcontact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required"),
    mofcontact: Yup.string().required("Required"),
    phone: Yup.string().when("mofcontact", {
      is: "Phone",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.resetForm();
  };
  return (
    <div className="form-control" style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Registration Form</h1>
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
            <FormikControl
              control="input"
              type="password"
              label="Confirm Password"
              name="confirm"
              placeholder="Confirm Password"
            />
            <FormikControl
              control="radio"
              type="select"
              label="Mode Of Contact"
              name="mofcontact"
              options={select}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone"
              name="phone"
              placeholder="Enter Your Phone Number"
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
  );
};

export default RegistrationForm;
