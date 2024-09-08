import React, { FC, ReactElement } from "react";
import { SortUp, SortDownAlt } from "react-bootstrap-icons";

export interface ReportColumnHeaderProps {
  forColumn: string;
  label: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  onSort(columnName: string): void;
  isVisible?: boolean;
  isJoinedToLeftColumn?: boolean;
  isJoinedToRightColumn?: boolean;
  minWidth?: string;
  maxWidth?: string;         
  align?: "left" | "center" | "right";  
  tooltip?: string;          
  isSortDisabled?: boolean; 
}

export const ReportColumnHeader: FC<ReportColumnHeaderProps> = ({
  forColumn,
  label,
  sortedColumnName,
  isSortDescending,
  onSort,
  isVisible = true,
  isJoinedToLeftColumn = false,
  isJoinedToRightColumn = false,
  minWidth = "100px",
  maxWidth = "400px",  
  align = "center",  
  tooltip = "",  
  isSortDisabled = false, 
}): ReactElement => {

  const handleSort = () => {
    if (!isSortDisabled) {
      onSort(forColumn);
    }
  };

  return (
    <th
      className="cursor-pointer text-nowrap ps-2 pe-2"
      data-testid={forColumn + '-header'}
      id={forColumn + '-header'}
      hidden={!isVisible}
      onClick={handleSort}
      style={{
        minWidth: minWidth ? minWidth : undefined,
        maxWidth: maxWidth,
        textAlign: align,
        overflow: "hidden",          // Hides overflow
        textOverflow: "ellipsis",    // Shows ellipsis when text overflows
        whiteSpace: "nowrap",        // Prevents text from wrapping
      }}
      title={tooltip || undefined} // Only show tooltip if it exists
    >
      {label}{" "}
      {!isSortDisabled && (
        <span>
          {" "}
          {sortedColumnName === forColumn && !isSortDescending && isVisible ? (
            <SortDownAlt
              className="w-12 ms-1"
              data-testid={forColumn + '-header-sortDown'}
            />
          ) : null}

          {sortedColumnName === forColumn && isSortDescending && isVisible ? (
            <SortUp
              className="w-12 ms-1"
              data-testid={forColumn + '-header-sortUp'}
            />
          ) : null}
        </span>
      )}
    </th>
  );
};