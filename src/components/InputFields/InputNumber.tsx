import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../App.scss";
import {useField } from 'formik';
import { onKeyDown } from "../../common/utilities";
import {InputErrorDisplay } from './InputErrorDisplay';
   
export interface InputNumberProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const InputNumber: FC<InputNumberProps> = ({
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
            type="number"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
            onKeyDown={onKeyDown}
          />
      </Form.Group>
      <InputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   