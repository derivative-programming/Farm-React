import React, { FC, ReactElement} from "react";
import { Form, InputGroup } from "react-bootstrap";
import {useField } from 'formik';
import { onKeyDown } from "../../../common/utilities"; 
   
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
      <Form.Group controlId={name}
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}
            size="sm">{label}</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              // className="mb-0"
              data-testid={name + '-field'}  
              aria-label={name} 
              type="number"
              {...field} 
              disabled={disabled}
              autoFocus={autoFocus}
              onKeyDown={onKeyDown}
              isInvalid={isInvalid}
              size="sm"
            />
            <Form.Control.Feedback  className="text-start" type="invalid">{meta.error}</Form.Control.Feedback>
          </InputGroup>
      </Form.Group> 
  </div>
  );
};
   