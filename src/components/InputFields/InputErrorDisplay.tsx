import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../App.scss";
import {useField } from 'formik';
import {ErrorDisplay } from './ErrorDisplay';
   
export interface InputErrorDisplayProps {
  name: string,
  forInputName: string,
}
   
export const InputErrorDisplay: FC<InputErrorDisplayProps> = ({
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
   