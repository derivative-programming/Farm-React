import React, { FC, ReactElement,} from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportColumnDisplayEmailProps {
  forColumn:string
  rowIndex: number
  value: string 
}
   
export const ReportColumnDisplayEmail: FC<ReportColumnDisplayEmailProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatEmail = () => {  
    let result:string = ""; 
    
    if(value == null || value == "")
    {
        return result;
    }

    result = value;

    return value;
  }

  return (
    <td data-testid={groupName}>{formatEmail()}</td>
  );
};
   