import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayEmailProps {
  forColumn:string
  rowIndex: number
  value: string | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayEmail: FC<ReportColumnDisplayEmailProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const displayValue = (isVisible && conditionallyVisible);
      
  const formatEmail = () => {  
    const result = ""; 
    
    try {
      
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayEmail');
    }

    return value;
  }

  return (
    <td data-testid={groupName} className="text-nowrap" hidden={!isVisible}>{formatEmail()}</td>
  );
};
   