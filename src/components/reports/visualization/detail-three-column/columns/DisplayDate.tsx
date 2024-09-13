import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
import moment from "moment";
   
export interface ReportColumnDisplayDateProps {
  forColumn:string 
  value: string | null 
  label:string
  isVisible?:boolean
  conditionallyVisible?:boolean
  isPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayDate: FC<ReportColumnDisplayDateProps> = ({
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
      
  const formatDate = () => { 
    let result = "";
    
    try {
        
      if(value === null || !displayValue)
      {
          return result;
      } 
      
      // const dateTime:moment.Moment = moment.utc(value).local();
      const dateTime:moment.Moment = moment.utc(value);

      if(!dateTime.isValid()){
        return result;
      }
      
      if(dateTime.format("MM-DD-YYYY") === "12-31-1752"){
        return result;
      }

      // result = moment.utc(value).local().format("M/D/YYYY");
      result = moment.utc(value).format("M/D/YYYY");
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDate');
    }
    
    return result;
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
                {formatDate()}&nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   