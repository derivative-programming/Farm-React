import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayNumberProps {
  forColumn:string
  rowIndex: number
  value: number 
  isVisible?:boolean
}
   
export const ReportColumnDisplayNumber: FC<ReportColumnDisplayNumberProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatNumber = () => {  
    let result:string = "";
    
    try {
        
      if(value == null || !isVisible)
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
    <td data-testid={groupName}>{formatNumber()}</td>
  );
};
   