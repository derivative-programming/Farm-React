import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayImageUrlProps {
  forColumn:string 
  value: string | null 
  label:string
  isVisible?:boolean
  conditionallyVisible?:boolean
  isPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayImageUrl: FC<ReportColumnDisplayImageUrlProps> = ({
  forColumn, 
  value,
  label,
  isVisible = true,
  conditionallyVisible = true,
  isPreferenceVisible = true,
}): ReactElement => { 

  const groupName = forColumn;
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isPreferenceVisible;
      
  const formatImageUrl = () => {  
    const result = "";
    
    try {
      
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayImageUrl');
    }
    
    return value;
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
                <a href={value ?? ''} target="_blank" rel="noopener noreferrer">
                  <img src={value ?? ''} style={{ maxHeight: '100px', maxWidth: '200px' }} />
                </a>
                &nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   