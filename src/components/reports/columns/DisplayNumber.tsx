import React, { FC, ReactElement,} from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportColumnDisplayNumberProps {
  forColumn:string
  rowIndex: number
  value: number 
}
   
export const ReportColumnDisplayNumber: FC<ReportColumnDisplayNumberProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatNumber = () => {  
    let result:string = "";
    
    if(value == null)
    {
        return result;
    }  

    if(isNaN(value))
    {
        return result;
    } 

    result = value.toLocaleString("en-US");

    return result;
  }

  return (
    <td data-testid={groupName}>{formatNumber()}</td>
  );
};
   