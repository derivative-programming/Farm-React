/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserLandListReportService from "../../services/PacUserLandList";
import { QueryResultItem } from "../../services/PacUserLandList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination,TableSettings } from "../../input-fields";
import * as ReportInput from "../../input-fields";  // NOSONAR
import useAnalyticsDB from "../../../../hooks/useAnalyticsDB";

export interface ReportGridPacUserLandListProps {
  name: string;
  contextCode: string;
  sortedColumnName: string;
  isSortDescending: boolean;
  items: PacUserLandListReportService.QueryResultItem[];
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
export const ReportGridPacUserLandList: FC<ReportGridPacUserLandListProps> = ({
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
  const componentName = "ReportGridPacUserLandList";
  const contextValueName = "pacCode";
  const contextValue = contextCode;

  const defaultColumnSettings = {
    landCode: {
      header: 'Land Code',
      isVisible: true,
      isPreferenceVisible: true,
    },
    landDescription: {
      header: 'Description',
      isVisible: true,
      isPreferenceVisible: true,
    },
    landDisplayOrder: {
      header: 'Display Order',
      isVisible: true,
      isPreferenceVisible: true,
    },
    landIsActive: {
      header: 'Is Active',
      isVisible: true,
      isPreferenceVisible: true,
    },
    landLookupEnumName: {
      header: 'Lookup Enum Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
    landName: {
      header: 'Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
    pacName: {
      header: 'Pac Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
//endset
  };

  const [columns, setColumns] = useState(defaultColumnSettings);

  useEffect(() => {
    console.log("useEffect: []")
    const storedData = localStorage.getItem('pacUserLandListHiddenColumns');
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
    localStorage.setItem('pacUserLandListHiddenColumns', JSON.stringify(hiddenColumns));
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
        items.map((item: PacUserLandListReportService.QueryResultItem, index) =>
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
            name="TableSettingsPacUserLandList"
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
            <ReportColumnHeader forColumn="landCode"
              isSortDescending={isSortDescending}
              label="land Code"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["landCode"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="landDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="200px"
              isPreferenceVisible={columns["landDescription"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="landDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["landDisplayOrder"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="landIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["landIsActive"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="landLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["landLookupEnumName"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="landName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["landName"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="pacName"
              isSortDescending={isSortDescending}
              label="Pac Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["pacName"].isPreferenceVisible}
            />
{/* endset */}
          </tr>
        </thead>
        <tbody>
          {items && !showProcessing && items.length ? (
            items.map((item: PacUserLandListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
{/* endset */}
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="landCode"
                    rowIndex={index}
                    value={item.landCode}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landCode"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="landDescription"
                    rowIndex={index}
                    value={item.landDescription}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landDescription"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="landDisplayOrder"
                    rowIndex={index}
                    value={item.landDisplayOrder}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landDisplayOrder"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="landIsActive"
                    rowIndex={index}
                    isChecked={item.landIsActive}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landIsActive"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="landLookupEnumName"
                    rowIndex={index}
                    value={item.landLookupEnumName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landLookupEnumName"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="landName"
                    rowIndex={index}
                    value={item.landName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["landName"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="pacName"
                    rowIndex={index}
                    value={item.pacName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["pacName"].isPreferenceVisible}
                  />
{/* endset */}

                </tr>
              );
            })
          ) : (tableRowAlternateCases)}
        </tbody>
      </Table>

      <ReportPagination
        name="reportGridPacUserLandList-paginator"
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

