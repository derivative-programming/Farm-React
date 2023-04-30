import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik'; 
   
export interface ReportInputCheckboxProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputCheckbox: FC<ReportInputCheckboxProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name);   
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="">
      <Form.Group controlId={name} 
        data-testid={name}
        className="mt-2 text-start"> 
          <Form.Check
            // ref={inputRef}
            data-testid={name + '-field'}
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
          <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   