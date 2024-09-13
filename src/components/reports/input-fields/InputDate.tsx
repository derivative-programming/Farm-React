import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"; 
import {ReportInputErrorDisplay } from './InputErrorDisplay';
import Parser from 'html-react-parser'; 
   
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
  const [field, , helpers] = useField(name);

  const getDisplayDateTime = () => {
    const dt: moment.Moment = moment(field.value, moment.ISO_8601);
    if (dt.isValid()) {
      return dt.toDate();
    } else {
      return null;
    }
  };

  const selectedDateTimeLocal = getDisplayDateTime();
    
  const errorDisplayControlName = name + "ErrorDisplay";
  
  return (
    <div className=" ">
      <Form.Group controlId={name} 
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label}</Form.Label>
          <DatePicker
            selected={selectedDateTimeLocal}
            onChange={(date) => {
            if (date) {
              const momentDate = moment.utc(date); // Convert to moment object
              if (momentDate.isValid()) {
                helpers.setValue(momentDate.local().startOf('day').format("YYYY-MM-DDTHH:mm"));
              } else {
                helpers.setValue('');
              }
            } else {
              helpers.setValue(''); // Handle the case where date is null
            }
          }}
          onBlur={field.onBlur}
          className="form-control d-block"
          placeholderText={placeholder}
          dateFormat="MM/dd/yyyy"
          autoFocus={autoFocus}
          disabled={disabled}
        />
      </Form.Group>
      
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
      
  </div>
  );
};
   