import React, { FC, ReactElement,} from "react"; 
import { Button } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string
  rowIndex: number
  value: string 
  buttonText:string
  onClick():void
  isVisible?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn,
  rowIndex,
  value, 
  buttonText,
  onClick,
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  const buttonName = groupName + '-button'; 
        
  return ( 
    <td data-testid={groupName}>
        <Button
            hidden={!isVisible}
            className="primary-button ms-2"
            data-testid={buttonName}
            onClick={onClick}
        >{buttonText}</Button>
    </td>
  );
};
   