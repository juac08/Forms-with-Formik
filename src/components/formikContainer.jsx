import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

const FormikContainer = () => {
  const dropDownOptions = [
    { key: "Select Framwork", value: "" },
    { key: "React", value: "React" },
    { key: "Vue", value: "Vue" },
    { key: "Angular", value: "Angular" },
  ];
  const radioOptions = [
    { key: "High", value: "High" },
    { key: "Medium", value: "Medium" },
    { key: "Normal", value: "Normal" },
  ];
  const checkboxOptions = [
    { key: "High", value: "High" },
    { key: "Medium", value: "Medium" },
    { key: "Normal", value: "Normal" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    chooseOption: "",
    checkboxOption: [],
    birthdate:null
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    chooseOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthdate:Yup.date().required('Required').nullable()
  });

  const onSubmit = (values) => console.log("Form Data", values);

  return (
      <div className='form-control'>
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
            control="textarea"
            type="text"
            label="Description"
            name="description"
            placeholder="Enter Description"
          />
          <FormikControl
            control="select"
            label="Select a Framwork"
            name="selectOption"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Level of Expertise"
            name="chooseOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Other Level"
            name="checkboxOption"
            options={checkboxOptions}
          />
          <FormikControl
            control="date"
            label="Pick Date"
            name="birthdate"
          />
          {<button type="submit">Submit</button>}
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default FormikContainer;
