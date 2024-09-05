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
import * as LandPlantListReportService from "../services/LandPlantList";
import * as InitReportService from "../services/init/LandPlantListInitReport";
import HeaderLandPlantList from "../headers/LandPlantListInitReport";
import * as ReportInput from "../input-fields"; // NOSONAR
import { PlusCircle, ArrowLeft } from "react-bootstrap-icons"; // NOSONAR
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 
//GENTrainingBlock[visualizationTypeImports]Start
//GENLearn[visualizationType=Grid]Start
import ReportFilterLandPlantList from "../filters/LandPlantList";
import { ReportGridLandPlantList } from "../visualization/grid/LandPlantList";
import { v4 as uuidv4 } from "uuid";
//GENLearn[visualizationType=Grid]End
//GENTrainingBlock[visualizationTypeImports]End

export const ReportConnectedLandPlantList: FC = (): ReactElement => {
  const isFilterPersistant  = false;

  const [isProcessing, setIsProcessing] = useState(false); 
  const [initPageResponse, setInitPageResponse] = useState<InitReportService.InitResult | null>(null);
 
  
  const [queryResult, setQueryResult] = useState<LandPlantListReportService.QueryResult | null>(null);
 
  const [query, setQuery] = useState<LandPlantListReportService.QueryRequest | null>(null);
 
  const [initialQuery, setInitialQuery] = useState<LandPlantListReportService.QueryRequest | null>(null);

  const [displayItem, setDisplayItem] = useState<LandPlantListReportService.QueryResultItem | null>(null);
  
  const isInitializedRef = useRef(false);
  const { logClick } = useAnalyticsDB();
  //GENTrainingBlock[visualizationTypeInit]Start
  //GENLearn[visualizationType=Grid]Start
    const [exportQuery, setExportQuery] = useState(new LandPlantListReportService.QueryRequestInstance());
  //GENLearn[visualizationType=Grid]End
  //GENTrainingBlock[visualizationTypeInit]End

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

  const handleQueryResults = (responseFull: LandPlantListReportService.ResponseFull) => {
    const queryResult: LandPlantListReportService.QueryResult = responseFull.data;

    if (!queryResult.success) {
      return;
    }
    setQueryResult({ ...queryResult });
  };

  const onNavigateTo = (url: string) => {
    navigate(url);
  };

  const onRefreshRequest = () => {
    logClick("ReportConnectedLandPlantList","refresh","");
    setQuery(new LandPlantListReportService.QueryRequestInstance());
  };


  useEffect(() => { 
    if (isInitializedRef.current) { 
      return;
    } 
    isInitializedRef.current = true;
    LandPlantListReportService.initPage(contextCode).then((response) =>
      handleInit(response)
    );
  }, []);

  useEffect(() => { 
    if(initPageResponse === null){
      return;
    }
    let queryRequest = LandPlantListReportService.buildQueryRequest(initPageResponse);  

    // Check if persistence is enabled and if there is a saved filter
    if (isFilterPersistant) {
      const savedFilter = localStorage.getItem("LandPlantListFilter"); 

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
    LandPlantListReportService.submitRequest(query, contextCode).then((response) =>
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
 
    const item = queryResult.items.length > 0 ?  queryResult.items[0] : new LandPlantListReportService.QueryResultItemInstance();
    
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
  //GENTrainingBlock[visualizationTypeFuncs]Start
  //GENLearn[visualizationType=Grid]Start
  const isRefreshButtonHidden = false;
  const isPagingAvailable = true;
  const isExportButtonsHidden = false;
  const isFilterSectionHidden = false;
  const isFilterSectionCollapsable = true;
   

  const onSubmit = (queryRequest: LandPlantListReportService.QueryRequest) => {
    logClick("ReportConnectedLandPlantList","search","");
    
    if(isFilterPersistant ){
      localStorage.setItem("LandPlantListFilter",JSON.stringify(queryRequest)); 
    }
    
    setQuery({ ...queryRequest });
  };
  const onFilterReset = () => {
    logClick("ReportConnectedLandPlantList","reset filter","");
    const clearQuery = new LandPlantListReportService.QueryRequestInstance();
    if(isFilterPersistant ){
      localStorage.setItem("LandPlantListFilter",JSON.stringify(clearQuery));
    }
    setInitialQuery({...clearQuery});
  };

  const onPageSelection = (pageNumber: number) => {
    logClick("ReportConnectedLandPlantList","selectPage",pageNumber.toString());
    if(query === null){
      return;
    }
    setQuery({ ...query, pageNumber: pageNumber });
  };

  const onPageSizeChange = (pageSize: number) => {
    logClick("ReportConnectedLandPlantList","pageSizeChange",pageSize.toString());  
    if(query === null){
      return;
    }
    localStorage.setItem("pageSize",pageSize.toString());
    setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
  };

  const onSort = (columnName: string) => { 
    logClick("ReportConnectedLandPlantList","sort",columnName);
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
    logClick("ReportConnectedLandPlantList","export","");
    if(query === null){
      return;
    }
    if(isProcessing){
      return;
    } 
    setExportQuery({ ...query });
  };
  
  const handleExportQueryResults = (responseFull: LandPlantListReportService.ResponseFull) => { // NOSONAR
    const queryResult: LandPlantListReportService.QueryResult = responseFull.data;

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
    LandPlantListReportService.submitCSVRequest(query, contextCode).then((response) => { 
      //handleExportQueryResults(response);  //NOSONAR
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

  //GENLearn[visualizationType=Grid]End
  //GENTrainingBlock[visualizationTypeFuncs]End
  
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
                className="ms-md-2"
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
        
        {initPageResponse && (
          <HeaderLandPlantList  
            name="headerLandPlantList"
            initData={initPageResponse}
            isHeaderVisible={true}
          />
        )}

        {/*//GENTrainingBlock[visualizationType]Start*/}
        {/*//GENLearn[visualizationType=Grid]Start*/}
        {initialQuery && (
          <ReportFilterLandPlantList
            name="reportConnectedLandPlantList-filter"
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
        )}
        {/*//GENLearn[visualizationType=Grid]End*/}
        {/*//GENTrainingBlock[visualizationType]End*/}

      </Card> 
      
    </div>
  );
};
export default ReportConnectedLandPlantList;
