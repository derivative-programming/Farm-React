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
  const [field, meta, helpers] = useField(forInputName);   

  const errorControlName = forInputName + "Error"
      
  return (
    <div data-testid={name}> 
      {meta.error && meta.touched ? (
          <ErrorDisplay name={errorControlName} errorCsv={meta.error}/> 
      ) : null}
    </div>
  );
};
   
export default ErrorDisplay;