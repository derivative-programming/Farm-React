import React, { FC, ReactElement,} from "react";
import { Button, Form, Card, Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayCheckboxProps {
  forColumn:string 
  isChecked: boolean 
  label:string
  isVisible?:boolean
}
   
export const ReportColumnDisplayCheckbox: FC<ReportColumnDisplayCheckboxProps> = ({
  forColumn, 
  isChecked, 
  label,
  isVisible = true
}): ReactElement => { 
 
  const groupName = forColumn +'-column';
  const checkboxName = groupName +'-checkbox';
 
  if(isChecked == null || !isVisible){
    return (
    
      <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div> 
                &nbsp;
            </div>

        </ListGroup.Item>
    </Col>
    );
  } else {  
    return ( 
    <Col data-testid={groupName} lg="5" md="5" xs="12">
        <ListGroup.Item
            as="li"
            className="d-flex text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold">{label}</div>
                <Form.Check 
                  readOnly={true}
                  type="checkbox"
                  data-testid={checkboxName}
                  id={checkboxName}
                  name={checkboxName} 
                  checked={isChecked}
                  />
            </div>

        </ListGroup.Item>
    </Col>
    );
  }
};
   