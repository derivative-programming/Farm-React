import React, { FC, ReactElement } from "react";
import {  Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik'; 
   
export interface FormInputTextProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
    
export const FormInputText: FC<FormInputTextProps> = ({
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
    <div>
      <Form.Group controlId={name} className="mb-2 text-start" >
          <Form.Label>{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="text"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}  
            isInvalid={isInvalid}
          />
          <Form.Control.Feedback className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   