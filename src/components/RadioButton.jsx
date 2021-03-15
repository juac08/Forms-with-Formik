import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Radio from '@material-ui/core/Radio';

const RadioButton = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <br />
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <div className="radio">
                  <label htmlFor={option.value}>{option.key}</label>
                  <Radio
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                </div>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default RadioButton;
