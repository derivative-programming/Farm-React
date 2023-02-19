import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayMoneyProps {
  forColumn:string 
  value: number 
  label:string
}
   
export const ReportColumnDisplayMoney: FC<ReportColumnDisplayMoneyProps> = ({
  forColumn, 
  value, 
  label,
}): ReactElement => { 

  const groupName = forColumn +'-column';
      
  const formatMoney = () => { 
    let result:string = "";
    
    try {
      
      if(value == null )
      {
          return result;
      } 

      if(isNaN(value))
      {
          return result;
      } 

      result = value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
      
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayMoney');
    }

    return result;
  }

  return ( 
    <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-center"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                {formatMoney()}
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   