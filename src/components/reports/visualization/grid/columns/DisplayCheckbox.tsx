import React, { FC, ReactElement,} from "react";
import { Form } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayCheckboxProps {
  forColumn:string
  rowIndex: number
  isChecked: boolean 
  isVisible?:boolean
}
   
export const ReportColumnDisplayCheckbox: FC<ReportColumnDisplayCheckboxProps> = ({
  forColumn,
  rowIndex,
  isChecked, 
  isVisible = true,
}): ReactElement => { 
 
  const groupName = forColumn +'-column-' + rowIndex.toString();
  const checkboxName = groupName +'-checkbox';
 
  if(isChecked == null || !isVisible){ 
    return (
    <td data-testid={groupName}></td>
    );
  } else {  
    return (
      <td data-testid={groupName}>   
          <Form.Check 
            readOnly={true}
            type="checkbox"
            data-testid={checkboxName}
            id={checkboxName}
            name={checkboxName} 
            checked={isChecked}
            />
      </td>
    );
  }
};
   