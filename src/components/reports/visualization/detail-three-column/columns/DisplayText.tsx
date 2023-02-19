import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string 
  value: string 
  label:string
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
  forColumn, 
  value,
  label
}): ReactElement => { 

  const groupName = forColumn +'-column';
      
  const formatText = () => {  
    let result:string = "";
    
    try {
      
      if(value == null || value == "")
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayText');
    }
    
    return value;
  }

  return ( 
    <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                {formatText()}
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   