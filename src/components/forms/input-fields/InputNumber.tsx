import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import { onKeyDown } from "../../../common/utilities"; 
   
export interface FormInputNumberProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
}
   
export const FormInputNumber: FC<FormInputNumberProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
  isVisible = true,
}): ReactElement => {
  const [field, meta] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = !!meta.error && !!meta.touched
      
  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="number"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
            onKeyDown={onKeyDown}
            isInvalid={isInvalid}
            size="sm"
          />
          <Form.Control.Feedback data-testid={errorDisplayControlName} className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   