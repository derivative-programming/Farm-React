import React, { FC, ReactElement,} from "react";
import "../../../../../App.scss";

export interface ReportColumnDisplayImageUrlProps {
  forColumn:string
  rowIndex: number
  value: string | null
  isVisible?:boolean
  conditionallyVisible?:boolean
}

export const ReportColumnDisplayImageUrl: FC<ReportColumnDisplayImageUrlProps> = ({
  forColumn,
  rowIndex,
  value,
  isVisible = true,
  conditionallyVisible = true,
}): ReactElement => {

  const groupName = forColumn +'-column-' + rowIndex.toString();

  const displayValue = (isVisible && conditionallyVisible); 

  return (
    
  <td data-testid={groupName} hidden={!displayValue}>
    <a href={value ?? ''} target="_blank" rel="noopener noreferrer">
      <img src={value ?? ''} style={{ maxHeight: '100px', maxWidth: '200px' }} />
    </a>
  </td>
  );
};
   