import React, { FC, ReactElement, useContext, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import "../../../App.scss"; 
import sortUp from "../../../assets/caret-up.png";
import sortDown from "../../../assets/caret-down.png";
   
export interface ReportColumnHeaderProps {
  name?:string
  forColumn: string
  label: string
  sortedColumnName: string
  isSortDescending: boolean 
  onSort(columnName:string): void 
}
   
export const ReportColumnHeader: FC<ReportColumnHeaderProps> = ({
  name="",
  forColumn,
  label,
  sortedColumnName,
  isSortDescending, 
  onSort, 
}): ReactElement => {  

  const controlName = (name.length > 0) ? name: {forColumn} + 'ColumnHeader'
      
  return (
    <th
      data-testid={controlName}
      id={controlName}
       onClick={() => onSort(forColumn)}>{label} <span> {sortedColumnName === forColumn ? <img
      src={isSortDescending ? sortUp : sortDown}
      className="edit-icon"
    /> : null}</span>
    </th>
  );
};
   