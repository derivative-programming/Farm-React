import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
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
  const [field, meta, helpers] = useField(forInputName);  

  const errorControlName = forInputName + "Error"
      
  return (
    <div data-testid={name}> 
      {meta.error && meta.touched ? (
          <ReportErrorDisplay name={errorControlName} errorCsv={meta.error}/> 
      ) : null}
    </div>
  );
};
   