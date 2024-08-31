import React, { FC, ReactElement } from "react";
import {  Form } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import moment from "moment";
import { DatePicker } from "antd";
import {FormInputErrorDisplay } from './InputErrorDisplay';
   
export interface FormInputDateTimeProps {
  name: string
  label: string
  placeholder?: string
  autoFocus?:boolean
  disabled?: boolean
  isVisible?:boolean
  isRequired?:boolean
  detailText?: string
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
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start">
          <Form.Label data-testid={name + '-label'}>{label} {isRequired && <span className="text-danger">*</span>}
          </Form.Label>
          <DatePicker
            // ref={inputRef}
            size="small"
            showTime={true}
            format="M/D/YYYY h:mm A"
            data-testid={name} 
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
          {detailText.length > 0 && (
            <Form.Text className="text-muted">
              {detailText}
            </Form.Text>
          )}
        <FormInputErrorDisplay name={errorDisplayControlName} forInputName={name} /> 
      </Form.Group>
      
  </div>
  );
};
   