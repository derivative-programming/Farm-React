/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import { Button, Card, Breadcrumb } from "react-bootstrap";
import "../../../App.scss";

import { useNavigate, useParams } from "react-router-dom";
import ReportFilterPacUserRoleList from "../filters/PacUserRoleList";
import { ReportGridPacUserRoleList } from "../visualization/grid/PacUserRoleList"; // NOSONAR
import { ReportDetailThreeColPacUserRoleList } from "../visualization/detail-three-column/PacUserRoleList"; // NOSONAR
import { ReportDetailTwoColPacUserRoleList } from "../visualization/detail-two-column/PacUserRoleList"; // NOSONAR
import * as ReportService from "../services/PacUserRoleList";
import * as InitReportService from "../services/init/PacUserRoleListInitReport";
import HeaderPacUserRoleList from "../headers/PacUserRoleListInitReport";
import * as ReportInput from "../input-fields"; // NOSONAR
import { PlusCircle, ArrowLeft } from "react-bootstrap-icons"; // NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB";
import { v4 as uuidv4 } from "uuid";

export const ReportConnectedPacUserRoleList: FC = (): ReactElement => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [initPageResponse, setInitPageResponse] = useState(
    new InitReportService.InitResultInstance()
  );
  const [queryResult, setQueryResult] = useState(
    new ReportService.QueryResultInstance()
  );
  const [query, setQuery] = useState(new ReportService.QueryRequestInstance());
  const [exportQuery, setExportQuery] = useState(new ReportService.QueryRequestInstance());
  const [initialValues, setInitialValues] = useState(
    new ReportService.QueryRequestInstance()
  );
  const isInitializedRef = useRef(false);
  const { logClick } = useAnalyticsDB();

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

  const handleQueryResults = (responseFull: ReportService.ResponseFull) => {
    const queryResult: ReportService.QueryResult = responseFull.data;

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
    setQuery({ ...query });
  };

  useEffect(() => {
    if (isInitializedRef.current) {
      return;
    }
    isInitializedRef.current = true;
    ReportService.initPage(contextCode).then((response) =>
      handleInit(response)
    );
  }, []);

  useEffect(() => {
    const newInitalValues = ReportService.buildQueryRequest(initPageResponse);
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
    ReportService.submitRequest(query, contextCode).then((response) =>
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

  const isRefreshButtonHidden = false;
  const isPagingAvailable = true;
  const isExportButtonsHidden = false;
  const isFilterSectionHidden = false;
  const isFilterSectionCollapsable = true;
  const isBreadcrumbSectionHidden = false;

  const onSubmit = (queryRequest: ReportService.QueryRequest) => {
    logClick("ReportConnectedPacUserRoleList","search","");
    setQuery({ ...queryRequest });
  };

  const onPageSelection = (pageNumber: number) => {
    logClick("ReportConnectedPacUserRoleList","selectPage",pageNumber.toString());
    setQuery({ ...query, pageNumber: pageNumber });
  };

  const onPageSizeChange = (pageSize: number) => {
    logClick("ReportConnectedPacUserRoleList","pageSizeChange",pageSize.toString());
    localStorage.setItem("pageSize",pageSize.toString());
    setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
  };

  const onSort = (columnName: string) => {
    logClick("ReportConnectedPacUserRoleList","sort",columnName);
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
    if(isProcessing){
      return;
    }
    setExportQuery({ ...query });
  };

  const handleExportQueryResults = (responseFull: ReportService.ResponseFull) => { // NOSONAR
    const queryResult: ReportService.QueryResult = responseFull.data;

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
    ReportService.submitCSVRequest(query, contextCode).then((response) => {
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

        <HeaderPacUserRoleList
          name="headerPacUserRoleList"
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

        <ReportFilterPacUserRoleList
          name="reportConnectedPacUserRoleList-filter"
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

      </Card>

    </div>
  );
};
export default ReportConnectedPacUserRoleList;

