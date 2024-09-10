import React, { FC, ReactElement,} from "react";
import { Form } from "react-bootstrap";

import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayCheckboxProps {
  forColumn:string
  rowIndex: number
  isChecked: boolean | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isUserPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayCheckbox: FC<ReportColumnDisplayCheckboxProps> = ({
  forColumn,
  rowIndex,
  isChecked, 
  isVisible = true,
  conditionallyVisible = true,
  isJoinedToLeftColumn = false,
  isJoinedToRightColumn = false,
  isUserPreferenceVisible = true,
}): ReactElement => { 
 
  const groupName = forColumn +'-column-' + rowIndex.toString();
  const checkboxName = groupName +'-checkbox';
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isUserPreferenceVisible;
 
  if(isChecked === null || !displayValue){ 
    return (
    <td data-testid={groupName} hidden={!isComponentVisible}></td>
    );
  } else {  
    return (
      <td data-testid={groupName} hidden={!isComponentVisible}>   
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
   