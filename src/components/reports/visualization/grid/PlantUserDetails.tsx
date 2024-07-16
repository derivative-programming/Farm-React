/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState } from "react";
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as ReportService from "../../services/PlantUserDetails";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as ReportColumnDisplay from "./columns";
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPlantUserDetailsProps {
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
export const ReportGridPlantUserDetails: FC<ReportGridPlantUserDetailsProps> = ({
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
      logClick("ReportGridPlantUserDetails","selectAllRows","");
      setCheckedIndexes(
        items.map((item: ReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
    } else {
      logClick("ReportGridPlantUserDetails","uncheckSelectAllRows","");
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
            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="isDeleteAllowed"
              isSortDescending={isSortDescending}
              label="Is Delete Allowed"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="isEditAllowed"
              isSortDescending={isSortDescending}
              label="Is Edit Allowed"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="otherFlavor"
              isSortDescending={isSortDescending}
              label="Other Flavor"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someBigIntVal"
              isSortDescending={isSortDescending}
              label="Some Big Int Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someBitVal"
              isSortDescending={isSortDescending}
              label="Some Bit Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someDateVal"
              isSortDescending={isSortDescending}
              label="Some Date Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someDecimalVal"
              isSortDescending={isSortDescending}
              label="Some Decimal Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someEmailAddress"
              isSortDescending={isSortDescending}
              label="Some Email Address"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someFloatVal"
              isSortDescending={isSortDescending}
              label="Some Float Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someIntVal"
              isSortDescending={isSortDescending}
              label="Some Int Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someMoneyVal"
              isSortDescending={isSortDescending}
              label="Some Money Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someNVarCharVal"
              isSortDescending={isSortDescending}
              label="Some N Var Char Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="somePhoneNumber"
              isSortDescending={isSortDescending}
              label="Some Phone Number"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someTextVal"
              isSortDescending={isSortDescending}
              label="Some Text Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someUTCDateTimeVal"
              isSortDescending={isSortDescending}
              label="Some UTC Date Time Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="someVarCharVal"
              isSortDescending={isSortDescending}
              label="Some Var Char Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="nVarCharAsUrl"
              isSortDescending={isSortDescending}
              label="N Var Char As Url"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="updateButtonTextLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={false}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="randomPropertyUpdatesLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />
            <ReportColumnHeader forColumn="backToDashboardLinkTacCode"
              isSortDescending={isSortDescending}
              label=""
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
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                    rowIndex={index}
                    isChecked={item.isDeleteAllowed}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                    rowIndex={index}
                    isChecked={item.isEditAllowed}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="otherFlavor"
                    rowIndex={index}
                    value={item.otherFlavor}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                    rowIndex={index}
                    value={item.someBigIntVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                    rowIndex={index}
                    isChecked={item.someBitVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                    rowIndex={index}
                    value={item.someFloatVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                    rowIndex={index}
                    value={item.someIntVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                    rowIndex={index}
                    value={item.someMoneyVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                    rowIndex={index}
                    value={item.someNVarCharVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="NVarCharAsUrl"
                    rowIndex={index}
                    value={item.nVarCharAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateButtonTextLinkPlantCode"
                    rowIndex={index}
                    buttonText="Update Button Text"
                    isButtonCallToAction={true}
                    onClick={() => {
                      logClick("ReportGridPlantPlantList","updateButtonTextLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.updateButtonTextLinkPlantCode)
                    }}
                    isVisible={false}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="randomPropertyUpdatesLinkPlantCode"
                    rowIndex={index}
                    buttonText="Random Property Updates"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>
                      {
                        logClick("ReportGridPlantPlantList","randomPropertyUpdatesLinkPlantCode","");
                        const data: AsyncServices.PlantUserPropertyRandomUpdateRequest = {};
                        AsyncServices.PlantUserPropertyRandomUpdateSubmitRequest(data, item.randomPropertyUpdatesLinkPlantCode).then(() =>
                        onRefreshRequest()
                      )
                    }}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="backToDashboardLinkTacCode"
                    rowIndex={index}
                    buttonText="Back To Dashboard"
                    isButtonCallToAction={false}
                    onClick={() => {
                      logClick("ReportGridPlantTacList","backToDashboardLinkTacCode","");
                      onNavigateTo("/tac-farm-dashboard/" + item.backToDashboardLinkTacCode)
                    }}
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
        name="reportGridPlantUserDetails-paginator"
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

