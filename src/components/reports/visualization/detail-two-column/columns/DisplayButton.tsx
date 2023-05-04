import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string 
  value: string 
  buttonText:string  
  onClick():void
  isVisible?:boolean
  isEnabled?: boolean;
  conditionallyVisible?:boolean
  isButtonCallToAction?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn,  
  buttonText, 
  onClick,
  isVisible = true,
  isEnabled = true,
  conditionallyVisible = true,
  isButtonCallToAction = false,
}): ReactElement => { 

  const groupName = forColumn +'-column-0';
  const buttonName = groupName + '-button'; 
  
  const displayValue = (isVisible && conditionallyVisible);
       
  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  }

  return ( 
    <div>
      <Button 
        data-testid={buttonName} 
        id={buttonName} 
        onClick={onClick} 
        className='' 
        variant={buttonVariant} 
        disabled={!isEnabled} 
        type="button" hidden={!displayValue}>
          {buttonText}
      </Button>
    </div>
  );
}; 
   