import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string
  rowIndex: number
  value: string | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isUserPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
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
      
  const formatText = () => {  
    const result = "";
    
    try {
      
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayText');
    }
    
    return value;
  }

  return (
    <td data-testid={groupName} hidden={!isComponentVisible}>{formatText()}</td>
  );
};
   