import React, { FC, ReactElement } from "react";  
import { SortUp,SortDownAlt } from "react-bootstrap-icons";

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
    <th className="cursor-pointer text-nowrap ps-2 pe-2"
      data-testid={forColumn + '-header'}
      id={forColumn + '-header'}
      hidden={!isVisible}
      onClick={() => onSort(forColumn)}
    >
      {label}{" "}
      <span>
        {" "} 
        {sortedColumnName === forColumn && !isSortDescending && isVisible ? ( 
            <SortDownAlt className="w-12 ms-1"  
              data-testid={forColumn + '-header-sortDown'} 
            />
        ) : null}
        
        {sortedColumnName === forColumn && isSortDescending && isVisible ? ( 
            <SortUp className="w-12 ms-1"
              data-testid={forColumn + '-header-sortUp'} 
            />
        ) : null}
      </span>
    </th>
  );
};
