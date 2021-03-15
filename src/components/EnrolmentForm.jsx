import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";
const EnrolmentForm = () => {
  const dropDownOptions = [
    { key: "Select Framework", value: "" },
    { key: "React", value: "React" },
    { key: "Vue", value: "Vue" },
    { key: "Angular", value: "Angular" },
  ];
  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skill: [],
    coursedate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    skill: Yup.array().required("Required"),
    coursedate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    onSubmitProps.resetForm();
  };

  return (
    <div className="form-control" style={{ height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Enrolment Form</h1>
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
              control="textarea"
              label="Bio"
              name="bio"
              placeholder="Enter the bio"
            />
            <FormikControl
              control="select"
              label="Course"
              name="course"
              options={dropDownOptions}
            />
            <FormikControl
              control="checkbox"
              label="Skill Set"
              name="skill"
              options={checkboxOptions}
            />
            <FormikControl
              control="date"
              label="Course Date"
              name="coursedate"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EnrolmentForm;
