/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as LandPlantListReportService from "../../services/LandPlantList";
import { QueryResultItem } from "../../services/LandPlantList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination,TableSettings } from "../../input-fields";
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
  const [validationError, setValidationError] = useState<string | null>(null);
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridLandPlantList";
  const contextValueName = "landCode";
  const contextValue = contextCode;

  const defaultColumnSettings = {
    isEditAllowed: {
      header: 'Edit Allowed',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someIntVal: {
      header: 'Int Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalIntVal: {
      header: 'Conditional Int Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someBigIntVal: {
      header: 'Big Int Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalBigIntVal: {
      header: 'Conditional Big Int Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someBitVal: {
      header: 'Bit Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalBitVal: {
      header: 'Conditional Bit Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    isDeleteAllowed: {
      header: 'Delete Allowed',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someFloatVal: {
      header: 'Float Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalFloatVal: {
      header: 'Conditional Float Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someDecimalVal: {
      header: 'Decimal Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalDecimalVal: {
      header: 'Conditional Decimal Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someUTCDateTimeVal: {
      header: 'Date Time Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalUTCDateTimeVal: {
      header: 'Conditional Date Time Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someDateVal: {
      header: 'Date Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalDateVal: {
      header: 'Conditional Date Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someMoneyVal: {
      header: 'Money Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalMoneyVal: {
      header: 'Conditional Money Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someNVarCharVal: {
      header: 'N Var Char Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalNVarCharVal: {
      header: 'Conditional N Var Char Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someVarCharVal: {
      header: 'Var Char Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalVarCharVal: {
      header: 'Conditional Var Char Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someTextVal: {
      header: 'Text Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalTextVal: {
      header: 'Conditional Text Val',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    somePhoneNumber: {
      header: 'Phone Number',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalPhoneNumber: {
      header: 'Conditional Phone Number',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someEmailAddress: {
      header: 'Email Address',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalEmailAddress: {
      header: 'Conditional Email Address',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    isImageUrlAvailable: {
      header: 'Is Image Url Available',
      isVisible: false,
      isUserPreferenceVisible: true,
    },
    someImageUrlVal: {
      header: 'Image Url',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    someConditionalImageUrl: {
      header: 'Conditional Image Url',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    flavorName: {
      header: 'Flavor Name',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    flavorCode: {
      header: 'Flavor Code',
      isVisible: false,
      isUserPreferenceVisible: true,
    },
    someIntConditionalOnDeletable: {
      header: 'Int Conditional',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    nVarCharAsUrl: {
      header: 'N Var Char As Url',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    nVarCharConditionalAsUrl: {
      header: 'Conditional N Var Char As Url',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    updateLinkPlantCode: {
      header: '',
      isVisible: false,
      isUserPreferenceVisible: true,
    },
    deleteAsyncButtonLinkPlantCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    detailsLinkPlantCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    testFileDownloadLinkPacCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    testConditionalFileDownloadLinkPacCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    testAsyncFlowReqLinkPacCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    testConditionalAsyncFlowReqLinkPacCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
    conditionalBtnExampleLinkPlantCode: {
      header: '',
      isVisible: true,
      isUserPreferenceVisible: true,
    },
  };

  const [columns, setColumns] = useState(defaultColumnSettings);
  
  useEffect(() => {
    console.log("useEffect: []")
    const storedData = localStorage.getItem('landPlantListHiddenColumns');
    console.log("get storedData:",storedData)
    if(storedData){
      const storedHiddenColumns = JSON.parse(storedData) || [];
      setColumns(prevColumns => {
        const updatedColumns = { ...prevColumns };
        storedHiddenColumns.forEach(colKey => {
          if (updatedColumns[colKey]) {
            updatedColumns[colKey].isUserPreferenceVisible = false;
          }
        });
        console.log("setColumns:",updatedColumns)
        return updatedColumns;
      });
    }
  }, []);

  useEffect(() => {
    console.log("columns:", columns)
    const hiddenColumns = Object.keys(columns).filter(
      colKey => !columns[colKey].isUserPreferenceVisible
    );
    console.log("set storedData:",hiddenColumns)
    localStorage.setItem('landPlantListHiddenColumns', JSON.stringify(hiddenColumns));
  }, [columns]);

  const handleColumnVisibility = (colName: string) => {
    console.log("handleColumnVisibility:",colName)
    setColumns(prevColumns => ({
      ...prevColumns,
      [colName]: {
        ...prevColumns[colName],
        isUserPreferenceVisible: !prevColumns[colName].isUserPreferenceVisible
      }
    }));
  };

  const handleSetAllColumnsVisibility = (visibility: boolean) => {
    const updatedColumns = { ...columns };
    Object.keys(updatedColumns).forEach(colKey => {
      if (updatedColumns[colKey].isVisible) {
        updatedColumns[colKey].isUserPreferenceVisible = visibility;
      }
    });
    setColumns(updatedColumns);
  };

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
        items.map((item: LandPlantListReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
      setValidationError(null); 
    } else {
      logClick(componentName,"uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
  };  

  const onMultSelectButtonToEditableClick = () => {  //NOSONAR
    logClick(componentName,"multSelectButtonToEditable","");
    if (checkedIndexes.length === 0) {
      setValidationError('Please select at least one row.');
      return;
    } 
    const selectedCodes = items.map(
      (item: QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToEditableRequest = AsyncServices.buildLandUserPlantMultiSelectToEditableRequest();
    data.plantCodeListCsv = plantCodeListCsv;
 
    if (Object.hasOwn(data, contextValueName)) {
      data[contextValueName] = contextValue;
    }

    AsyncServices.LandUserPlantMultiSelectToEditableSubmitRequest(
      data,
      contextValue
    ).then(() => onRefreshRequest());
  };

  const onMultSelectButtonToNotEditableClick = () => {
    logClick(componentName,"multSelectButtonToNotEditable","");
    if (checkedIndexes.length === 0) {
      setValidationError('Please select at least one row.');
      return;
    } 
    const selectedCodes = items.map(
      (item: QueryResultItem, index) => {
        if (checkedIndexes.includes(index.toString())) {
          return item.plantCode;
        }
      }
    );

    const plantCodeListCsv = selectedCodes.join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToNotEditableRequest = AsyncServices.buildLandUserPlantMultiSelectToNotEditableRequest();

    data.plantCodeListCsv = plantCodeListCsv;
    
    if (Object.hasOwn(data, contextValueName)) {
      data[contextValueName] = contextValue;
    }

    AsyncServices.LandUserPlantMultiSelectToNotEditableSubmitRequest(
      data,
      contextValue
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
      <td colSpan={100} className="text-start">No rows returned text</td>
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

  // console.log("vrtest:" ,columns)
  // console.log("vrtest:" ,columns["someConditionalTextVal"])
  // console.log("vrtest:" ,columns["someConditionalTextVal"].isUserPreferenceVisible)

  return (
    <div data-testid={name} className="w-100 mt-3">
      <div className="d-flex w-100 justify-content-between mb3">
        <div>
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
        
        <div>
          <TableSettings 
            name="TableSettingsLandPlantList"
            columns={columns}
            onToggleColumn={handleColumnVisibility} 
            onSetAllColumnsVisibility={handleSetAllColumnsVisibility}
          />
        </div>
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
            <th id="plantCode-header">
              {" "}
              <Form.Check
                type="checkbox"
                id="plantCode-select-all-rows-checkbox"
                name="plantCode-select-all-rows-checkbox"
                onChange={(e) => onSelectAllRows(e)}
              />
            </th>
            
            <ReportColumnHeader forColumn="isEditAllowed"
              isSortDescending={isSortDescending}
              label="Edit Allowed"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["isEditAllowed"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someIntVal"
              isSortDescending={isSortDescending}
              label="Int Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someIntVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalIntVal"
              isSortDescending={isSortDescending}
              label="Conditional Int Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalIntVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someBigIntVal"
              isSortDescending={isSortDescending}
              label="Big Int Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someBigIntVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalBigIntVal"
              isSortDescending={isSortDescending}
              label="Conditional Big Int Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalBigIntVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someBitVal"
              isSortDescending={isSortDescending}
              label="Bit Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someBitVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalBitVal"
              isSortDescending={isSortDescending}
              label="Conditional Bit Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalBitVal"].isUserPreferenceVisible}
            />


            <ReportColumnHeader forColumn="isDeleteAllowed"
              isSortDescending={isSortDescending}
              label="Delete Allowed"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["isDeleteAllowed"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someFloatVal"
              isSortDescending={isSortDescending}
              label="Float Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someFloatVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalFloatVal"
              isSortDescending={isSortDescending}
              label="Conditional Float Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalFloatVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someDecimalVal"
              isSortDescending={isSortDescending}
              label="Decimal Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someDecimalVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalDecimalVal"
              isSortDescending={isSortDescending}
              label="Conditional Decimal Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalDecimalVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someUTCDateTimeVal"
              isSortDescending={isSortDescending}
              label="Date Time Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someUTCDateTimeVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalUTCDateTimeVal"
              isSortDescending={isSortDescending}
              label="Conditional Date Time Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalUTCDateTimeVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someDateVal"
              isSortDescending={isSortDescending}
              label="Date Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someDateVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalDateVal"
              isSortDescending={isSortDescending}
              label="Conditional Date Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalDateVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someMoneyVal"
              isSortDescending={isSortDescending}
              label="Money Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someMoneyVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalMoneyVal"
              isSortDescending={isSortDescending}
              label="Conditional Money Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalMoneyVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someNVarCharVal"
              isSortDescending={isSortDescending}
              label="N Var Char Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someNVarCharVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalNVarCharVal"
              isSortDescending={isSortDescending}
              label="Conditional N Var Char Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalNVarCharVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someVarCharVal"
              isSortDescending={isSortDescending}
              label="Var Char Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someVarCharVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalVarCharVal"
              isSortDescending={isSortDescending}
              label="Conditional Var Char Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalVarCharVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someTextVal"
              isSortDescending={isSortDescending}
              label="Text Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someTextVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalTextVal"
              isSortDescending={isSortDescending}
              label="Conditional Text Val"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalTextVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="somePhoneNumber"
              isSortDescending={isSortDescending}
              label="Phone Number"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["somePhoneNumber"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalPhoneNumber"
              isSortDescending={isSortDescending}
              label="Conditional Phone Number"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalPhoneNumber"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someEmailAddress"
              isSortDescending={isSortDescending}
              label="Email Address"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someEmailAddress"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalEmailAddress"
              isSortDescending={isSortDescending}
              label="Conditional Email Address"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalEmailAddress"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="isImageUrlAvailable"
              isSortDescending={isSortDescending}
              label="Is Image Url Available"
              onSort={onSort}
              isVisible={false}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["isImageUrlAvailable"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someImageUrlVal"
              isSortDescending={isSortDescending}
              label="Image Url"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someImageUrlVal"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someConditionalImageUrl"
              isSortDescending={isSortDescending}
              label="Conditional Image Url"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someConditionalImageUrl"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Flavor Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["flavorName"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="flavorCode"
              isSortDescending={isSortDescending}
              label="flavor Code"
              onSort={onSort}
              isVisible={false}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["flavorCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="someIntConditionalOnDeletable"
              isSortDescending={isSortDescending}
              label="Int Conditional"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["someIntConditionalOnDeletable"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="nVarCharAsUrl"
              isSortDescending={isSortDescending}
              label="N Var Char As Url"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["nVarCharAsUrl"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="nVarCharConditionalAsUrl"
              isSortDescending={isSortDescending}
              label="Conditional N Var Char As Url"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["nVarCharConditionalAsUrl"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="updateLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={false}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["updateLinkPlantCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="deleteAsyncButtonLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["deleteAsyncButtonLinkPlantCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="detailsLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["detailsLinkPlantCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="testFileDownloadLinkPacCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["testFileDownloadLinkPacCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="testConditionalFileDownloadLinkPacCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["testConditionalFileDownloadLinkPacCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="testAsyncFlowReqLinkPacCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["testAsyncFlowReqLinkPacCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="testConditionalAsyncFlowReqLinkPacCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["testConditionalAsyncFlowReqLinkPacCode"].isUserPreferenceVisible}
            />

            <ReportColumnHeader forColumn="conditionalBtnExampleLinkPlantCode"
              isSortDescending={isSortDescending}
              label=""
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="123px"
              isUserPreferenceVisible={columns["conditionalBtnExampleLinkPlantCode"].isUserPreferenceVisible}
            />
{/* endset */}
          </tr>
        </thead>
        <tbody> 
          {items && !showProcessing && items.length ? (
            items.map((item: LandPlantListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
{/* endset */}
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

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isEditAllowed"
                    rowIndex={index}
                    isChecked={item.isEditAllowed}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["isEditAllowed"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                    rowIndex={index}
                    value={item.someIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someIntVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalIntVal"
                    rowIndex={index}
                    value={item.someConditionalIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalIntVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                    rowIndex={index}
                    value={item.someBigIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someBigIntVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalBigIntVal"
                    rowIndex={index}
                    value={item.someConditionalBigIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalBigIntVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                    rowIndex={index}
                    isChecked={item.someBitVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someBitVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someConditionalBitVal"
                    rowIndex={index}
                    isChecked={item.someConditionalBitVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalBitVal"].isUserPreferenceVisible}
                  />

 
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                    rowIndex={index}
                    isChecked={item.isDeleteAllowed}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["isDeleteAllowed"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                    rowIndex={index}
                    value={item.someFloatVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someFloatVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalFloatVal"
                    rowIndex={index}
                    value={item.someConditionalFloatVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalFloatVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someDecimalVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalDecimalVal"
                    rowIndex={index}
                    value={item.someConditionalDecimalVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalDecimalVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someUTCDateTimeVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someConditionalUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someConditionalUTCDateTimeVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalUTCDateTimeVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someDateVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someConditionalDateVal"
                    rowIndex={index}
                    value={item.someConditionalDateVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalDateVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                    rowIndex={index}
                    value={item.someMoneyVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someMoneyVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someConditionalMoneyVal"
                    rowIndex={index}
                    value={item.someConditionalMoneyVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalMoneyVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                    rowIndex={index}
                    value={item.someNVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someNVarCharVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalNVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalNVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalNVarCharVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someVarCharVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalVarCharVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someTextVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalTextVal"
                    rowIndex={index}
                    value={item.someConditionalTextVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalTextVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["somePhoneNumber"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="someConditionalPhoneNumber"
                    rowIndex={index}
                    value={item.someConditionalPhoneNumber}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalPhoneNumber"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someEmailAddress"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someConditionalEmailAddress"
                    rowIndex={index}
                    value={item.someConditionalEmailAddress}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["someConditionalEmailAddress"].isUserPreferenceVisible}
                  />

 
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isImageUrlAvailable"
                    rowIndex={index}
                    isChecked={item.isImageUrlAvailable}
                    isVisible={false}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["isImageUrlAvailable"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someImageUrlVal"
                    rowIndex={index}
                    value={item.someImageUrlVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["someImageUrlVal"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someConditionalImageUrl"
                    rowIndex={index}
                    value={item.someConditionalImageUrl}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isImageUrlAvailable} 
                    isUserPreferenceVisible={columns["someConditionalImageUrl"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["flavorName"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                    rowIndex={index}
                    value={item.flavorCode}
                    isVisible={false}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["flavorCode"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntConditionalOnDeletable"
                    rowIndex={index}
                    value={item.someIntConditionalOnDeletable}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isDeleteAllowed} 
                    isUserPreferenceVisible={columns["someIntConditionalOnDeletable"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharAsUrl"
                    rowIndex={index}
                    value={item.nVarCharAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["nVarCharAsUrl"].isUserPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharConditionalAsUrl"
                    rowIndex={index}
                    value={item.nVarCharConditionalAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["nVarCharConditionalAsUrl"].isUserPreferenceVisible}
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
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["updateLinkPlantCode"].isUserPreferenceVisible}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="deleteAsyncButtonLinkPlantCode"
                    rowIndex={index}
                    buttonText="Delete"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["deleteAsyncButtonLinkPlantCode"].isUserPreferenceVisible}
                    onClick={() =>
                      {
                        logClick(componentName,"deleteAsyncButtonLinkPlantCode","");
                        const data: AsyncServices.PlantUserDeleteRequest = AsyncServices.buildPlantUserDeleteRequest();
 
                        if (Object.hasOwn(data, contextValueName)) {
                          data[contextValueName] = contextValue;
                        }

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
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["detailsLinkPlantCode"].isUserPreferenceVisible}
                    onClick={() => {
                      logClick(componentName,"detailsLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.detailsLinkPlantCode);
                    }}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testFileDownloadLinkPacCode"
                    rowIndex={index}
                    buttonText="Test File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["testFileDownloadLinkPacCode"].isUserPreferenceVisible}
                    onClick={() =>
                      {
                        logClick(componentName,"testFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = AsyncServices.buildPacUserTestAsyncFileDownloadRequest();
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testFileDownloadLinkPacCode)
                        .then((response) => {
                          viewFileDownload(response);
                        }).then(() => onRefreshRequest())
                      }}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalFileDownloadLinkPacCode"
                    rowIndex={index}
                    buttonText="Test Conditional File Download"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["testConditionalFileDownloadLinkPacCode"].isUserPreferenceVisible}
                    onClick={() =>
                      {
                        logClick(componentName,"testConditionalFileDownloadLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFileDownloadRequest = AsyncServices.buildPacUserTestAsyncFileDownloadRequest();
                        AsyncServices.PacUserTestAsyncFileDownloadSubmitRequest(data, item.testConditionalFileDownloadLinkPacCode)
                        .then((response) => {
                          viewFileDownload(response);
                        }).then(() => onRefreshRequest())
                      }}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testAsyncFlowReqLinkPacCode"
                    rowIndex={index}
                    buttonText="Test Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isUserPreferenceVisible={columns["testAsyncFlowReqLinkPacCode"].isUserPreferenceVisible}
                    onClick={() =>
                      {
                        logClick(componentName,"testAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = AsyncServices.buildPacUserTestAsyncFlowReqRequest();
                                
                        if (Object.hasOwn(data, contextValueName)) {
                          data[contextValueName] = contextValue;
                        }

                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testAsyncFlowReqLinkPacCode).then(() =>
                        onRefreshRequest())
                      }}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="testConditionalAsyncFlowReqLinkPacCode"
                    rowIndex={index}
                    buttonText="Test Conditional Async Flow Req"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["testConditionalAsyncFlowReqLinkPacCode"].isUserPreferenceVisible}
                    onClick={() =>
                      {
                        logClick(componentName,"testConditionalAsyncFlowReqLinkPacCode","");
                        const data: AsyncServices.PacUserTestAsyncFlowReqRequest = AsyncServices.buildPacUserTestAsyncFlowReqRequest();
                         
                        if (Object.hasOwn(data, contextValueName)) {
                          data[contextValueName] = contextValue;
                        }
                        
                        AsyncServices.PacUserTestAsyncFlowReqSubmitRequest(data, item.testConditionalAsyncFlowReqLinkPacCode).then(() =>
                        onRefreshRequest())
                      }}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="conditionalBtnExampleLinkPlantCode"
                    rowIndex={index}
                    buttonText="Conditional Btn Example"
                    isButtonCallToAction={true}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isUserPreferenceVisible={columns["conditionalBtnExampleLinkPlantCode"].isUserPreferenceVisible}
                    onClick={() => {
                      logClick(componentName,"conditionalBtnExampleLinkPlantCode","");
                      onNavigateTo("/plant-user-details/" + item.conditionalBtnExampleLinkPlantCode);
                    }}
                  />
{/* endset */}

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
          variant="outline-secondary">
          Export
        </Button>
      </div>
    </div>
  );
};
