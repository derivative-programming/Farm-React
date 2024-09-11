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
//endset
    plantCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    isEditAllowed: {
      header: 'Edit Allowed',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someIntVal: {
      header: 'Int Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalIntVal: {
      header: 'Conditional Int Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someBigIntVal: {
      header: 'Big Int Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalBigIntVal: {
      header: 'Conditional Big Int Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someBitVal: {
      header: 'Bit Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalBitVal: {
      header: 'Conditional Bit Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    isDeleteAllowed: {
      header: 'Delete Allowed',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someFloatVal: {
      header: 'Float Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalFloatVal: {
      header: 'Conditional Float Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someDecimalVal: {
      header: 'Decimal Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalDecimalVal: {
      header: 'Conditional Decimal Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someUTCDateTimeVal: {
      header: 'Date Time Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalUTCDateTimeVal: {
      header: 'Conditional Date Time Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someDateVal: {
      header: 'Date Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalDateVal: {
      header: 'Conditional Date Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someMoneyVal: {
      header: 'Money Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalMoneyVal: {
      header: 'Conditional Money Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someNVarCharVal: {
      header: 'N Var Char Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalNVarCharVal: {
      header: 'Conditional N Var Char Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someVarCharVal: {
      header: 'Var Char Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalVarCharVal: {
      header: 'Conditional Var Char Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someTextVal: {
      header: 'Text Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalTextVal: {
      header: 'Conditional Text Val',
      isVisible: true,
      isPreferenceVisible: true,
    },
    somePhoneNumber: {
      header: 'Phone Number',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalPhoneNumber: {
      header: 'Conditional Phone Number',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someEmailAddress: {
      header: 'Email Address',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalEmailAddress: {
      header: 'Conditional Email Address',
      isVisible: true,
      isPreferenceVisible: true,
    },
    isImageUrlAvailable: {
      header: 'Is Image Url Available',
      isVisible: false,
      isPreferenceVisible: true,
    },
    someImageUrlVal: {
      header: 'Image Url',
      isVisible: true,
      isPreferenceVisible: true,
    },
    someConditionalImageUrl: {
      header: 'Conditional Image Url',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorName: {
      header: 'Flavor Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorCode: {
      header: 'Flavor Code',
      isVisible: false,
      isPreferenceVisible: true,
    },
    someIntConditionalOnDeletable: {
      header: 'Int Conditional',
      isVisible: true,
      isPreferenceVisible: true,
    },
    nVarCharAsUrl: {
      header: 'N Var Char As Url',
      isVisible: true,
      isPreferenceVisible: true,
    },
    nVarCharConditionalAsUrl: {
      header: 'Conditional N Var Char As Url',
      isVisible: true,
      isPreferenceVisible: true,
    },
    updateLinkPlantCode: {
      header: '',
      isVisible: false,
      isPreferenceVisible: true,
    },
    deleteAsyncButtonLinkPlantCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    detailsLinkPlantCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    testFileDownloadLinkPacCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    testConditionalFileDownloadLinkPacCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    testAsyncFlowReqLinkPacCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    testConditionalAsyncFlowReqLinkPacCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
    conditionalBtnExampleLinkPlantCode: {
      header: '',
      isVisible: true,
      isPreferenceVisible: true,
    },
//endset
  };

  const [myShowProcessing, setMyShowProcessing] = useState(false);
  const [columns, setColumns] = useState(defaultColumnSettings);

  useEffect(() => {
    // Reset checkedIndexes or apply any logic based on new items
    setCheckedIndexes([]); // Example: Clear all checked indexes on new items
    setMyShowProcessing(false);
  }, [items]);

  useEffect(() => {
    const storedData = localStorage.getItem('landPlantListHiddenColumns');
    if(storedData){
      const storedHiddenColumns = JSON.parse(storedData) || [];
      setColumns(prevColumns => {
        const updatedColumns = { ...prevColumns };
        storedHiddenColumns.forEach(colKey => {
          if (updatedColumns[colKey]) {
            updatedColumns[colKey].isPreferenceVisible = false;
          }
        });
        return updatedColumns;
      });
    }
  }, []);

  useEffect(() => {
    const hiddenColumns = Object.keys(columns).filter(
      colKey => !columns[colKey].isPreferenceVisible
    );
    localStorage.setItem('landPlantListHiddenColumns', JSON.stringify(hiddenColumns));
  }, [columns]);

  const handleColumnVisibility = (colName: string) => {
    
    setColumns(prevColumns => ({
      ...prevColumns,
      [colName]: {
        ...prevColumns[colName],
        isPreferenceVisible: !prevColumns[colName].isPreferenceVisible
      }
    }));
  };

  const handleSetAllColumnsVisibility = (visibility: boolean) => {
    const updatedColumns = { ...columns };
    Object.keys(updatedColumns).forEach(colKey => {
      if (updatedColumns[colKey].isVisible) {
        updatedColumns[colKey].isPreferenceVisible = visibility;
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

    const plantCodeListCsv = selectedCodes.filter(code => code).join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToEditableRequest = AsyncServices.buildLandUserPlantMultiSelectToEditableRequest();
    data.plantCodeListCsv = plantCodeListCsv;
 
    if (Object.hasOwn(data, contextValueName)) {
      data[contextValueName] = contextValue;
    }

    setMyShowProcessing(true);

    AsyncServices.LandUserPlantMultiSelectToEditableSubmitRequest(
      data,
      contextValue
    ) 
    .then(() => {
      onRefreshRequest();
    });
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

    const plantCodeListCsv = selectedCodes.filter(code => code).join(",");

    const data: AsyncServices.LandUserPlantMultiSelectToNotEditableRequest = AsyncServices.buildLandUserPlantMultiSelectToNotEditableRequest();

    data.plantCodeListCsv = plantCodeListCsv;
    
    if (Object.hasOwn(data, contextValueName)) {
      data[contextValueName] = contextValue;
    }

    setMyShowProcessing(true);

    AsyncServices.LandUserPlantMultiSelectToNotEditableSubmitRequest(
      data,
      contextValue
    )
    .then(() => {
      onRefreshRequest();
    });
  }; 
  
  const tableRowAlternateCases = (showProcessing || myShowProcessing) ? (
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
              isPreferenceVisible={columns["isEditAllowed"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someIntVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalIntVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someBigIntVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalBigIntVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someBitVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalBitVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["isDeleteAllowed"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someFloatVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalFloatVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someDecimalVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalDecimalVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someUTCDateTimeVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalUTCDateTimeVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someDateVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalDateVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someMoneyVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalMoneyVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someNVarCharVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalNVarCharVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someVarCharVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalVarCharVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someTextVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalTextVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["somePhoneNumber"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalPhoneNumber"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someEmailAddress"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalEmailAddress"].isPreferenceVisible}
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
              isPreferenceVisible={columns["isImageUrlAvailable"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someImageUrlVal"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someConditionalImageUrl"].isPreferenceVisible}
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
              isPreferenceVisible={columns["flavorName"].isPreferenceVisible}
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
              isPreferenceVisible={columns["flavorCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["someIntConditionalOnDeletable"].isPreferenceVisible}
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
              isPreferenceVisible={columns["nVarCharAsUrl"].isPreferenceVisible}
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
              isPreferenceVisible={columns["nVarCharConditionalAsUrl"].isPreferenceVisible}
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
              isPreferenceVisible={columns["updateLinkPlantCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["deleteAsyncButtonLinkPlantCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["detailsLinkPlantCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["testFileDownloadLinkPacCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["testConditionalFileDownloadLinkPacCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["testAsyncFlowReqLinkPacCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["testConditionalAsyncFlowReqLinkPacCode"].isPreferenceVisible}
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
              isPreferenceVisible={columns["conditionalBtnExampleLinkPlantCode"].isPreferenceVisible}
            />
{/* endset */}
          </tr>
        </thead>
        <tbody> 
          {items && !showProcessing && !myShowProcessing && items.length ? (
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
                    isPreferenceVisible={columns["isEditAllowed"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntVal"
                    rowIndex={index}
                    value={item.someIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someIntVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalIntVal"
                    rowIndex={index}
                    value={item.someConditionalIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalIntVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someBigIntVal"
                    rowIndex={index}
                    value={item.someBigIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someBigIntVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalBigIntVal"
                    rowIndex={index}
                    value={item.someConditionalBigIntVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalBigIntVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someBitVal"
                    rowIndex={index}
                    isChecked={item.someBitVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someBitVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="someConditionalBitVal"
                    rowIndex={index}
                    isChecked={item.someConditionalBitVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalBitVal"].isPreferenceVisible}
                  />

 
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isDeleteAllowed"
                    rowIndex={index}
                    isChecked={item.isDeleteAllowed}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["isDeleteAllowed"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someFloatVal"
                    rowIndex={index}
                    value={item.someFloatVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someFloatVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalFloatVal"
                    rowIndex={index}
                    value={item.someConditionalFloatVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalFloatVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someDecimalVal"
                    rowIndex={index}
                    value={item.someDecimalVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someDecimalVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someConditionalDecimalVal"
                    rowIndex={index}
                    value={item.someConditionalDecimalVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalDecimalVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someUTCDateTimeVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someUTCDateTimeVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDateTime forColumn="someConditionalUTCDateTimeVal"
                    rowIndex={index}
                    value={item.someConditionalUTCDateTimeVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalUTCDateTimeVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someDateVal"
                    rowIndex={index}
                    value={item.someDateVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someDateVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayDate forColumn="someConditionalDateVal"
                    rowIndex={index}
                    value={item.someConditionalDateVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalDateVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someMoneyVal"
                    rowIndex={index}
                    value={item.someMoneyVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someMoneyVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayMoney forColumn="someConditionalMoneyVal"
                    rowIndex={index}
                    value={item.someConditionalMoneyVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalMoneyVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someNVarCharVal"
                    rowIndex={index}
                    value={item.someNVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someNVarCharVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalNVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalNVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalNVarCharVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someVarCharVal"
                    rowIndex={index}
                    value={item.someVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someVarCharVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalVarCharVal"
                    rowIndex={index}
                    value={item.someConditionalVarCharVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalVarCharVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someTextVal"
                    rowIndex={index}
                    value={item.someTextVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someTextVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="someConditionalTextVal"
                    rowIndex={index}
                    value={item.someConditionalTextVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalTextVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="somePhoneNumber"
                    rowIndex={index}
                    value={item.somePhoneNumber}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["somePhoneNumber"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayPhoneNumber forColumn="someConditionalPhoneNumber"
                    rowIndex={index}
                    value={item.someConditionalPhoneNumber}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalPhoneNumber"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someEmailAddress"
                    rowIndex={index}
                    value={item.someEmailAddress}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someEmailAddress"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayEmail forColumn="someConditionalEmailAddress"
                    rowIndex={index}
                    value={item.someConditionalEmailAddress}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["someConditionalEmailAddress"].isPreferenceVisible}
                  />

 
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="isImageUrlAvailable"
                    rowIndex={index}
                    isChecked={item.isImageUrlAvailable}
                    isVisible={false}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["isImageUrlAvailable"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someImageUrlVal"
                    rowIndex={index}
                    value={item.someImageUrlVal}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["someImageUrlVal"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayImageUrl forColumn="someConditionalImageUrl"
                    rowIndex={index}
                    value={item.someConditionalImageUrl}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isImageUrlAvailable} 
                    isPreferenceVisible={columns["someConditionalImageUrl"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorName"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                    rowIndex={index}
                    value={item.flavorCode}
                    isVisible={false}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorCode"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="someIntConditionalOnDeletable"
                    rowIndex={index}
                    value={item.someIntConditionalOnDeletable}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isDeleteAllowed} 
                    isPreferenceVisible={columns["someIntConditionalOnDeletable"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharAsUrl"
                    rowIndex={index}
                    value={item.nVarCharAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["nVarCharAsUrl"].isPreferenceVisible}
                  />

                  <ReportColumnDisplay.ReportColumnDisplayUrl forColumn="nVarCharConditionalAsUrl"
                    rowIndex={index}
                    value={item.nVarCharConditionalAsUrl}
                    linkText="Click Here"
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    conditionallyVisible={item.isEditAllowed} 
                    isPreferenceVisible={columns["nVarCharConditionalAsUrl"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["updateLinkPlantCode"].isPreferenceVisible}
                  />
 
                  <ReportColumnDisplay.ReportColumnDisplayButton forColumn="deleteAsyncButtonLinkPlantCode"
                    rowIndex={index}
                    buttonText="Delete"
                    isButtonCallToAction={false}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["deleteAsyncButtonLinkPlantCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["detailsLinkPlantCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["testFileDownloadLinkPacCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["testConditionalFileDownloadLinkPacCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["testAsyncFlowReqLinkPacCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["testConditionalAsyncFlowReqLinkPacCode"].isPreferenceVisible}
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
                    isPreferenceVisible={columns["conditionalBtnExampleLinkPlantCode"].isPreferenceVisible}
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
