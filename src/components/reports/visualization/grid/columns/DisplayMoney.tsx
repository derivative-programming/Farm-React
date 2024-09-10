import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayMoneyProps {
  forColumn:string
  rowIndex: number
  value: number | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayMoney: FC<ReportColumnDisplayMoneyProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
  conditionallyVisible = true,
  isJoinedToLeftColumn = false,
  isJoinedToRightColumn = false,
  isPreferenceVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isPreferenceVisible;
      
  const formatMoney = () => { 
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

      result = value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
      
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayMoney');
    }

    return result;
  }

  return (
    <td data-testid={groupName} className="text-nowrap" hidden={!isComponentVisible}>{formatMoney()}</td>
  );
};
   