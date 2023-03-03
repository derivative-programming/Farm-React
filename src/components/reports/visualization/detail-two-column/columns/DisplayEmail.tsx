import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayEmailProps {
  forColumn:string 
  value: string 
  label:string
  isVisible?:boolean
}
   
export const ReportColumnDisplayEmail: FC<ReportColumnDisplayEmailProps> = ({
  forColumn, 
  value, 
  label,
  isVisible = true
}): ReactElement => { 

  const groupName = forColumn +'-column';
      
  const formatEmail = () => {  
    let result:string = ""; 
    
    try {
      
      if(value == null || value == "" || !isVisible)
      {
          return result;
      }

      result = value;

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayEmail');
    }

    return value;
  }

  return ( 
    <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                {formatEmail()}&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   