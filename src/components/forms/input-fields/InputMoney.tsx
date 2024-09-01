import React, { FC, ReactElement } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import { onKeyDown } from "../../../common/utilities"; 
import Parser from 'html-react-parser'; 
   
export interface FormInputMoneyProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
  isRequired?:boolean
  detailText?: string
}
   
export const FormInputMoney: FC<FormInputMoneyProps> = ({
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
      
  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label} {isRequired && <span className="text-danger">*</span>}
          </Form.Label>
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
              placeholder={placeholder}
              required={isRequired} 
              size="sm"
            />
          </InputGroup>
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
   