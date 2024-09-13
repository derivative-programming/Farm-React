import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import { useField } from 'formik';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FormInputErrorDisplay } from './InputErrorDisplay';
import Parser from 'html-react-parser'; 

export interface FormInputDateTimeProps {
  name: string;
  label: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  isVisible?: boolean;
  isRequired?: boolean;
  detailText?: string;
}

export const FormInputDateTime: FC<FormInputDateTimeProps> = ({
  name,
  label,
  placeholder,
  autoFocus = false,
  disabled = false,
  isVisible = true,
  isRequired = false,
  detailText = '',
}): ReactElement => {
  const [field, , helpers] = useField(name);

  const getDateObject = (value: string | null): Date | null => {
    if (!value) return null;
  
    // Check if the value represents 1/1/1753
    const minDate = moment("1753-01-01");
    const momentValue = moment(value, moment.ISO_8601);

    if (momentValue.isValid() && momentValue.isSame(minDate, 'day')) {
      return null;  // Hide the date if it's 1/1/1753
    }
    
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
 
  // Convert the selected local time to UTC for storage
  const handleDateChange = (date: Date | null) => { 
    if (date) {
      // Store UTC date as an ISO string in Formik 
      helpers.setValue(date.toISOString());
    } else {
      helpers.setValue(''); // Clear the value if no date is selected
    }
  };

  const errorDisplayControlName = name + "ErrorDisplay";

  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start">
        <Form.Label data-testid={name + '-label'}>
          {label} {isRequired && <span className="text-danger">*</span>}
        </Form.Label>
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
        {detailText.length > 0 && (
          <Form.Text className="text-muted">
            {Parser(detailText)}
          </Form.Text>
        )}
        <FormInputErrorDisplay name={errorDisplayControlName} forInputName={name} />
      </Form.Group>
    </div>
  );
};
