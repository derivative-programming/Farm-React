/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import { Button, Card, Breadcrumb } from "react-bootstrap"; // NOSONAR
import "../../../App.scss";

import { useNavigate, useParams } from "react-router-dom";
import * as PacUserTriStateFilterListReportService from "../services/PacUserTriStateFilterList";
import * as InitReportService from "../services/init/PacUserTriStateFilterListInitReport";
import HeaderPacUserTriStateFilterList from "../headers/PacUserTriStateFilterListInitReport";
import * as ReportInput from "../input-fields"; // NOSONAR
import { PlusCircle, ArrowLeft } from "react-bootstrap-icons"; // NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";

import ReportFilterPacUserTriStateFilterList from "../filters/PacUserTriStateFilterList";
import { ReportGridPacUserTriStateFilterList } from "../visualization/grid/PacUserTriStateFilterList";
import { v4 as uuidv4 } from "uuid";

export const ReportConnectedPacUserTriStateFilterList: FC = (): ReactElement => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [initPageResponse, setInitPageResponse] = useState(
    new InitReportService.InitResultInstance()
  );
  const [queryResult, setQueryResult] = useState(
    new PacUserTriStateFilterListReportService.QueryResultInstance()
  );
  const [query, setQuery] = useState(new PacUserTriStateFilterListReportService.QueryRequestInstance());
  const [initialValues, setInitialValues] = useState(
    new PacUserTriStateFilterListReportService.QueryRequestInstance()
  );
  const isInitializedRef = useRef(false);
  const { logClick } = useAnalyticsDB();

    const [exportQuery, setExportQuery] = useState(new PacUserTriStateFilterListReportService.QueryRequestInstance());

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

  const handleInit = (responseFull: InitReportService.ResponseFull) => {
    const response: InitReportService.InitResult = responseFull.data;

    if (!response.success) {
      return;
    }
    setInitPageResponse({ ...response });
  };

  const handleQueryResults = (responseFull: PacUserTriStateFilterListReportService.ResponseFull) => {
    const queryResult: PacUserTriStateFilterListReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
    setQueryResult({ ...queryResult });
  };

  const onNavigateTo = (url: string) => {
    navigate(url);
  };

  const onRefreshRequest = () => {
    logClick("ReportConnectedPacUserTriStateFilterList","refresh","");
    setQuery({ ...query });
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    PacUserTriStateFilterListReportService.initPage(contextCode).then((response) =>
      handleInit(response)
    );
  }, []);

  useEffect(() => {
    const newInitalValues = PacUserTriStateFilterListReportService.buildQueryRequest(initPageResponse);
    setInitialValues({ ...newInitalValues });
  }, [initPageResponse]);

  useEffect(() => {
    if (JSON.stringify(initialValues) !== JSON.stringify(query)) {
      const pageSize = localStorage.getItem("pageSize");
      if(pageSize !== null)
      {
        initialValues.ItemCountPerPage = parseInt(pageSize);
      }
      setQuery({ ...initialValues });
    }
  }, [initialValues]);

  useEffect(() => {
    setIsProcessing(true);
    PacUserTriStateFilterListReportService.submitRequest(query, contextCode).then((response) =>
      handleQueryResults(response)
    )
    .finally(() => {setIsProcessing(false);});
  }, [query]);

  const navigateTo = (page: string, codeName: string) => {  // NOSONAR
    let targetContextCode = contextCode;
    Object.entries(initPageResponse).forEach(([key, value]) => {
      if (key === codeName) {
        if (value !== "" && value !== "00000000-0000-0000-0000-000000000000") {
          targetContextCode = value;
        } else {
          return;
        }
      }
    });
    const url = "/" + page + "/" + targetContextCode;
    navigate(url);
  };

  const isBreadcrumbSectionHidden = false;

  const isRefreshButtonHidden = false;
  const isPagingAvailable = true;
  const isExportButtonsHidden = false;
  const isFilterSectionHidden = false;
  const isFilterSectionCollapsable = true;

  const onSubmit = (queryRequest: PacUserTriStateFilterListReportService.QueryRequest) => {
    logClick("ReportConnectedPacUserTriStateFilterList","search","");
    setQuery({ ...queryRequest });
  };

  const onPageSelection = (pageNumber: number) => {
    logClick("ReportConnectedPacUserTriStateFilterList","selectPage",pageNumber.toString());
    setQuery({ ...query, pageNumber: pageNumber });
  };

  const onPageSizeChange = (pageSize: number) => {
    logClick("ReportConnectedPacUserTriStateFilterList","pageSizeChange",pageSize.toString());
    localStorage.setItem("pageSize",pageSize.toString());
    setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
  };

  const onSort = (columnName: string) => {
    logClick("ReportConnectedPacUserTriStateFilterList","sort",columnName);
    let orderByDescending = false;
    if (query.OrderByColumnName === columnName) {
      orderByDescending = !query.OrderByDescending;
    }
    setQuery({
      ...query,
      OrderByColumnName: columnName,
      OrderByDescending: orderByDescending,
    });
  };

  const onExport = () => {
    logClick("ReportConnectedPacUserTriStateFilterList","export","");
    if(isProcessing){
      return;
    }
    setExportQuery({ ...query });
  };

  const handleExportQueryResults = (responseFull: PacUserTriStateFilterListReportService.ResponseFull) => { // NOSONAR
    const queryResult: PacUserTriStateFilterListReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
  };

  useEffect(() => {
    if (!isInitializedRef.current) {
      return;
    }
    if(!queryResult.success){
      return;
    }
    setIsProcessing(true);
    PacUserTriStateFilterListReportService.submitCSVRequest(query, contextCode).then((response) => {
      //handleExportQueryResults(response);  //NOSONAR
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'PacUserTriStateFilterList-' + uuidv4() + '.csv');
      document.body.appendChild(link);
      link.click();
    })
    .finally(() => {setIsProcessing(false);});
  }, [exportQuery]);

  return (
    <div
      className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3 "
      data-testid="reportConnectedPacUserTriStateFilterList"
    >
      <div className="w-100">
        <Breadcrumb hidden={isBreadcrumbSectionHidden}>

          <Breadcrumb.Item active href="">
            Pac User Tri State Filter List Report
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card
        className="mt-1 page-card report-card"

      >

        <h2 data-testid="page-title-text">Pac User Tri State Filter List Report</h2>
        <h6 data-testid="page-intro-text"></h6>

        <HeaderPacUserTriStateFilterList
          name="headerPacUserTriStateFilterList"
          initData={initPageResponse}
          isHeaderVisible={false}
        />

        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="mb-2 mb-md-0">

          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="mb-2 mb-md-0">

            </div>
            <div>

            </div>
          </div>
        </div>

        <ReportFilterPacUserTriStateFilterList
          name="reportConnectedPacUserTriStateFilterList-filter"
          initialQuery={initialValues}
          onSubmit={onSubmit}
          isCollapsible={isFilterSectionCollapsable}
          hidden={isFilterSectionHidden}
        />

        <div
          className="d-flex w-100  justify-content-end"
          hidden={
            !isFilterSectionHidden ||
            (isFilterSectionHidden && isRefreshButtonHidden)
          }
        >
          <Button
            data-testid="refresh-button"
            className="ms-2 mt-3"
            onClick={onRefreshRequest}
            hidden={
              !isFilterSectionHidden ||
              (isFilterSectionHidden && isRefreshButtonHidden)
            }
          >
            Refresh
          </Button>
        </div>

        <ReportGridPacUserTriStateFilterList
          isSortDescending={queryResult.orderByDescending}
          items={queryResult.items}
          name="reportConnectedPacUserTriStateFilterList-table"
          contextCode={contextCode}
          onSort={onSort}
          onExport={onExport}
          onNavigateTo={onNavigateTo}
          onRefreshRequest={onRefreshRequest}
          sortedColumnName={queryResult.orderByColumnName}
          currentPage={queryResult.pageNumber}
          onPageSelection={onPageSelection}
          onPageSizeChange={onPageSizeChange}
          pageSize={queryResult.itemCountPerPage}
          totalItemCount={queryResult.recordsTotal}
          showPagingControls={isPagingAvailable}
          showExport={!isExportButtonsHidden}
          showProcessing={isProcessing}
        />

      </Card>

    </div>
  );
};
export default ReportConnectedPacUserTriStateFilterList;

