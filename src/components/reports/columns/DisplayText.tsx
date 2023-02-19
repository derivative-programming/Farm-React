import React, { FC, ReactElement,} from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string
  rowIndex: number
  value: string 
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatText = () => {  
    let result:string = "";
    
    if(value == null || value == "")
    {
        return result;
    }
    
    return value;
  }

  return (
    <td data-testid={groupName}>{formatText()}</td>
  );
};
   