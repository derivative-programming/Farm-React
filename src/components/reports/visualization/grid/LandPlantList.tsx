/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as LandPlantListReportService from "../../services/LandPlantList";
import { QueryResultItem } from "../../services/LandPlantList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields";  // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB"; 

export interface ReportGridLandPlantListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: LandPlantListReportService.QueryResultItem[];
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
export const ReportGridLandPlantList: FC<ReportGridLandPlantListProps> = ({
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
  const componentName = "ReportGridLandPlantList";

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
        items.map((item: LandPlantListReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
    } else {
      logClick(componentName,"uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
  };  

  const onMultSelectButtonToEditableClick = () => {  //NOSONAR
    logClick(componentName,"multSelectButtonToEditable","");
    const selectedCodes = items.map(
      (item: QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToEditableRequest = { plantCodeListCsv };

    AsyncServices.LandUserPlantMultiSelectToEditableSubmitRequest(
      data,
      contextCode
    ).then(() => onRefreshRequest());
  };

  const onMultSelectButtonToNotEditableClick = () => {
    logClick(componentName,"multSelectButtonToNotEditable","");
    const selectedCodes = items.map(
      (item: QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToNotEditableRequest = { plantCodeListCsv };

    AsyncServices.LandUserPlantMultiSelectToNotEditableSubmitRequest(
      data,
      contextCode
    ).then(() => onRefreshRequest());
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
      <td colSpan={100}>No rows returned text</td>
    </tr>
  );

  return (
    <div data-testid={name} className="w-100 mt-3">
      <div className="d-flex w-100 justify-content-left">
        <ReportInput.ReportInputButton name="multSelectButtonToEditable"
          onClick={() => onMultSelectButtonToEditableClick()}
          buttonText="To Editable"
          className="mb-3 me-2"
          isButtonCallToAction={false}
          isVisible={true}
          isEnabled={true}
        />
        <ReportInput.ReportInputButton name="multSelectButtonToNotEditable"
          onClick={() => onMultSelectButtonToNotEditableClick()}
          buttonText="To Not Editable"
          className="mb-3 me-2"
          isButtonCallToAction={false}
          isVisible={true}
          isEnabled={true}
        />
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
            <th id="plantCode-header">
              {" "}
              <Form.Check
                type="checkbox"
                id="plantCode-select-all-rows-checkbox"
                name="plantCode-select-all-rows-checkbox"
                onChange={(e) => onSelectAllRows(e)}
              />
            </th>

            <ReportColumnHeader forColumn="someIntVal"
              isSortDescending={isSortDescending}
              label="Int Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someBigIntVal"
              isSortDescending={isSortDescending}
              label="Big Int Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someBitVal"
              isSortDescending={isSortDescending}
              label="Bit Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="isEditAllowed"
              isSortDescending={isSortDescending}
              label="Edit Allowed"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="isDeleteAllowed"
              isSortDescending={isSortDescending}
              label="Delete Allowed"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someFloatVal"
              isSortDescending={isSortDescending}
              label="Float Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someDecimalVal"
              isSortDescending={isSortDescending}
              label="Decimal Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someUTCDateTimeVal"
              isSortDescending={isSortDescending}
              label="Date Time Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someDateVal"
              isSortDescending={isSortDescending}
              label="Date Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someMoneyVal"
              isSortDescending={isSortDescending}
              label="Money Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someNVarCharVal"
              isSortDescending={isSortDescending}
              label="N Var Char Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someVarCharVal"
              isSortDescending={isSortDescending}
              label="Var Char Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someTextVal"
              isSortDescending={isSortDescending}
              label="Text Val"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="somePhoneNumber"
              isSortDescending={isSortDescending}
              label="Phone Number"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someEmailAddress"
              isSortDescending={isSortDescending}
              label="Email Address"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Flavor Name"
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="flavorCode"
              isSortDescending={isSortDescending}
              label="flavor Code"
              onSort={onSort}
              isVisible={false}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someIntConditionalOnDeletable"
              isSortDescending={isSortDescending}
              label="Int Conditional"
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

            <ReportColumnHeader forColumn="updateLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              sortedColumnName={sortedColumnName}
              isVisible={false}
            />

            <ReportColumnHeader forColumn="deleteAsyncButtonLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="detailsLinkPlantCode"
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
            items.map((item: LandPlantListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
                  <td data-testid={"plantCodeColumn-" + index}>
                    <Form.Check
                      type="checkbox"
                      id={"row-select-" + index}
                      name={"row-select-" + index}
                      checked={checkedIndexes.includes(index.toString())}
                      onChange={(e) => {
                        handleRowSelectCheckboxChange(e, index, item.plantCode);
                      }}
                    />
                  </td>
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                    rowIndex={index}
                    value={item.someIntVal}
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

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
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
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                    isVisible={true}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                    rowIndex={index}
                    value={item.flavorCode}
                    isVisible={false}
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

                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateLinkPlantCode"
                    rowIndex={index}
                    buttonText="Update"
                    isButtonCallToAction={false}
                    onClick={() => {
                      logClick(componentName,"updateLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.updateLinkPlantCode)
                    }}
                    isVisible={false}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="deleteAsyncButtonLinkPlantCode"
                    rowIndex={index}
                    buttonText="Delete"
                    isButtonCallToAction={false}
                    isVisible={true}
                    onClick={() =>
                      {
                        logClick(componentName,"deleteAsyncButtonLinkPlantCode","");
                        const data: AsyncServices.PlantUserDeleteRequest = {};
                        AsyncServices.PlantUserDeleteSubmitRequest(data, item.deleteAsyncButtonLinkPlantCode).then(() =>
                        onRefreshRequest()
                      )
                    }}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="detailsLinkPlantCode"
                    rowIndex={index}
                    buttonText="Details"
                    isButtonCallToAction={true}
                    isVisible={true}
                    onClick={() => {
                      logClick(componentName,"detailsLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.detailsLinkPlantCode);
                    }}
                  />
                </tr>
              );
            })
          ) : (tableRowAlternateCases)}
        </tbody>
      </Table>

      <ReportPagination
        name="reportGridLandPlantList-paginator"
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
