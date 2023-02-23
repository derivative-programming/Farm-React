import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
import moment from "moment";
   
export interface ReportColumnDisplayDateProps {
  forColumn:string
  rowIndex: number
  value: string 
  isVisible?:boolean
}
   
export const ReportColumnDisplayDate: FC<ReportColumnDisplayDateProps> = ({
  forColumn,
  rowIndex,
  value, 
  isVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatDate = () => { 
    let result:string = "";
    
    try {
        
      if(value == null || !isVisible)
      {
          return result;
      }
      
      const dateTime:moment.Moment = moment.utc(value).local();

      if(!dateTime.isValid()){
        return result;
      }
      
      if(dateTime.format("MM-DD-YYYY") == "12-31-1752"){
        return result;
      }

      result = moment.utc(value).local().format("M/D/YYYY"); 
      
    } catch (error) { 
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDate');
    }
    
    return result;
  }

  return (
    <td data-testid={groupName}>{formatDate()}</td>
  );
};
   