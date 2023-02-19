import React, { FC, ReactElement,} from "react";
import { Form } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayCheckboxProps {
  forColumn:string
  rowIndex: number
  isChecked: boolean 
}
   
export const ReportColumnDisplayCheckbox: FC<ReportColumnDisplayCheckboxProps> = ({
  forColumn,
  rowIndex,
  isChecked, 
}): ReactElement => { 
 
  const groupName = forColumn +'-column-' + rowIndex.toString();
  const checkboxName = groupName +'-checkbox';
 
  if(isChecked == null){ 
    return (
    <td data-testid={groupName}></td>
    );
  } else {  
    return (
      <td data-testid={groupName}>   
          <Form.Check
            inline
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
   