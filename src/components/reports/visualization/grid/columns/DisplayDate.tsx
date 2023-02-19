import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
import moment from "moment";
   
export interface ReportColumnDisplayDateProps {
  forColumn:string
  rowIndex: number
  value: Date 
}
   
export const ReportColumnDisplayDate: FC<ReportColumnDisplayDateProps> = ({
  forColumn,
  rowIndex,
  value, 
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();
      
  const formatDate = () => { 
    let result:string = "";
    
    try {
        
      if(value == null)
      {
          return result;
      }
      console.log(value);
      const dateTime:moment.Moment = moment.utc(value.toISOString()).local();

      if(!dateTime.isValid()){
        return result;
      }
      
      if(dateTime.format("MM-DD-YYYY") == "12-31-1752"){
        return result;
      }

      result = moment.utc(value).local().format("M/D/YYYY");
      console.log('success');
    } catch (error) { 
      console.log('Error(' + error + ') with value(' + value + ') typeof(' + typeof value + ') in ReportColummDisplayDate');
    }
    
    return result;
  }

  return (
    <td data-testid={groupName}>{formatDate()}</td>
  );
};
   