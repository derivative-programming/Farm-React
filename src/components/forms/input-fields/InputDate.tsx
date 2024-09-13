import React, { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";
import "../../../App.scss";
import { useField } from 'formik';
import moment from "moment";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FormInputErrorDisplay } from './InputErrorDisplay';
import Parser from 'html-react-parser'; 

export interface FormInputDateProps {
  name: string;
  label: string;
  placeholder?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  isVisible?: boolean;
  isRequired?: boolean;
  detailText?: string;
}

export const FormInputDate: FC<FormInputDateProps> = ({
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
    const dt: moment.Moment = moment.utc(field.value, moment.ISO_8601);
    if (dt.isValid()) {
      return dt.toDate();
    } else {
      return null;
    }
  };

  const selectedDateTimeLocal = getDisplayDateTime();
  const errorDisplayControlName = name + "ErrorDisplay";

  return (
    <div className="" hidden={!isVisible}>
      <Form.Group controlId={name} className="mb-2 text-start"> 
        <Form.Label data-testid={name + '-label'} className="d-block">
          {label} {isRequired && <span className="text-danger">*</span>}
        </Form.Label>
 
        <DatePicker
          selected={selectedDateTimeLocal}
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
          className="form-control d-block"
          placeholderText={placeholder}
          dateFormat="MM/dd/yyyy"
          autoFocus={autoFocus}
          disabled={disabled}
        />
 
        {detailText.length > 0 && (
          <Form.Text className="text-muted d-block mt-2">
            {Parser(detailText)}
          </Form.Text>
        )}
 
        <FormInputErrorDisplay name={errorDisplayControlName} forInputName={name} />
      </Form.Group>
    </div>
  );
};
