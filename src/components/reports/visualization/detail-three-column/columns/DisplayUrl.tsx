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
  isPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn, 
  value,
  label,
  linkText,
  isVisible = true,
  conditionallyVisible = true,
  isPreferenceVisible = true,
}): ReactElement => { 

  const groupName = forColumn;
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isPreferenceVisible;
        
  let url = value;

  if(url === null)
  {
    url = "";
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!isComponentVisible}>
        <ListGroup.Item
            as="li"
            className="text-start"
            style={{ border: 'none' }} 
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold text-decoration-underline" data-testid={groupName + '-header'}>{label}</div>
                <a href={url} 
                  hidden={!displayValue}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    {linkText}
                </a>&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   