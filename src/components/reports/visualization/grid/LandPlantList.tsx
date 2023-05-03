import React, { FC, ReactElement, useState } from "react";
import { Button, Form, Table, Spinner } from "react-bootstrap";
import "../../../../App.scss";
import * as ReportService from "../../services/LandPlantList";
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";
import * as ReportColumnDisplay from "./columns";
import * as AsyncServices from "../../../services";
import { ReportPagination } from "../../input-fields";
import * as ReportInput from "../../input-fields"; 
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB"; 

export interface ReportGridLandPlantListProps {
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
  pageSize: number;
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
  pageSize,
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
      logClick("ReportGridLandPlantList","selectAllRows","");
      setCheckedIndexes(
        items.map((item: ReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
    } else {
      logClick("ReportGridLandPlantList","uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
  };  

  const onMultSelectButtonToEditableClick = () => {
    logClick("ReportGridLandPlantList","multSelectButtonToEditable","");
    const selectedCodes = items.map(
      (item: ReportService.QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: any = { plantCodeListCsv };

    AsyncServices.LandUserPlantMultiSelectToEditableSubmitRequest(
      data,
      contextCode
    ).then((response) => onRefreshRequest());
  };

  const onMultSelectButtonToNotEditableClick = () => {
    logClick("ReportGridLandPlantList","multSelectButtonToNotEditable","");
    const selectedCodes = items.map(
      (item: ReportService.QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: any = { plantCodeListCsv };

    AsyncServices.LandUserPlantMultiSelectToNotEditableSubmitRequest(
      data,
      contextCode
    ).then((response) => onRefreshRequest());
  }; 

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
        bordered
        hover
        responsive
        size="xl"
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
              label="Some Int Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someBigIntVal"
              isSortDescending={isSortDescending}
              label="Some Big Int Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someBitVal"
              isSortDescending={isSortDescending}
              label="Some Bit Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="isEditAllowed"
              isSortDescending={isSortDescending}
              label="Is Edit Allowed"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="isDeleteAllowed"
              isSortDescending={isSortDescending}
              label="Is Delete Allowed"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someFloatVal"
              isSortDescending={isSortDescending}
              label="Some Float Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someDecimalVal"
              isSortDescending={isSortDescending}
              label="Some Decimal Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someUTCDateTimeVal"
              isSortDescending={isSortDescending}
              label="Some Date Time Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someDateVal"
              isSortDescending={isSortDescending}
              label="Some Date Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someMoneyVal"
              isSortDescending={isSortDescending}
              label="Some Money Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someNVarCharVal"
              isSortDescending={isSortDescending}
              label="Some N Var Char Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someVarCharVal"
              isSortDescending={isSortDescending}
              label="Some Var Char Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someTextVal"
              isSortDescending={isSortDescending}
              label="Some Text Val"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="somePhoneNumber"
              isSortDescending={isSortDescending}
              label="Some Phone Number"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someEmailAddress"
              isSortDescending={isSortDescending}
              label="Some Email Address"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Flavor Name"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="flavorCode"
              isSortDescending={isSortDescending}
              label="flavor Code"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="someIntConditionalOnDeletable"
              isSortDescending={isSortDescending}
              label="Int Conditional On Deleteable"
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="nVarCharAsUrl"
              isSortDescending={isSortDescending}
              label="N Var Char As Url"
              onSort={onSort}
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
              sortedColumnName={sortedColumnName}
            />

            <ReportColumnHeader forColumn="detailsLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              sortedColumnName={sortedColumnName}
            />
          </tr>
        </thead>
        <tbody> 
          {items && !showProcessing && items.length ? (
            items.map((item: ReportService.QueryResultItem, index) => {
              return (
                <tr key={index.toString()}>
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
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                    rowIndex={index}
                    value={item.someBigIntVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                    rowIndex={index}
                    isChecked={item.someBitVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                    rowIndex={index}
                    isChecked={item.isEditAllowed}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                    rowIndex={index}
                    isChecked={item.isDeleteAllowed}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                    rowIndex={index}
                    value={item.someFloatVal}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                    rowIndex={index}
                    value={item.someMoneyVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                    rowIndex={index}
                    value={item.someNVarCharVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                    rowIndex={index}
                    value={item.flavorCode}
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
                  />

                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="updateLinkPlantCode"
                    rowIndex={index}
                    value={item.updateLinkPlantCode}
                    buttonText="Update"
                    isButtonCallToAction={false}
                    onClick={() => {
                      logClick("ReportGridLandPlantList","updateLinkPlantCode","");
                      onNavigateTo("/plant-edit/" + item.updateLinkPlantCode)
                    }}
                    isVisible={false}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="deleteAsyncButtonLinkPlantCode"
                    rowIndex={index}
                    value={item.deleteAsyncButtonLinkPlantCode}
                    buttonText="Delete"
                    isButtonCallToAction={false}
                    onClick={() =>
                      {
                        logClick("ReportGridLandPlantList","deleteAsyncButtonLinkPlantCode","");
                        const data: any = {};
                        AsyncServices.PlantUserDeleteSubmitRequest(data, item.deleteAsyncButtonLinkPlantCode).then((response) =>
                        onRefreshRequest()
                      )
                    }}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="detailsLinkPlantCode"
                    rowIndex={index}
                    value={item.detailsLinkPlantCode}
                    buttonText="Details"
                    isButtonCallToAction={true}
                    onClick={() => {
                      logClick("ReportGridLandPlantList","detailsLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.detailsLinkPlantCode);
                    }}
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
              <td colSpan={100}>No rows returned text</td>
            </tr> 
          )}
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
          variant="secondary">
          Export
        </Button>
      </div>
    </div>
  );
};
