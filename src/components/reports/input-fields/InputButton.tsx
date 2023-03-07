import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {ReportInputErrorDisplay } from './InputErrorDisplay';
   
export interface ReportInputButtonProps {
  name: string
  buttonText: string
  onClick(): void
  isButtonCallToAction?:boolean 
  isVisible?:boolean
  isEnabled?:boolean
  className?:string
}
   
export const ReportInputButton: FC<ReportInputButtonProps> = ({
  name,
  buttonText,
  onClick,
  isButtonCallToAction = true, 
  isVisible = true,
  isEnabled = true,
  className = ""
}): ReactElement => {

  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  } 
      
  return (
    <Button data-testid={name}
        className={className}
        id={name}
        onClick={onClick}
        hidden={!isVisible} 
        disabled={!isEnabled}
        variant={buttonVariant}>
        {buttonText}
    </Button>
  );
};
   