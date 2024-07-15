import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayUrlProps {
  forColumn:string
  rowIndex: number
  value: string | null 
  linkText: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn,
  rowIndex,
  value, 
  linkText, 
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();

  let url = value;

  if(url === null)
  {
    url = "";
  }
  if(!linkText.toLowerCase().startsWith("http"))
  {
    url = "https://" + url;
  }
  
  const displayValue = (isVisible && conditionallyVisible);
       
  return (
    <td data-testid={groupName} 
      className="text-nowrap" 
      hidden={!isVisible}>
        <a href={url}
          hidden={!displayValue}
          target="_blank"
          rel="noreferrer"
          >
          {linkText}
        </a>
      </td>
  );
};
   