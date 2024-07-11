import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayUrlProps {
  forColumn:string 
  value: string | null 
  label:string
  linkText: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn, 
  value,
  label,
  linkText,
  isVisible = true,
  conditionallyVisible = true
}): ReactElement => { 

  const groupName = forColumn;
  
  const displayValue = (isVisible && conditionallyVisible);
        
  let url = value;

  if(url === null)
  {
    url = "";
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!isVisible}>
        <ListGroup.Item
            as="li"
            className="text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold" data-testid={groupName + '-header'}>{label}</div>
                <a href={url} 
                  hidden={!displayValue}
                >
                    {linkText}
                </a>&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   