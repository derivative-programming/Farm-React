import React, { FC, ReactElement,} from "react";
import { Button, Row } from "react-bootstrap";
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayButtonProps {
  forColumn:string 
  value: string 
  buttonText:string  
  onClick():void
  isVisible?:boolean
  conditionallyVisible?:boolean
  isButtonCallToAction?:boolean
}
   
export const ReportColumnDisplayButton: FC<ReportColumnDisplayButtonProps> = ({
  forColumn, 
  value,
  buttonText, 
  onClick,
  isVisible = true,
  conditionallyVisible = true,
  isButtonCallToAction = false,
}): ReactElement => { 

  const groupName = forColumn;
  const buttonName = groupName + '-button'; 
  
  const displayValue = (isVisible && conditionallyVisible);
       
  let buttonVariant = "secondary";
  if(isButtonCallToAction)
  {
    buttonVariant = "primary";
  }

  return ( 
    <Row  className=' mt-3 ms-3 me-3 ' 
      id={groupName} data-testid={groupName} hidden={!isVisible}> 
      <div data-testid={forColumn + '-header'} ></div>
        <Button data-testid={buttonName} 
          id={buttonName} 
          onClick={onClick} 
          className='' 
          variant={buttonVariant} 
          type="button" 
          size="sm"
          hidden={!displayValue}>
            {buttonText}
        </Button> 
    </Row>
  );
};
   