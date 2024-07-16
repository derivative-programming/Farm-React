import React, { FC, ReactElement, useState } from "react";
import { Button, Form, Table, Spinner } from "react-bootstrap";
import "../../../../App.scss";
import * as ReportService from "../../services/PacUserFlavorList";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as ReportColumnDisplay from "./columns";
import * as AsyncServices from "../../../services";
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPacUserFlavorListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: ReportService.QueryResultItem[];
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
export const ReportGridPacUserFlavorList: FC<ReportGridPacUserFlavorListProps> = ({
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
  const { logClick } = useAnalyticsDB();

  const handleRowSelectCheckboxChange = (
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

  const onSelectAllRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      logClick("ReportGridPacUserFlavorList","selectAllRows","");
      setCheckedIndexes(
        items.map((item: ReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
    } else {
      logClick("ReportGridPacUserFlavorList","uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
  };

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
            <ReportColumnHeader forColumn="flavorDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="flavorDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="flavorIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="flavorLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="pacName"
              isSortDescending={isSortDescending}
              label="Pac Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
          </tr>
        </thead>
        <tbody>
          {items && !showProcessing && items.length ? (
            items.map((item: ReportService.QueryResultItem, index) => {
              return (
                <tr key={index.toString()}>
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorDescription"
                    rowIndex={index}
                    value={item.flavorDescription}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="flavorDisplayOrder"
                    rowIndex={index}
                    value={item.flavorDisplayOrder}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="flavorIsActive"
                    rowIndex={index}
                    isChecked={item.flavorIsActive}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorLookupEnumName"
                    rowIndex={index}
                    value={item.flavorLookupEnumName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="pacName"
                    rowIndex={index}
                    value={item.pacName}
                    isVisible={true}
                  />
                </tr>
              );
            })
          ) : (showProcessing ?
            <tr>
              <td colSpan={100}>
                <div className="text-center  bg-secondary bg-opacity-25">
                <Spinner animation="border" className="mt-2 mb-2" />
              </div>
            </td>
            </tr>
            :
            <tr>
              <td colSpan={100}></td>
            </tr>
          )}
        </tbody>
      </Table>

      <ReportPagination
        name="reportGridPacUserFlavorList-paginator"
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

