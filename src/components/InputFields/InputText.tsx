import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../App.scss";
import {useField } from 'formik';
import {InputErrorDisplay } from './InputErrorDisplay';
   
export interface InputTextProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const InputText: FC<InputTextProps> = ({
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
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="text"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
          />
      </Form.Group>
      <InputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   