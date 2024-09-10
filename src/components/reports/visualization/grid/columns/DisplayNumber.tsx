import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayNumberProps {
  forColumn:string
  rowIndex: number
  value: number | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isUserPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayNumber: FC<ReportColumnDisplayNumberProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
  conditionallyVisible = true,
  isJoinedToLeftColumn = false,
  isJoinedToRightColumn = false,
  isUserPreferenceVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isUserPreferenceVisible;
      
  const formatNumber = () => {  
    let result = "";
    
    try {
        
      if(value === null || !displayValue)
      {
          return result;
      }  

      if(isNaN(value))
      {
          return result;
      } 

      result = value.toLocaleString("en-US");

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayNumber');
    }
    return result;
  }

  return (
    <td data-testid={groupName} className="text-nowrap" hidden={!isComponentVisible}>{formatNumber()}</td>
  );
};
   