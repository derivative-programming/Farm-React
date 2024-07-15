import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik'; 
   
export interface FormInputSelectProps {
  name: string
  label: string
  options:FormInputSelectOption[]
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
}

export interface FormInputSelectOption {
  label: string
  value: string
}
   
export const FormInputSelect: FC<FormInputSelectProps> = ({
  name,
  label,
  options, 
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
          <Form.Select
              data-testid={name}
              aria-label={name}  
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
              isInvalid={isInvalid}
              size="sm"
          >
              <option value="00000000-0000-0000-0000-000000000000">Please Select One</option>
              {options.map((item) => {
                  return (
                  <option
                      data-test-option-id="select-option"
                      key={item.value}
                      value={item.value}
                  >
                    {item.label}
                  </option>
                  );
              })}
          </Form.Select>
          <Form.Control.Feedback data-testid={errorDisplayControlName} className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>  
    </div>
  );
};
   