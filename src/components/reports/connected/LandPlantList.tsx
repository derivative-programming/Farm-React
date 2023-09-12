import React, {
  FC,
  ReactElement,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { Button, Form, Card, Breadcrumb, Container } from "react-bootstrap";
import "../../../App.scss";

import { useNavigate, useParams } from "react-router-dom";
import ReportFilterLandPlantList from "../filters/LandPlantList";
import { ReportGridLandPlantList } from "../visualization/grid/LandPlantList";
import { ReportDetailThreeColLandPlantList } from "../visualization/detail-three-column/LandPlantList";
import { ReportDetailTwoColLandPlantList } from "../visualization/detail-two-column/LandPlantList";
import * as ReportService from "../services/LandPlantList";
import * as InitReportService from "../services/init/LandPlantListInitReport";
import HeaderLandPlantList from "../headers/LandPlantListInitReport";
import * as ReportInput from "../input-fields";
import { PlusCircle, ArrowLeft } from "react-bootstrap-icons";
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 
import { v4 as uuidv4 } from "uuid";

export const ReportConnectedLandPlantList: FC = (): ReactElement => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
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

  const isRefreshButtonHidden = false;
  const isPagingAvailable = true;
  const isExportButtonsHidden = false;
  const isFilterSectionHidden = false;
  const isFilterSectionCollapsable = true;
  const isBreadcrumbSectionHidden = false;
  const isButtonDropDownAllowed = false;

  const navigate = useNavigate();
  const { id } = useParams();
  const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";
  
  const displayItem:ReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new ReportService.QueryResultItemInstance();

  // console.log('report ctrl initial values...');
  // console.log(initialValues);

  const handleInit = (responseFull: any) => {
    const response: InitReportService.InitResult = responseFull.data;

    if (!response.success) {
      return;
    }
    setInitPageResponse({ ...response });
  };

  const handleQueryResults = (responseFull: any) => {
    const queryResult: ReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
    setQueryResult({ ...queryResult });
  };
  
  const handleExportQueryResults = (responseFull: any) => {
    const queryResult: ReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    } 
  };

  const onSubmit = (queryRequest: ReportService.QueryRequest) => {
    logClick("ReportConnectedLandPlantList","search","");
    setQuery({ ...queryRequest });
  };

  const onPageSelection = (pageNumber: number) => {
    logClick("ReportConnectedLandPlantList","selectPage",pageNumber.toString());
    setQuery({ ...query, pageNumber: pageNumber });
  };

  const onPageSizeChange = (pageSize: number) => {
    logClick("ReportConnectedLandPlantList","pageSizeChange",pageSize.toString());  
    localStorage.setItem("pageSize",pageSize.toString());
    setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
  };

  const onNavigateTo = (url: string) => {
    navigate(url);
  };

  const navigateTo = (page: string, codeName: string) => { 
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

  const onRefreshRequest = () => {
    logClick("ReportConnectedLandPlantList","refresh","");
    setQuery({ ...query });
  };

  const onSort = (columnName: string) => { 
    logClick("ReportConnectedLandPlantList","sort",columnName);
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
    logClick("ReportConnectedLandPlantList","export","");
    if(isProcessing){
      return;
    } 
    setExportQuery({ ...query });
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
      let pageSize = localStorage.getItem("pageSize");
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
  
  useEffect(() => {   
    if (!isInitializedRef.current) {
      return;
    } 
    if(!queryResult.success){
      return;
    }
    setIsProcessing(true); 
    ReportService.submitCSVRequest(query, contextCode).then((response) => { 
      //handleExportQueryResults(response);
      const blob = new Blob([response.data], { type: "text/csv" });
      const url = URL.createObjectURL(blob);  
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'LandPlantList-' + uuidv4() + '.csv');
      document.body.appendChild(link);
      link.click();
    })
    .finally(() => {setIsProcessing(false);});
  }, [exportQuery]);

  return (
    <div
      className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3 "
      data-testid="reportConnectedLandPlantList"
    > 
      <div className="w-100">
        <Breadcrumb hidden={isBreadcrumbSectionHidden}>
          <Breadcrumb.Item id="tacFarmDashboardBreadcrumb" 
            data-testid="tacFarmDashboardBreadcrumb" 
            onClick={() => 
              {
                logClick("ReportConnectedLandPlantList","tacFarmDashboardBreadcrumb","");
                navigateTo("tac-farm-dashboard", "tacCode");
              }}
            >
            Farm Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active href="">
            Plant List
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

       
      <Card
        className="mt-1 page-card report-card"
         
      > 
      
        <h2 data-testid="page-title-text">Plant List</h2>
        <h6 data-testid="page-intro-text">A list of plants on the land</h6>
        

        <HeaderLandPlantList  
          name="headerLandPlantList"
          initData={initPageResponse}
          isHeaderVisible={true}
        />


          
        <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
          <div className="mb-2 mb-md-0">
            <ReportInput.ReportInputButton name="back-button"
              onClick={() => {
                  logClick("ReportConnectedLandPlantList","back","");
                  navigateTo("tac-farm-dashboard", "tacCode");
              }}
              buttonText={<><ArrowLeft className="mb-1"/> Farm Dashboard</>}
              isButtonCallToAction={false}
              isVisible={true}
              isEnabled={true}
            /> 
          </div>
          <div className="d-flex flex-column flex-md-row">
            <div className="mb-2 mb-md-0">
              <ReportInput.ReportInputButton name="otherAddButton"
                onClick={() => {
                  logClick("ReportConnectedLandPlantList","otherAddButton","");
                  navigateTo("land-add-plant", "landCode");
                }}
                buttonText="Other Add Button"
                isButtonCallToAction={false}
                isVisible={true}
                isEnabled={true}
              />
            </div>
            <div>
              <ReportInput.ReportInputButton name="add-button"
                onClick={() => {
                  logClick("ReportConnectedLandPlantList","add","");
                  navigateTo("land-add-plant", "landCode");
                }}
                buttonText={<><PlusCircle className="mb-1"/> Add A Plant</>}
                className="ms-md-2"
                isButtonCallToAction={true}
                isVisible={true}
                isEnabled={true}
              />
            </div>
          </div>
        </div> 
        
        

        {/*//GENTrainingBlock[visualizationType]Start*/}
        {/*//GENLearn[visualizationType=Grid]Start*/}
        <ReportFilterLandPlantList
          name="reportConnectedLandPlantList-filter"
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
        

        <ReportGridLandPlantList
          isSortDescending={queryResult.orderByDescending}
          items={queryResult.items}
          name="reportConnectedLandPlantList-table"
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
        {/*//GENLearn[visualizationType=Grid]End*/}
        {/*//GENTrainingBlock[visualizationType]End*/}

      </Card> 
      
    </div>
  );
};
export default ReportConnectedLandPlantList;
