import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputEmailProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputEmail: FC<ReportInputEmailProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="">
      <Form.Group controlId={name} className="mt-2">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="email"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
            isInvalid={isInvalid}
          />
          <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   