import React, { FC, ReactElement,} from "react";
import { Button, Form, Card } from "react-bootstrap";
import "../../../App.scss"; 
   
export interface ReportColumnDisplayPhoneNumberProps {
  forColumn:string
  rowIndex: number
  value: string 
}
   
export const ReportColumnDisplayPhoneNumber: FC<ReportColumnDisplayPhoneNumberProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const formatPhoneNumber = () => { 
    let result:string = "";
    
    if(value == null || value == "")
    {
        return result;
    }

    value = value.replace(" ", "");

    if (value && value.length === 10) {
        let cleaned = ('' + value).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        } else {
            return value
        }
    }

    if (value && value.length === 7) {
        let cleaned = ('' + value).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{3})(\d{4})$/);
        if (match) {
            return match[1] + '-' + match[2];
        } else {
            return value;
        }
    }
    
    return value
}
      
  return (
    <td data-testid={groupName}>{formatPhoneNumber()}</td>
  );
};
   