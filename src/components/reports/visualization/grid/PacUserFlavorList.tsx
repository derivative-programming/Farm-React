/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, ReactElement, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, Table, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../../App.scss";
import * as PacUserFlavorListReportService from "../../services/PacUserFlavorList";
import { QueryResultItem } from "../../services/PacUserFlavorList"; // NOSONAR
import { ReportColumnHeader } from "../../input-fields/ColumnHeader";  // NOSONAR
import * as ReportColumnDisplay from "./columns";  // NOSONAR
import * as AsyncServices from "../../../services"; // NOSONAR
import { ReportPagination,TableSettings } from "../../input-fields";
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
  const [validationError, setValidationError] = useState<string | null>(null);
  const { logClick } = useAnalyticsDB();  // NOSONAR
  const componentName = "ReportGridPacUserFlavorList";
  const contextValueName = "pacCode";
  const contextValue = contextCode;

  const defaultColumnSettings = {
    flavorCode: {
      header: 'Flavor Code',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorDescription: {
      header: 'Description',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorDisplayOrder: {
      header: 'Display Order',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorIsActive: {
      header: 'Is Active',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorLookupEnumName: {
      header: 'Lookup Enum Name',
      isVisible: true,
      isPreferenceVisible: true,
    },
    flavorName: {
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

  const [myShowProcessing, setMyShowProcessing] = useState(false);
  const [columns, setColumns] = useState(defaultColumnSettings);

  useEffect(() => {
    // Reset checkedIndexes or apply any logic based on new items
    setCheckedIndexes([]); // Example: Clear all checked indexes on new items
    setMyShowProcessing(false);
  }, [items]);

  useEffect(() => {
    const storedData = localStorage.getItem('pacUserFlavorListHiddenColumns');
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
    localStorage.setItem('pacUserFlavorListHiddenColumns', JSON.stringify(hiddenColumns));
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
        items.map((item: PacUserFlavorListReportService.QueryResultItem, index) =>
          index.toString()
        )
      );
      setValidationError(null);
    } else {
      logClick(componentName,"uncheckSelectAllRows","");
      setCheckedIndexes(initialCheckedIndexes);
    }
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
            name="TableSettingsPacUserFlavorList"
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
            <ReportColumnHeader forColumn="flavorCode"
              isSortDescending={isSortDescending}
              label="flavor Code"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["flavorCode"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="flavorDescription"
              isSortDescending={isSortDescending}
              label="Description"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth="200px"
              isPreferenceVisible={columns["flavorDescription"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="flavorDisplayOrder"
              isSortDescending={isSortDescending}
              label="Display Order"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["flavorDisplayOrder"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="flavorIsActive"
              isSortDescending={isSortDescending}
              label="Is Active"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["flavorIsActive"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="flavorLookupEnumName"
              isSortDescending={isSortDescending}
              label="Lookup Enum Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["flavorLookupEnumName"].isPreferenceVisible}
            />
            <ReportColumnHeader forColumn="flavorName"
              isSortDescending={isSortDescending}
              label="Name"
              onSort={onSort}
              isVisible={true}
              isJoinedToLeftColumn={false}
              isJoinedToRightColumn={false}
              sortedColumnName={sortedColumnName}
              minWidth=""
              isPreferenceVisible={columns["flavorName"].isPreferenceVisible}
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
          {items && !showProcessing && !myShowProcessing && items.length ? (
            items.map((item: PacUserFlavorListReportService.QueryResultItem, index) => {
              const uniqueKey = uuidv4();
              return (
                <tr key={uniqueKey}>
{/* endset */}
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorCode"
                    rowIndex={index}
                    value={item.flavorCode}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorCode"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorDescription"
                    rowIndex={index}
                    value={item.flavorDescription}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorDescription"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayNumber forColumn="flavorDisplayOrder"
                    rowIndex={index}
                    value={item.flavorDisplayOrder}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorDisplayOrder"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayCheckbox forColumn="flavorIsActive"
                    rowIndex={index}
                    isChecked={item.flavorIsActive}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorIsActive"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorLookupEnumName"
                    rowIndex={index}
                    value={item.flavorLookupEnumName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorLookupEnumName"].isPreferenceVisible}
                  />
                  <ReportColumnDisplay.ReportColumnDisplayText forColumn="flavorName"
                    rowIndex={index}
                    value={item.flavorName}
                    isVisible={true}
                    isJoinedToLeftColumn={false}
                    isJoinedToRightColumn={false}
                    isPreferenceVisible={columns["flavorName"].isPreferenceVisible}
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

