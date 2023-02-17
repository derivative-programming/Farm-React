import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../App.scss";
import {useField } from 'formik';
import moment from "moment";
import { DatePicker } from "antd";
import {InputErrorDisplay } from './InputErrorDisplay';
   
export interface InputDateTimeProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const InputDateTime: FC<InputDateTimeProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  return (
    <div className="custom-form-control">
      <Form.Group controlId={name}>
          <Form.Label>{label}</Form.Label>
          <DatePicker
            // ref={inputRef}
            showTime={{ format: "hh:mm A" }}
            data-testid={name} 
            aria-label={name} 
            placeholder={placeholder}
            name={field.name}
            value={moment(field.value,"M/D/YYYY h:m A")}
            onChange={(e) => helpers.setValue(moment(e).format("M/D/YYYY h:m A"))}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
          />
      </Form.Group>
      <InputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   