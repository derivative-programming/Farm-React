import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik'; 
   
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

  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="" >
      <Form.Group controlId={name}
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label}</Form.Label>
          <Form.Select
              data-testid={name + '-field'}
              aria-label={name}  
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
              isInvalid={isInvalid}
              size="sm"
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
          <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>  
    </div>
  );
};
   