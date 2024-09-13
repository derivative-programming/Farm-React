/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import { Button, Card, Breadcrumb, Row, Col, Spinner } from "react-bootstrap"; // NOSONAR
import "../../../App.scss";

import { useNavigate, useParams } from "react-router-dom";
import * as PacUserRoleListReportService from "../services/PacUserRoleList";
import * as InitReportService from "../services/init/PacUserRoleListInitReport";
import HeaderPacUserRoleList from "../headers/PacUserRoleListInitReport";
import * as ReportInput from "../input-fields"; // NOSONAR
import { PlusCircle, ArrowLeft } from "react-bootstrap-icons"; // NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";

import ReportFilterPacUserRoleList from "../filters/PacUserRoleList";
import { ReportGridPacUserRoleList } from "../visualization/grid/PacUserRoleList";
import { v4 as uuidv4 } from "uuid";

export const ReportConnectedPacUserRoleList: FC = (): ReactElement => {
  const isFilterPersistant  = false;

  const [isProcessing, setIsProcessing] = useState(false);
  const [initPageResponse, setInitPageResponse] = useState<InitReportService.InitResult | null>(null);

  const [queryResult, setQueryResult] = useState<PacUserRoleListReportService.QueryResult | null>(null);

  const [query, setQuery] = useState<PacUserRoleListReportService.QueryRequest | null>(null);

  const [initialQuery, setInitialQuery] = useState<PacUserRoleListReportService.QueryRequest | null>(null);

  const [displayItem, setDisplayItem] = useState<PacUserRoleListReportService.QueryResultItem | null>(null);

  const isInitializedRef = useRef(false);
  const { logClick } = useAnalyticsDB();

    const [exportQuery, setExportQuery] = useState(new PacUserRoleListReportService.QueryRequestInstance());

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

  const handleQueryResults = (responseFull: PacUserRoleListReportService.ResponseFull) => {
    const queryResult: PacUserRoleListReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
    setQueryResult({ ...queryResult });
  };

  const onNavigateTo = (url: string) => {
    navigate(url);
  };

  const onRefreshRequest = () => {
    logClick("ReportConnectedPacUserRoleList","refresh","");

    const cleanrQueryRequest = new PacUserRoleListReportService.QueryRequestInstance();
    cleanrQueryRequest.ItemCountPerPage = query?.ItemCountPerPage ?? 10;
    cleanrQueryRequest.OrderByColumnName = query?.OrderByColumnName ?? "";
    cleanrQueryRequest.OrderByDescending = query?.OrderByDescending ?? false;
    setQuery(cleanrQueryRequest);
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    PacUserRoleListReportService.initPage(contextCode).then((response) =>
      handleInit(response)
    );
  }, []);

  useEffect(() => {
    if(initPageResponse === null){
      return;
    }
    let queryRequest = PacUserRoleListReportService.buildQueryRequest(initPageResponse);

    // Check if persistence is enabled and if there is a saved filter
    if (isFilterPersistant) {
      const savedFilter = localStorage.getItem("PacUserRoleListFilter");

      if (savedFilter) {
        const parsedFilter = JSON.parse(savedFilter);

        queryRequest = { ...queryRequest, ...parsedFilter };
      }
    }

    setInitialQuery({ ...queryRequest });
  }, [initPageResponse]);

  useEffect(() => {
    if(initialQuery === null){
      return;
    }
    if (JSON.stringify(initialQuery) !== JSON.stringify(query)) {
      const pageSize = localStorage.getItem("pageSize");
      if(pageSize !== null)
      {
        initialQuery.ItemCountPerPage = parseInt(pageSize);
      }
      setQuery({ ...initialQuery });
    }
  }, [initialQuery]);

  useEffect(() => {
    if(query === null){
      return;
    }
    setIsProcessing(true);
    PacUserRoleListReportService.submitRequest(query, contextCode).then((response) =>
      handleQueryResults(response)
    )
    .finally(() => {setIsProcessing(false);});
  }, [query]);

  useEffect(() => {
    if(queryResult === null){
      return;
    }
    if(queryResult.items === null){
      return;
    }

    const item = queryResult.items.length > 0 ?  queryResult.items[0] : new PacUserRoleListReportService.QueryResultItemInstance();

    setDisplayItem({...item})
  }, [queryResult]);

  const navigateTo = (page: string, codeName: string) => {  // NOSONAR
    let targetContextCode = contextCode;
    if(initPageResponse === null){
      return;
    }
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

  const onSubmit = (queryRequest: PacUserRoleListReportService.QueryRequest) => {
    logClick("ReportConnectedPacUserRoleList","search","");

    if(isFilterPersistant ){
      localStorage.setItem("PacUserRoleListFilter",JSON.stringify(queryRequest));
    }

    queryRequest.ItemCountPerPage = query?.ItemCountPerPage ?? 10;
    queryRequest.OrderByColumnName = query?.OrderByColumnName ?? "";
    queryRequest.OrderByDescending = query?.OrderByDescending ?? false;
    setQuery({ ...queryRequest });
  };
  const onFilterReset = () => {
    logClick("ReportConnectedPacUserRoleList","reset filter","");
    const clearQuery = new PacUserRoleListReportService.QueryRequestInstance();
    if(isFilterPersistant ){
      localStorage.setItem("PacUserRoleListFilter",JSON.stringify(clearQuery));
    }
    setInitialQuery({...clearQuery});
  };

  const onPageSelection = (pageNumber: number) => {
    logClick("ReportConnectedPacUserRoleList","selectPage",pageNumber.toString());
    if(query === null){
      return;
    }
    setQuery({ ...query, pageNumber: pageNumber });
  };

  const onPageSizeChange = (pageSize: number) => {
    logClick("ReportConnectedPacUserRoleList","pageSizeChange",pageSize.toString());
    if(query === null){
      return;
    }
    localStorage.setItem("pageSize",pageSize.toString());
    setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
  };

  const onSort = (columnName: string) => {
    logClick("ReportConnectedPacUserRoleList","sort",columnName);
    if(query === null){
      return;
    }
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
    logClick("ReportConnectedPacUserRoleList","export","");
    if(query === null){
      return;
    }
    if(isProcessing){
      return;
    }
    setExportQuery({ ...query });
  };

  const handleExportQueryResults = (responseFull: PacUserRoleListReportService.ResponseFull) => { // NOSONAR
    const queryResult: PacUserRoleListReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
  };

  useEffect(() => {
    if (!isInitializedRef.current) {
      return;
    }
    if(query === null){
      return;
    }
    if(queryResult === null){
      return;
    }
    if(!queryResult.success){
      return;
    }
    setIsProcessing(true);
    PacUserRoleListReportService.submitCSVRequest(query, contextCode).then((response) => {
      //handleExportQueryResults(response);  //NOSONAR
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'PacUserRoleList-' + uuidv4() + '.csv');
      document.body.appendChild(link);
      link.click();
    })
    .finally(() => {setIsProcessing(false);});
  }, [exportQuery]);

  return (
    <div
      className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3 "
      data-testid="reportConnectedPacUserRoleList"
    >
      <div className="w-100">
        <Breadcrumb hidden={isBreadcrumbSectionHidden}>

          <Breadcrumb.Item active href="">
            Pac User Role List Report
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Card
        className="mt-1 page-card report-card"

      >

        <h2 data-testid="page-title-text">Pac User Role List Report</h2>
        <h6 data-testid="page-intro-text"></h6>

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

        {initPageResponse && (
          <HeaderPacUserRoleList
            name="headerPacUserRoleList"
            initData={initPageResponse}
            isHeaderVisible={false}
          />
        )}

        {initialQuery && (
          <ReportFilterPacUserRoleList
            name="reportConnectedPacUserRoleList-filter"
            initialQuery={initialQuery}
            onSubmit={onSubmit}
            onReset={onFilterReset}
            isCollapsible={isFilterSectionCollapsable}
            hidden={isFilterSectionHidden}
          />
        )}

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

        {queryResult && (
          <ReportGridPacUserRoleList
            isSortDescending={queryResult.orderByDescending}
            items={queryResult.items}
            name="reportConnectedPacUserRoleList-table"
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
        )}
        {!queryResult && (
          <ReportGridPacUserRoleList
            isSortDescending={false}
            items={new PacUserRoleListReportService.QueryResultInstance().items}
            name="reportConnectedPacUserRoleList-table"
            contextCode={contextCode}
            onSort={onSort}
            onExport={onExport}
            onNavigateTo={onNavigateTo}
            onRefreshRequest={onRefreshRequest}
            sortedColumnName={""}
            currentPage={1}
            onPageSelection={onPageSelection}
            onPageSizeChange={onPageSizeChange}
            pageSize={10}
            totalItemCount={0}
            showPagingControls={isPagingAvailable}
            showExport={!isExportButtonsHidden}
            showProcessing={true}
          />
        )}

      </Card>

    </div>
  );
};
export default ReportConnectedPacUserRoleList;

