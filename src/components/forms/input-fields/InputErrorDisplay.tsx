import React, { FC, ReactElement } from "react"; 
import "../../../App.scss";
import {useField } from 'formik';
import {ErrorDisplay } from './ErrorDisplay';
   
export interface FormInputErrorDisplayProps {
  name: string,
  forInputName: string,
}
   
export const FormInputErrorDisplay: FC<FormInputErrorDisplayProps> = ({
  name,
  forInputName,
}): ReactElement => {
  const [, meta] = useField(forInputName);   

  const errorControlName = forInputName + "Error"

  const isInvalid:boolean = !!meta.error && !!meta.touched
      
  return (
    <div data-testid={name}> 
      {isInvalid ? (
          <ErrorDisplay name={errorControlName} errorCsv={meta.error}/> 
      ) : null}
    </div>
  );
};
   
export default ErrorDisplay;