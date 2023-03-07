import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss";
import {useField } from 'formik';
import {FormInputErrorDisplay } from './InputErrorDisplay';
   
export interface FormInputButtonProps {
  name: string
  buttonText: string
  onClick(): void
  isButtonCallToAction?:boolean 
  isVisible?:boolean
  isEnabled?:boolean
  autoFocus?:boolean
  className?:string
}
   
export const FormInputButton: FC<FormInputButtonProps> = ({
  name,
  buttonText,
  onClick,
  isButtonCallToAction = true, 
  isVisible = true,
  isEnabled = true,
  autoFocus = false,
  className = ""
}): ReactElement => { 
  
  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  }

      
  return (
    <Button data-testid={name}
        id={name}
        onClick={onClick}
        hidden={!isVisible}
        disabled={!isEnabled}
        autoFocus={autoFocus}
        className={className}
        variant={buttonVariant}>
        {buttonText}
    </Button>
  );
};
   