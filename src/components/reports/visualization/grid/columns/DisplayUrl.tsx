import React, { FC, ReactElement,} from "react"; 
import "../../../../../App.scss"; 
   
export interface ReportColumnDisplayUrlProps {
  forColumn:string
  rowIndex: number
  value: string | null 
  linkText: string 
  isVisible?:boolean
  conditionallyVisible?:boolean
  isJoinedToLeftColumn?:boolean
  isJoinedToRightColumn?:boolean
  isUserPreferenceVisible?: boolean;
}
   
export const ReportColumnDisplayUrl: FC<ReportColumnDisplayUrlProps> = ({
  forColumn,
  rowIndex,
  value, 
  linkText, 
  isVisible = true,
  conditionallyVisible = true,
  isJoinedToLeftColumn = false,
  isJoinedToRightColumn = false,
  isUserPreferenceVisible = true,
}): ReactElement => { 

  const groupName = forColumn +'-column-' + rowIndex.toString();

  let url = value;

  if(url === null)
  {
    url = "";
  }
  if(!url.toLowerCase().startsWith("http"))
  {
    url = "https://" + url;
  }
  
  const displayValue = (isVisible && conditionallyVisible);
  
  const isComponentVisible = isVisible && isUserPreferenceVisible;
       
  return (
    <td data-testid={groupName} 
      className="text-nowrap" 
      hidden={!isComponentVisible}>
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
   