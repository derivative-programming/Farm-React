import React, { FC, ReactElement,} from "react";
import { Form } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayCheckboxProps {
  forColumn:string
  rowIndex: number
  isChecked: boolean 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayCheckbox: FC<ReportColumnDisplayCheckboxProps> = ({
  forColumn,
  rowIndex,
  isChecked, 
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 
 
  const groupName = forColumn +'-column-' + rowIndex.toString();
  const checkboxName = groupName +'-checkbox';
  
  const displayValue = (isVisible && conditionallyVisible);
 
  if(isChecked === null || !displayValue){ 
    return (
    <td data-testid={groupName}></td>
    );
  } else {  
    return (
      <td data-testid={groupName} hidden={!isVisible}>   
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
   