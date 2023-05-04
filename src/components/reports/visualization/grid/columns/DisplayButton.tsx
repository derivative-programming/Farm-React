import React, { FC, ReactElement,} from "react"; 
import { Button } from "react-bootstrap";
import "../../../../../App.scss"; 
import "../../../../../index.css"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string
  rowIndex: number
  value: string 
  buttonText:string
  onClick():void
  isVisible?:boolean
  conditionallyVisible?:boolean
  isButtonCallToAction?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn,
  rowIndex,
  value, 
  buttonText,
  onClick,
  isVisible = true,
  conditionallyVisible = true,
  isButtonCallToAction = false,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  const buttonName = groupName + '-button'; 
  
  const displayValue = (isVisible && conditionallyVisible);

  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  }

  return ( 
    <td data-testid={groupName} hidden={!isVisible}>
        <Button
            hidden={!displayValue}
            className="ms-2"
           variant={buttonVariant} 
            data-testid={buttonName}
            onClick={onClick}
            size="sm"
        >{buttonText}</Button>
    </td>
  );
};
   