import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string 
  value: string | null 
  label:string
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
  forColumn, 
  value,
  label,
  isVisible = true,
  conditionallyVisible = true
}): ReactElement => { 

  const groupName = forColumn;
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatText = () => {  
    const result = "";
    
    try {
      
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayText');
    }
    
    return value;
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!isVisible}>
        <ListGroup.Item
            as="li"
            className="text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold" data-testid={groupName + '-header'}>{label}</div>
                {formatText()}&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   