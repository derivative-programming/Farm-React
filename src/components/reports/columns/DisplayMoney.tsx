import React, { FC, ReactElement,} from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportColumnDisplayMoneyProps {
  forColumn:string
  rowIndex: number
  value: number 
}
   
export const ReportColumnDisplayMoney: FC<ReportColumnDisplayMoneyProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatMoney = () => { 
    let result:string = "";
    
    if(value == null )
    {
        return result;
    } 

    if(isNaN(value))
    {
        return result;
    } 

    result = value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    return result;
  }

  return (
    <td data-testid={groupName}>{formatMoney()}</td>
  );
};
   