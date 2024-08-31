import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import {useField } from 'formik';
import moment from "moment";
import { DatePicker } from "antd";
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
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

  const selectedDateTimeLocal:moment.Moment = getDisplayDateTime();

  const errorDisplayControlName = name + "ErrorDisplay";
  
  return (
    <div className="">
      <Form.Group controlId={name}
        data-testid={name} className="mt-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label}</Form.Label>
          <DatePicker
            // ref={inputRef}
            size="small"
            showTime={true}
            format="M/D/YYYY h:mm A"
            data-testid={name + '-field'} 
            aria-label={name} 
            placeholder={placeholder}
            name={field.name}
            defaultValue={selectedDateTimeLocal}
            value={selectedDateTimeLocal}
            onChange={(date) => {
              if (date) {
                const momentDate = moment(date); // Convert to moment object
                if (momentDate.isValid()) {
                  helpers.setValue(momentDate.utc().format("YYYY-MM-DDTHH:mm"));
                } else {
                  helpers.setValue('');
                }
              } else {
                helpers.setValue(''); // Handle the case where date is null
              }
            }}
            onBlur={field.onBlur} 
            disabled={disabled}
            autoFocus={autoFocus}
          />
      </Form.Group>
      
      <ReportInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
      
  </div>
  );
};
   