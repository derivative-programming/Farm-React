import React, { FC, ReactElement,} from "react";
import { Col, ListGroup } from "react-bootstrap";
import "../../../../../App.scss"; 
import moment from "moment";
   
export interface ReportColumnDisplayDateTimeProps {
  forColumn:string 
  value: string 
  label:string
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayDateTime: FC<ReportColumnDisplayDateTimeProps> = ({
  forColumn, 
  value, 
  label,
  isVisible = true,
  conditionallyVisible = true
}): ReactElement => { 

  const groupName = forColumn;
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatDateTime = () => {  
    let result = "";
    
    try {
        
      if(value === null || !displayValue)
      {
          return result;
      }

      const dateTime:moment.Moment = moment.utc(value).local();

      if(!dateTime.isValid()){
        return result;
      }
      
      if(dateTime.format("MM-DD-YYYY") === "12-31-1752"){
        return result;
      }

      result = moment.utc(value).local().format("M/D/YYYY h:m A");
      
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDateTime.');
    }
    return result;
  }

  return ( 
    <Col data-testid={groupName} lg="6" md="6" xs="12" hidden={!isVisible}>
        <ListGroup.Item
            as="li"
            className="text-start"
        >
            <div className="ms-2 me-auto">
                <div className="fw-bold" data-testid={groupName + '-header'}>{label}</div>
                {formatDateTime()} &nbsp;
            </div>

        </ListGroup.Item>
    </Col>
  );
};
   