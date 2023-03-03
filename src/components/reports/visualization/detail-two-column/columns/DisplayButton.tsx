import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string 
  value: string 
  buttonText:string  
  onClick():void
  isVisible?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn, 
  value,
  buttonText, 
  onClick,
  isVisible = true
}): ReactElement => { 

  const groupName = forColumn +'-column';
  const buttonName = groupName + '-button'; 
       

  return ( 
    <Col lg="2" md="2" xs="12" className='mobile-edit mt-3' id={groupName} data-testid={groupName}>
        <Button data-testid={buttonName} id={buttonName} onClick={onClick} className='primary-button' type="button" hidden={!isVisible}>
            {buttonText}
        </Button>
    </Col>
  );
};
   