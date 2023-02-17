import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import "../../App.scss";
import {useField } from 'formik';
import { onKeyDown } from "../../common/utilities";
import {InputErrorDisplay } from './InputErrorDisplay';
   
export interface InputMoneyProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const InputMoney: FC<InputMoneyProps> = ({
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
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              // className="mb-0"
              data-testid={name}  
              aria-label={name} 
              type="number"
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
              onKeyDown={onKeyDown}
            />
          </InputGroup>
      </Form.Group>
      <InputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   