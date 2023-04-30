import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {FormInputErrorDisplay } from './InputErrorDisplay';
   
export interface FormInputTextAreaProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const FormInputTextArea: FC<FormInputTextAreaProps> = ({
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
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            as="textarea"
            data-testid={name}
            type="text"
            rows={3}
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
   