import React, { FC, ReactElement } from "react"; 
import sortUp from "../../../assets/caret-up.png";
import sortDown from "../../../assets/caret-down.png";

export interface ReportColumnHeaderProps {
  name?: string;
  forColumn: string;
  label: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  onSort(columnName: string): void;
  isVisible?: boolean;
}

export const ReportColumnHeader: FC<ReportColumnHeaderProps> = ({
  name = "",
  forColumn,
  label,
  sortedColumnName,
  isSortDescending,
  onSort,
  isVisible = true,
}): ReactElement => {
  const controlName = name.length > 0 ? name : { forColumn } + "ColumnHeader";

  return (
    <th className="cursor-pointer"
      data-testid={controlName}
      id={controlName}
      onClick={() => onSort(forColumn)}
    >
      {label}{" "}
      <span>
        {" "}
        {sortedColumnName === forColumn ? (
          <img src={isSortDescending ? sortUp : sortDown} hidden={!isVisible}  className="w-12 ms-3"/>
        ) : null}
      </span>
    </th>
  );
};
