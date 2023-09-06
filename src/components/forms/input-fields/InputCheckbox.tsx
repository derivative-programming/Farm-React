import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik'; 
   
export interface FormInputCheckboxProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
}
   
export const FormInputCheckbox: FC<FormInputCheckboxProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
  isVisible = true,
}): ReactElement => {
  const [field, meta, helpers] = useField(name);  

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mt-3 mb-3 text-start"> 
          <Form.Check
            // ref={inputRef}
            data-testid={name}
            type="checkbox"
            placeholder={placeholder}
            checked={field.value}
            name={field.name}
            value={field.value}
            onChange={(e) => {helpers.setValue(e.target.checked);}}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
            label={label}
            isInvalid={isInvalid} 
          />
          <Form.Control.Feedback className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   