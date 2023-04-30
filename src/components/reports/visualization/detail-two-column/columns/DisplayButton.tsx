import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string 
  value: string 
  buttonText:string  
  onClick():void
  isVisible?:boolean
  conditionallyVisible?:boolean
  isButtonCallToAction?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn, 
  value,
  buttonText, 
  onClick,
  isVisible = true,
  conditionallyVisible = true,
  isButtonCallToAction = false,
}): ReactElement => { 

  const groupName = forColumn +'-column';
  const buttonName = groupName + '-button'; 
  
  const displayValue = (isVisible && conditionallyVisible);
       
  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  }

  return ( 
    <Col lg="2" md="2" xs="12" className='mobile-edit mt-3' id={groupName} data-testid={groupName} hidden={!displayValue}>
        <div data-testid={forColumn + '-header'} ></div>
        <Button data-testid={buttonName} id={buttonName} onClick={onClick} 
          className='' 
           variant={buttonVariant} 
           type="button" hidden={!displayValue}>
            {buttonText}
        </Button>
    </Col>
  );
};
   