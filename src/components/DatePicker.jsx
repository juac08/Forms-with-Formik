import React from 'react';
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props) => {
    const  {name,label,...rest} = props;
    return (
        <div>
        <label htmlFor={name}>{label}</label>
        <Field name={name}>
        {
            ({field,form})=>{
                const {setFieldValue} =form;
                const {value}=field;
                return (
                <DateView id={name} {...rest} {...field} 
                selected={value} 
                onChange={val => setFieldValue(name,val)} />
                )}
        }
        </Field>

          <ErrorMessage component={TextError} name={name}/>  
        </div>
    )
}

export default DatePicker
