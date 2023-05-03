import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayPhoneNumberProps {
  forColumn:string
  rowIndex: number
  value: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayPhoneNumber: FC<ReportColumnDisplayPhoneNumberProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const formatPhoneNumber = () => { 
    let result:string = "";
    
    try {
        
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }

      value = value.replace(" ", "");

      if (value && value.length === 10) {
          let cleaned = ('' + value).replace(/\D/g, '');
          let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
          if (match) {
              return '(' + match[1] + ') ' + match[2] + '-' + match[3];
          } else {
              return value
          }
      }

      if (value && value.length === 7) {
          let cleaned = ('' + value).replace(/\D/g, '');
          let match = cleaned.match(/^(\d{3})(\d{4})$/);
          if (match) {
              return match[1] + '-' + match[2];
          } else {
              return value;
          }
      }
      
    } catch (error) {
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayPhoneNumber');
    }
    
    return value
}
      
  return (
    <td data-testid={groupName} className="text-nowrap" hidden={!isVisible}>{formatPhoneNumber()}</td>
  );
};
   