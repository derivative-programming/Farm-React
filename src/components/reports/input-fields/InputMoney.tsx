import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import { onKeyDown } from "../../../common/utilities";
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputMoneyProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputMoney: FC<ReportInputMoneyProps> = ({
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
      <Form.Group controlId={name} className="mt-2 text-start">
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
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
          </InputGroup>
      </Form.Group> 
  </div>
  );
};
   