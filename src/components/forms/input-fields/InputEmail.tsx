import React, { FC, ReactElement } from "react";
import {  Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik'; 
import Parser from 'html-react-parser'; 
   
export interface FormInputEmailProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
  isRequired?:boolean
  detailText?: string
}
   
export const FormInputEmail: FC<FormInputEmailProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
  isVisible = true,
  isRequired = false,
  detailText = '',
}): ReactElement => {
  const [field, meta] = useField(name); 

  const errorDisplayControlName = name + "ErrorDisplay";
  
  const isInvalid:boolean = !!meta.error && !!meta.touched

  const isRequiredControl:boolean = isVisible && isRequired
      
  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start" data-testid={name + '-group'}>
          <Form.Label data-testid={name + '-label'}
            size="sm">{label} {isRequired && <span className="text-danger">*</span>}
          </Form.Label>
          <Form.Control
            // ref={inputRef}
            data-testid={name}
            type="email"
            placeholder={placeholder}
            {...field} 
            disabled={disabled}
            autoFocus={autoFocus}
            isInvalid={isInvalid} 
            required={isRequiredControl} 
            size="sm"
          />
          {detailText.length > 0 && (
            <Form.Text className="text-muted">
              {Parser(detailText)}
            </Form.Text>
          )}
          <Form.Control.Feedback data-testid={errorDisplayControlName} className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
      </Form.Group> 
  </div>
  );
};
   