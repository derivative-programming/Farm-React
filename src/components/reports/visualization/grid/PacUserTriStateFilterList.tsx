/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserTriStateFilterListReportService from "../../services/PacUserTriStateFilterList";
import { QueryResultItem } from "../../services/PacUserTriStateFilterList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";  // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPacUserTriStateFilterListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: PacUserTriStateFilterListReportService.QueryResultItem[];
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
export const ReportGridPacUserTriStateFilterList: FC<ReportGridPacUserTriStateFilterListProps> = ({
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
  const [validationError, setValidationError] = useState<string | null>(null);
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridPacUserTriStateFilterList";
  const contextValueName = "pacCode";
  const contextValue = contextCode;

  const handleRowSelectCheckboxChange = (  //NOSONAR
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    rowCode: string
  ) => {
    if (e.target.checked) {
      checkedIndexes.push(index.toString());
      const newList = checkedIndexes.filter((item) => item);
      setCheckedIndexes(newList);
      setValidationError(null);
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
        items.map((item: PacUserTriStateFilterListReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
      setValidationError(null);
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
      <td colSpan={100} className="text-start"></td>
    </tr>
  );

  const viewFileDownload = (response) => {
    const contentDisposition = response.headers['content-disposition'];
    let filename = uuidv4() + '.csv';

    if (contentDisposition) {
        // Attempt to extract the filename*= value first, then fallback to filename=
        const filenameMatch = contentDisposition.match(/filename\*?=['"]?([^;'"]+)/);
        if (filenameMatch && filenameMatch[1]) {
            filename = decodeURIComponent(filenameMatch[1].replace(/UTF-8''/, ''));
        }
    }

    // Get the content type or default to "text/csv"
    const contentType = response.headers['content-type'] || 'text/csv';

    const blob = new Blob([response.data], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div data-testid={name} className="w-100 mt-3">
      <div className="d-flex w-100 justify-content-left">

      </div>
      {validationError && (
        <div className="text-start text-danger mb-3">
          {validationError}
        </div>
      )}

      <Table
        className="report-list-table"
        striped
        bordered
        hover
        responsive
        size="sm"
      >
        <thead>
          <tr>
{/* endset */}
            <ReportColumnHeader forColumn="triStateFilterCode"
              isSortDescending={isSortDescending}
              label="triStateFilter Code"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="triStateFilterStateIntValue"
              isSortDescending={isSortDescending}
              label="State Int Value"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
{/* endset */}
          </tr>
        </thead>
        <tbody>
          {items && !showProcessing && items.length ? (
            items.map((item: PacUserTriStateFilterListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
{/* endset */}
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterCode"
                    rowIndex={index}
                    value={item.triStateFilterCode}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterDescription"
                    rowIndex={index}
                    value={item.triStateFilterDescription}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="triStateFilterDisplayOrder"
                    rowIndex={index}
                    value={item.triStateFilterDisplayOrder}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="triStateFilterIsActive"
                    rowIndex={index}
                    isChecked={item.triStateFilterIsActive}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterLookupEnumName"
                    rowIndex={index}
                    value={item.triStateFilterLookupEnumName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="triStateFilterName"
                    rowIndex={index}
                    value={item.triStateFilterName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="triStateFilterStateIntValue"
                    rowIndex={index}
                    value={item.triStateFilterStateIntValue}
                    isVisible={true}
                  />
{/* endset */}

                </tr>
              );
            })
          ) : (tableRowAlternateCases)}
        </tbody>
      </Table>

      <ReportPagination
        name="reportGridPacUserTriStateFilterList-paginator"
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
          variant="outline-secondary">
          Export
        </Button>
      </div>
    </div>
  );
};

