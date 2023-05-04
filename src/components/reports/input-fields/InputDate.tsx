import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik';
import moment from "moment";
import { DatePicker } from "antd";
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputDateProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputDate: FC<ReportInputDateProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, meta, helpers] = useField(name);  

  const getDisplayDateTime = () => {
    const dt:moment.Moment = moment.utc(
        field.value,
        moment.ISO_8601
      );
    if(dt.isValid()){
      return dt.local();
    } else {
      return moment();
    } 
  }

  const selectedDateTimeLocal:moment.Moment = getDisplayDateTime();
    
  const errorDisplayControlName = name + "ErrorDisplay";
  
  return (
    <div className=" ">
      <Form.Group controlId={name} 
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label}</Form.Label>
          <DatePicker
            // ref={inputRef}
            size="small"
            data-testid={name + '-field'} 
            aria-label={name} 
            placeholder={placeholder}
            name={field.name}
            defaultValue={selectedDateTimeLocal}
            value={selectedDateTimeLocal}
            onChange={(e) => helpers.setValue(moment(e).utc().format("YYYY-MM-DDTHH:mm"))}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
          />
      </Form.Group>
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
  </div>
  );
};
   