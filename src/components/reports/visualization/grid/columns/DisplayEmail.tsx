import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayEmailProps {
  forColumn:string
  rowIndex: number
  value: string 
  isVisible?:boolean
}
   
export const ReportColumnDisplayEmail: FC<ReportColumnDisplayEmailProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatEmail = () => {  
    let result:string = ""; 
    
    try {
      
      if(value == null || value == "" || !isVisible)
      {
          return result;
      }

      result = value;

    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayEmail');
    }

    return value;
  }

  return (
    <td data-testid={groupName}>{formatEmail()}</td>
  );
};
   