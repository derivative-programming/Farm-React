/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserFlavorListReportService from "../../services/PacUserFlavorList";
import { QueryResultItem } from "../../services/PacUserFlavorList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";  // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPacUserFlavorListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: PacUserFlavorListReportService.QueryResultItem[];
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
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridPacUserFlavorList";

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
        items.map((item: PacUserFlavorListReportService.QueryResultItem, index) =>
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
            <ReportColumnHeader forColumn="flavorCode"
              isSortDescending={isSortDescending}
              label="flavor Code"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
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
            items.map((item: PacUserFlavorListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
                  <td data-testid={"flavorCodeColumn-" + index}>
                    <Form.Check
                      type="checkbox"
                      id={"row-select-" + index}
                      name={"row-select-" + index}
                      checked={checkedIndexes.includes(index.toString())}
                      onChange={(e) => {
                        handleRowSelectCheckboxChange(e, index, item.flavorCode);
                      }}
                    />
                  </td>
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                    rowIndex={index}
                    value={item.someIntVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalIntVal"
                    rowIndex={index}
                    value={item.someConditionalIntVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                    rowIndex={index}
                    value={item.someBigIntVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalBigIntVal"
                    rowIndex={index}
                    value={item.someConditionalBigIntVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                    rowIndex={index}
                    isChecked={item.someBitVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someConditionalBitVal"
                    rowIndex={index}
                    isChecked={item.someConditionalBitVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                    rowIndex={index}
                    isChecked={item.isEditAllowed}
                    isVisible={true}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                    rowIndex={index}
                    isChecked={item.isDeleteAllowed}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                    rowIndex={index}
                    value={item.someFloatVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalFloatVal"
                    rowIndex={index}
                    value={item.someConditionalFloatVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalDecimalVal"
                    rowIndex={index}
                    value={item.someConditionalDecimalVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someConditionalUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someConditionalUTCDateTimeVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someConditionalDateVal"
                    rowIndex={index}
                    value={item.someConditionalDateVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                    rowIndex={index}
                    value={item.someMoneyVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someConditionalMoneyVal"
                    rowIndex={index}
                    value={item.someConditionalMoneyVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                    rowIndex={index}
                    value={item.someNVarCharVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalNVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalNVarCharVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalVarCharVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalTextVal"
                    rowIndex={index}
                    value={item.someConditionalTextVal}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="someConditionalPhoneNumber"
                    rowIndex={index}
                    value={item.someConditionalPhoneNumber}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                    isVisible={true}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someConditionalEmailAddress"
                    rowIndex={index}
                    value={item.someConditionalEmailAddress}
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn=""
                    rowIndex={index}
                    value={item.}
                    isVisible={true}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="SomeIntConditionalOnDeletable"
                    rowIndex={index}
                    value={item.someIntConditionalOnDeletable}
                    conditionallyVisible={item.isDeleteAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="NVarCharAsUrl"
                    rowIndex={index}
                    value={item.nVarCharAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="NVarCharConditionalAsUrl"
                    rowIndex={index}
                    value={item.NVarCharConditionalAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                    conditionallyVisible={item.isEditAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="flavorCode"
                    rowIndex={index}
                    buttonText=""
                    isButtonCallToAction={false}
                    onClick={() => {
                      logClick(componentName,"flavorCode","");
                      onNavigateTo("//" + item.flavorCode)
                    }}
                    isVisible={true}
                  />
                </tr>
              );
            })
          ) : (tableRowAlternateCases)}
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
          variant="outline-secondary">
          Export
        </Button>
      </div>
    </div>
  );
};

