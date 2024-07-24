/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserDateGreaterThanFilterListReportService from "../../services/PacUserDateGreaterThanFilterList";
import { QueryResultItem } from "../../services/PacUserDateGreaterThanFilterList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";  // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPacUserDateGreaterThanFilterListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: PacUserDateGreaterThanFilterListReportService.QueryResultItem[];
  onSort(columnName: string): void;
  onExport(): void;
  onNavigateTo(url: string): void;
  onRefreshRequest(): void;
  currentPage: number;
  totalItemCount: number;
  pageSize?: number;
  onPageSizeChange(pageSize: number): void;
  onPageSelection(pageNumber: number): void;
  showPagingControls?: boolean;
  showExport?: boolean;
  showProcessing?: boolean;
}
export const ReportGridPacUserDateGreaterThanFilterList: FC<ReportGridPacUserDateGreaterThanFilterListProps> = ({
  name,
  contextCode,
  sortedColumnName,
  isSortDescending,
  items,
  onSort,
  onExport,
  onNavigateTo,
  onRefreshRequest,
  currentPage,
  totalItemCount,
  pageSize = 5,
  onPageSizeChange,
  onPageSelection,
  showPagingControls = true,
  showExport = true,
  showProcessing = false,
}): ReactElement => {
  const initialCheckedIndexes: string[] = [];
  const [checkedIndexes, setCheckedIndexes] = useState(initialCheckedIndexes);
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridPacUserDateGreaterThanFilterList";

  const handleRowSelectCheckboxChange = (  //NOSONAR
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    rowCode: string
  ) => {
    if (e.target.checked) {
      checkedIndexes.push(index.toString());
      const newList = checkedIndexes.filter((item) => item);
      setCheckedIndexes(newList);
    } else {
      const newList = checkedIndexes.filter(
        (item) => item !== index.toString()
      );
      setCheckedIndexes(newList);
    }
  };

  const onSelectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {  //NOSONAR
    if (e.target.checked) {
      logClick(componentName,"selectAllRows","");
      setCheckedIndexes(
        items.map((item: PacUserDateGreaterThanFilterListReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
    } else {
      logClick(componentName,"uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
  };

  const tableRowAlternateCases = showProcessing ? (
    <tr>
      <td colSpan={100}>
        <div className="text-center bg-secondary bg-opacity-25">
          <Spinner animation="border" className="mt-2 mb-2" />
        </div>
      </td>
    </tr>
  ) : (
    <tr>
      <td colSpan={100}></td>
    </tr>
  );

  return (
    <div data-testid={name} className="w-100 mt-3">
      <div className="d-flex w-100 justify-content-left">

      </div>

      <Table
        className="report-list-table"
        striped
        //bordered
        hover
        responsive
        size="sm"
      >
        <thead>
          <tr>
            <ReportColumnHeader forColumn="dateGreaterThanFilterDayCount"
              isSortDescending={isSortDescending}
              label="Day Count"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
          </tr>
        </thead>
        <tbody>
          {items && !showProcessing && items.length ? (
            items.map((item: PacUserDateGreaterThanFilterListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDayCount"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDayCount}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterDescription"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDescription}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDisplayOrder"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDisplayOrder}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="dateGreaterThanFilterIsActive"
                    rowIndex={index}
                    isChecked={item.dateGreaterThanFilterIsActive}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterLookupEnumName"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterLookupEnumName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterName"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterName}
                    isVisible={true}
                  />
                </tr>
              );
            })
          ) : (tableRowAlternateCases)}
        </tbody>
      </Table>

      <ReportPagination
        name="reportGridPacUserDateGreaterThanFilterList-paginator"
        currentPage={currentPage}
        currentPageItemCount={items.length}
        onPageSelection={onPageSelection}
        onPageSizeChange={onPageSizeChange}
        pageSize={pageSize}
        totalItemCount={totalItemCount}
        hidden={!showPagingControls}
      />
      <div
        className="d-flex justify-content-center justify-content-md-end w-100 mb-3 mb-md-0"
        hidden={!showExport}
      >
        <Button data-testidid="export-button"
          onClick={() => onExport()}
          className='me-md-2'
          size="sm"
          variant="secondary">
          Export
        </Button>
      </div>
    </div>
  );
};

