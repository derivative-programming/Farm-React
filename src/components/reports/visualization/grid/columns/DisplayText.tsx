import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string
  rowIndex: number
  value: string 
  isVisible?:boolean
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatText = () => {  
    let result:string = "";
    
    try {
      
      if(value == null || value == "" || !isVisible)
      {
          return result;
      }
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayText');
    }
    
    return value;
  }

  return (
    <td data-testid={groupName}>{formatText()}</td>
  );
};
   