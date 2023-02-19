import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayTextProps {
  forColumn:string
  rowIndex: number
  value: string 
}
   
export const ReportColumnDisplayText: FC<ReportColumnDisplayTextProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatText = () => {  
    let result:string = "";
    
    try {
      
      if(value == null || value == "")
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
   