/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserDateGreaterThanFilterListReportService from "../../services/PacUserDateGreaterThanFilterList";
import { QueryResultItem } from "../../services/PacUserDateGreaterThanFilterList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination,TableSettings } from "../../input-fields";
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
  const [validationError, setValidationError] = useState<string | null>(null);
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridPacUserDateGreaterThanFilterList";
  const contextValueName = "pacCode";
  const contextValue = contextCode;

  const defaultColumnSettings = {
    dateGreaterThanFilterCode: {
      header: 'Date Greater Than Filter Code',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterDayCount: {
      header: 'Day Count',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterDescription: {
      header: 'Description',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterDisplayOrder: {
      header: 'Display Order',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterIsActive: {
      header: 'Is Active',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterLookupEnumName: {
      header: 'Lookup Enum Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
    dateGreaterThanFilterName: {
      header: 'Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
//endset
  };

  const [columns, setColumns] = useState(defaultColumnSettings);

  useEffect(() => {
    console.log("useEffect: []")
    const storedData = localStorage.getItem('pacUserDateGreaterThanFilterListHiddenColumns');
    console.log("get storedData:",storedData)
    if(storedData){
      const storedHiddenColumns = JSON.parse(storedData) || [];
      setColumns(prevColumns => {
        const updatedColumns = { ...prevColumns };
        storedHiddenColumns.forEach(colKey => {
          if (updatedColumns[colKey]) {
            updatedColumns[colKey].isPreferenceVisible = false;
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
      colKey => !columns[colKey].isPreferenceVisible
    );
    console.log("set storedData:",hiddenColumns)
    localStorage.setItem('pacUserDateGreaterThanFilterListHiddenColumns', JSON.stringify(hiddenColumns));
  }, [columns]);

  const handleColumnVisibility = (colName: string) => {
    console.log("handleColumnVisibility:",colName)
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
        items.map((item: PacUserDateGreaterThanFilterListReportService.QueryResultItem, index) =>
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
      <div className="d-flex w-100 justify-content-between mb3">
        <div>

        </div>

        <div>
          <TableSettings
            name="TableSettingsPacUserDateGreaterThanFilterList"
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
            <ReportColumnHeader forColumn="dateGreaterThanFilterCode"
              isSortDescending={isSortDescending}
              label="dateGreaterThanFilter Code"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterCode"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterDayCount"
              isSortDescending={isSortDescending}
              label="Day Count"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterDayCount"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="200px"
              isPreferenceVisible={columns["dateGreaterThanFilterDescription"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterDisplayOrder"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterIsActive"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterLookupEnumName"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="dateGreaterThanFilterName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["dateGreaterThanFilterName"].isPreferenceVisible}
            />
{/* endset */}
          </tr>
        </thead>
        <tbody>
          {items && !showProcessing && items.length ? (
            items.map((item: PacUserDateGreaterThanFilterListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
{/* endset */}
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterCode"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterCode}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterCode"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDayCount"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDayCount}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterDayCount"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterDescription"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDescription}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterDescription"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="dateGreaterThanFilterDisplayOrder"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterDisplayOrder}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterDisplayOrder"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="dateGreaterThanFilterIsActive"
                    rowIndex={index}
                    isChecked={item.dateGreaterThanFilterIsActive}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterIsActive"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterLookupEnumName"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterLookupEnumName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterLookupEnumName"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="dateGreaterThanFilterName"
                    rowIndex={index}
                    value={item.dateGreaterThanFilterName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["dateGreaterThanFilterName"].isPreferenceVisible}
                  />
{/* endset */}

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
          variant="outline-secondary">
          Export
        </Button>
      </div>
    </div>
  );
};

