import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputSelectProps {
  name: string
  label: string
  options:ReportInputSelectOption[]
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}

export interface ReportInputSelectOption {
  label: string
  value: string
}
   
export const ReportInputSelect: FC<ReportInputSelectProps> = ({
  name,
  label,
  options,
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
          <Form.Select
              data-testid={name}
              aria-label={name}  
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
          >
              <option>Please Select One</option>
              {options.map((item, index) => {
                  return (
                  <option
                      data-test-option-id="select-option"
                      key={index}
                      value={item.value}
                  >
                    {item.label}
                  </option>
                  );
              })}
          </Form.Select>
      </Form.Group> 
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
    </div>
  );
};
   