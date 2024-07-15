import React, { FC, ReactElement } from "react"; 
import {useField } from 'formik';
import {ReportErrorDisplay } from './ErrorDisplay';
   
export interface ReportInputErrorDisplayProps {
  name: string,
  forInputName: string,
}
   
export const ReportInputErrorDisplay: FC<ReportInputErrorDisplayProps> = ({
  name,
  forInputName,
}): ReactElement => {
  const [, meta] = useField(forInputName);  

  const errorControlName = forInputName + "Error"
  
  const isInvalid:boolean = !!meta.error && !!meta.touched
      
  return (
    <div data-testid={name}> 
      {isInvalid ? (
          <ReportErrorDisplay name={errorControlName} errorCsv={meta.error}/> 
      ) : null}
    </div>
  );
};
   