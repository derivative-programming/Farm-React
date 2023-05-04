import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik'; 
   
export interface ReportInputTextProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
    
export const ReportInputText: FC<ReportInputTextProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta] = useField(name);  
  
  const isInvalid:boolean = (meta.error && meta.touched) ? true : false;
      
  return (
    <div className="">
      <Form.Group controlId={name}
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label}</Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name + '-field'}
            type="text"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
            isInvalid={isInvalid}
            size="sm"
          />
          <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   