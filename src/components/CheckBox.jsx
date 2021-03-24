import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import Checkbox from '@material-ui/core/Checkbox';


const CheckBox = (props) => {
  const { options, name, label, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <br />
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
              <div className='radio'>
                <Checkbox
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
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

export default CheckBox;
