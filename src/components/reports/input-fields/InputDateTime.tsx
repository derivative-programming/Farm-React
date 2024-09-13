import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {ReportInputErrorDisplay } from './InputErrorDisplay';
import Parser from 'html-react-parser'; 
   
export interface ReportInputDateTimeProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
}
   
export const ReportInputDateTime: FC<ReportInputDateTimeProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
}): ReactElement => {
  const [field, , helpers] = useField(name);

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

  const getDateObject = (value: string | null): Date | null => {
    if (!value) return null;
  
    // Corrected regex without unnecessary escapes
    if (/Z|[+-]\d{2}:\d{2}$/.test(value)) {
      // If the string contains 'Z' or a time zone offset, create the date directly
      return new Date(value);
    } else {
      // If no time zone is provided, treat it as UTC by appending 'Z'
      return new Date(value + "Z");
    }
  };
  

  // Get the current date in the correct format for the DatePicker
  const selectedDateTime = getDateObject(field.value);

  const errorDisplayControlName = name + "ErrorDisplay";
  
  // Convert the selected local time to UTC for storage
  const handleDateChange = (date: Date | null) => { 
    if (date) {
      // Store UTC date as an ISO string in Formik 
      helpers.setValue(date.toISOString());
    } else {
      helpers.setValue(''); // Clear the value if no date is selected
    }
  };
  
  return (
    <div className="">
      <Form.Group controlId={name}
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label}</Form.Label>
          
          <br />
          <DatePicker
            selected={selectedDateTime}   // Display local time
            onChange={handleDateChange}   // Convert local to UTC for storage, preserving time
            onBlur={field.onBlur}
            className="form-control"
            placeholderText={placeholder}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="M/d/yyyy h:mm aa"
            autoFocus={autoFocus}
            disabled={disabled}
            
          />
          <br />
      </Form.Group>
      
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
      
  </div>
  );
};
   