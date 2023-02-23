import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayNumberProps {
  forColumn:string 
  value: number 
  label:string
  isVisible?:boolean
}
   
export const ReportColumnDisplayNumber: FC<ReportColumnDisplayNumberProps> = ({
  forColumn, 
  value, 
  label,
  isVisible = true
}): ReactElement => { 

  const groupName = forColumn +'-column';
      
  const formatNumber = () => {  
    let result:string = "";
    
    try {
        
      if(value == null || !isVisible)
      {
          return result;
      }  

      if(isNaN(value))
      {
          return result;
      } 

      result = value.toLocaleString("en-US");

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayNumber');
    }
    return result;
  }

  return (
    
    <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                {formatNumber()}&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   