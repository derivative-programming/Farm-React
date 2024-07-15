import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik'; 
   
export interface ReportInputSelectProps {
  name: string
  label: string
  options:ReportInputSelectOption[]
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
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta] = useField(name);  

  const isInvalid: boolean = !!meta.error && !!meta.touched
      
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
          <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group>  
    </div>
  );
};
   