import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayUrlProps {
  forColumn:string
  rowIndex: number
  value: string 
  linkText: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn,
  rowIndex,
  value, 
  linkText, 
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatText = () => {  
    let result:string = "";
    
    try {
      
      if(value == null || value == "" || !displayValue)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayUrl');
    }
    
    return value;
  }

  return (
    <td data-testid={groupName}>
        <a href={value}
          hidden={!displayValue}
          >
          {linkText}
        </a>
      </td>
  );
};
   