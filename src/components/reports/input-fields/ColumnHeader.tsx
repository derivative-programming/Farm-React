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

  // Ensure minWidth has a default value
  const appliedMinWidth = minWidth || "50px";

  const isComponentVisible = isVisible && isPreferenceVisible;

  return (
    <th
      className="cursor-pointer ps-2 pe-2"
      data-testid={`${forColumn}-header`}
      id={`${forColumn}-header`}
      hidden={!isComponentVisible}
      onClick={handleSort}
      style={{
        minWidth: appliedMinWidth,
        maxWidth: maxWidth,
        textAlign: align,
        padding: "2px", // Adjust padding as needed
        position: "relative", // For potential future use
      }}
      title={tooltip || undefined} // Only show tooltip if it exists
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          alignItems: "center",
          width: "100%",
        }}
      >
        <span
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: isWordWrapDisabled ? "nowrap" : "normal",
            wordBreak: "break-word",
            paddingRight: isSortDisabled ? "0" : "0px", // Space for the icon
            // Optionally, set a max height or line-clamp if needed
          }}
        >
          {label}
        </span>
        {!isSortDisabled && isComponentVisible && (
          <span
            style={{
              marginLeft: "1px", // Space between text and icon
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexShrink: 0, // Prevent the icon from shrinking
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the sort twice
              handleSort();
            }}
          >
            {sortedColumnName === forColumn && !isSortDescending && (
              <SortDownAlt
                className="sort-icon"
                data-testid={`${forColumn}-header-sortDown`}
                aria-label="Sorted descending"
                style={{ cursor: "pointer" }}
              />
            )}

            {sortedColumnName === forColumn && isSortDescending && (
              <SortUp
                className="sort-icon"
                data-testid={`${forColumn}-header-sortUp`}
                aria-label="Sorted ascending"
                style={{ cursor: "pointer" }}
              />
            )}
          </span>
        )}
      </div>
    </th>
  );
};
