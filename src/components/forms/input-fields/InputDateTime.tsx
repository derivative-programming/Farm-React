import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import moment from "moment";
import { DatePicker } from "antd";
import {FormInputErrorDisplay } from './InputErrorDisplay';
   
export interface FormInputDateTimeProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const FormInputDateTime: FC<FormInputDateTimeProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name); 

  const getDisplayDateTime = () => {
    const dt:moment.Moment = moment.utc(
        field.value,
        moment.ISO_8601
      );
    if(dt.isValid()){
      return dt.local();
    } else {
      return moment();
    } 
  }

  const selectedDateTimeLocal:moment.Moment = getDisplayDateTime();

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
  
  return (
    <div className="">
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label>{label}</Form.Label>
          <DatePicker
            // ref={inputRef}
            showTime={true}
            format="M/D/YYYY h:mm A"
            data-testid={name} 
            aria-label={name} 
            placeholder={placeholder}
            name={field.name}
            defaultValue={selectedDateTimeLocal}
            value={selectedDateTimeLocal}
            onChange={(e) => helpers.setValue(moment(e).utc().format("YYYY-MM-DDTHH:mm"))}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
          /> 
      </Form.Group>
      <FormInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   