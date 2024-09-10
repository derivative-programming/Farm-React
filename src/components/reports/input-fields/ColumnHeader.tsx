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
  isWordWrapDisabled?: boolean;
  isPreferenceVisible?: boolean;
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
  minWidth = "50px",
  maxWidth = "400px",  
  align = "center",  
  tooltip = "",  
  isSortDisabled = false, 
  isWordWrapDisabled = false,
  isPreferenceVisible = true,
}): ReactElement => {

  const handleSort = () => {
    if (!isSortDisabled) {
      onSort(forColumn);
    }
  };

  if(minWidth && minWidth === "") {
    minWidth = "50px";
  }  

  const isComponentVisible = isVisible && isPreferenceVisible;

  return (
    <th
      className="cursor-pointer ps-2 pe-2"
      data-testid={forColumn + '-header'}
      id={forColumn + '-header'}
      hidden={!isComponentVisible}
      onClick={handleSort}
      style={{
        minWidth: minWidth ? minWidth : undefined,
        maxWidth: maxWidth,
        textAlign: align,
        overflow: "hidden",          // Hides overflow
        textOverflow: "ellipsis",    // Shows ellipsis when text overflows
        whiteSpace: isWordWrapDisabled ? "nowrap" : "normal",
      }}
      title={tooltip || undefined} // Only show tooltip if it exists
    >
      {label}{" "}
      {!isSortDisabled && (
        <span>
          {" "}
          {sortedColumnName === forColumn && !isSortDescending && isComponentVisible ? (
            <SortDownAlt
              className="w-12 ms-1"
              data-testid={forColumn + '-header-sortDown'}
            />
          ) : null}

          {sortedColumnName === forColumn && isSortDescending && isComponentVisible ? (
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