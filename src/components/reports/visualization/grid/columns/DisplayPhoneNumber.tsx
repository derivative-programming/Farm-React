import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayPhoneNumberProps {
  forColumn:string
  rowIndex: number
  value: string | null 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayPhoneNumber: FC<ReportColumnDisplayPhoneNumberProps> = ({
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
  
  const formatPhoneNumber = () => { 
    const result = "";
    
    try {
        
      if(value === null || value === "" || !displayValue)
      {
          return result;
      }

      value = value.replace(" ", "");

      if (value && value.length === 10) {
          const cleaned = ('' + value).replace(/\D/g, '');
          const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
          if (match) {
              return '(' + match[1] + ') ' + match[2] + '-' + match[3];
          } else {
              return value
          }
      }

      if (value && value.length === 7) {
          const cleaned = ('' + value).replace(/\D/g, '');
          const match = cleaned.match(/^(\d{3})(\d{4})$/);
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
    <td data-testid={groupName} className="text-nowrap" hidden={!isComponentVisible}>{formatPhoneNumber()}</td>
  );
};
   