import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayMoneyProps {
  forColumn:string
  rowIndex: number
  value: number 
  isVisible?:boolean
}
   
export const ReportColumnDisplayMoney: FC<ReportColumnDisplayMoneyProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatMoney = () => { 
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
    <td data-testid={groupName}>{formatMoney()}</td>
  );
};
   