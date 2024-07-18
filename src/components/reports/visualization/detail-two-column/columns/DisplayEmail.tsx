import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayEmailProps {
  forColumn:string 
  value: string | null 
  label:string
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayEmail: FC<ReportColumnDisplayEmailProps> = ({
  forColumn, 
  value, 
  label,
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column';
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatEmail = () => {  
    const result = ""; 
    
    try {
      
      if(value === null || value === "" || !isVisible)
      {
          return result;
      } 

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayEmail');
    }

    return value;
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!displayValue}>
        <ListGroup.Item
            as="li"
            className="text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                {formatEmail()}&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   