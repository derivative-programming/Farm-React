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
  import * as TacFarmDashboardReportService from "../services/TacFarmDashboard";
  import * as InitReportService from "../services/init/TacFarmDashboardInitReport";
  import HeaderTacFarmDashboard from "../headers/TacFarmDashboardInitReport";
  import * as ReportInput from "../input-fields"; // NOSONAR
  import { PlusCircle, ArrowLeft } from "react-bootstrap-icons"; // NOSONAR
  import useAnalyticsDB from "../../../hooks/useAnalyticsDB";
  //GENTrainingBlock[visualizationTypeImports]Start
//GENLearn[visualizationType=DetailTwoColumn]Start
import { ReportDetailTwoColTacFarmDashboard } from "../visualization/detail-two-column/TacFarmDashboard";
//GENLearn[visualizationType=DetailTwoColumn]End
//GENTrainingBlock[visualizationTypeImports]End
  
  export const ReportConnectedTacFarmDashboard: FC = (): ReactElement => {
    const isFilterPersistant  = false;
  
    const [isProcessing, setIsProcessing] = useState(false);
    const [initPageResponse, setInitPageResponse] = useState<InitReportService.InitResult | null>(null);
  
    const [queryResult, setQueryResult] = useState<TacFarmDashboardReportService.QueryResult | null>(null);
  
    const [query, setQuery] = useState<TacFarmDashboardReportService.QueryRequest | null>(null);
  
    const [initialQuery, setInitialQuery] = useState<TacFarmDashboardReportService.QueryRequest | null>(null);
  
    const [displayItem, setDisplayItem] = useState<TacFarmDashboardReportService.QueryResultItem | null>(null);
  
    const isInitializedRef = useRef(false);
    const { logClick } = useAnalyticsDB();
    //GENTrainingBlock[visualizationTypeInit]Start
    //GENLearn[visualizationType=DetailTwoColumn]Start
    //GENLearn[visualizationType=DetailTwoColumn]End
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
  
    const handleQueryResults = (responseFull: TacFarmDashboardReportService.ResponseFull) => {
      const queryResult: TacFarmDashboardReportService.QueryResult = responseFull.data;
  
      if (!queryResult.success) {
        return;
      }
      setQueryResult({ ...queryResult });
    };
  
    const onNavigateTo = (url: string) => {
      navigate(url);
    };
  
    const onRefreshRequest = () => {
      logClick("ReportConnectedTacFarmDashboard","refresh","");
      setQuery(new TacFarmDashboardReportService.QueryRequestInstance());
    };
  
    useEffect(() => {
      if (isInitializedRef.current) {
        return;
      }
      isInitializedRef.current = true;
      TacFarmDashboardReportService.initPage(contextCode).then((response) =>
        handleInit(response)
      );
    }, []);
  
    useEffect(() => {
      if(initPageResponse === null){
        return;
      }
      let queryRequest = TacFarmDashboardReportService.buildQueryRequest(initPageResponse);
  
      // Check if persistence is enabled and if there is a saved filter
      if (isFilterPersistant) {
        const savedFilter = localStorage.getItem("TacFarmDashboardFilter");
  
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
      TacFarmDashboardReportService.submitRequest(query, contextCode).then((response) =>
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
 
      const item = queryResult.items.length > 0 ?  queryResult.items[0] : new TacFarmDashboardReportService.QueryResultItemInstance();
      
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
    //GENLearn[visualizationType=DetailTwoColumn]Start
    //GENLearn[visualizationType=DetailTwoColumn]End
    //GENTrainingBlock[visualizationTypeFuncs]End
  
    return (
      <div
        className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3 "
        data-testid="reportConnectedTacFarmDashboard"
      >
        <div className="w-100">
          <Breadcrumb hidden={isBreadcrumbSectionHidden}>
  
            <Breadcrumb.Item active href="">
              Farm Dashboard
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
  
        <Card
          className="mt-1 page-card report-card"
  
        >
  
          <h2 data-testid="page-title-text">Farm Dashboard</h2>
          <h6 data-testid="page-intro-text">Farm Dashboard page intro text</h6>
  
          <div className="col-12 d-flex flex-column flex-md-row justify-content-between">
            <div className="mb-2 mb-md-0">
              <ReportInput.ReportInputButton name="back-button"
                onClick={() => {
                    logClick("ReportConnectedTacFarmDashboard","back","");
                    navigateTo("", "");
                }}
                buttonText={<><ArrowLeft className="mb-1"/> </>}
                isButtonCallToAction={false}
                isVisible={false}
                isEnabled={true}
              />
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className="mb-2 mb-md-0">
  
              </div>
              <div>
                <ReportInput.ReportInputButton name="add-button"
                  onClick={() => {
                    logClick("ReportConnectedList","add","");
                    navigateTo("", "");
                  }}
                  buttonText={<><PlusCircle className="mb-1"/> </>}
                  className="ms-md-2"
                  isButtonCallToAction={false}
                  isVisible={false}
                  isEnabled={true}
                />
              </div>
            </div>
          </div>
  
          {initPageResponse && (
            <HeaderTacFarmDashboard
              name="headerTacFarmDashboard"
              initData={initPageResponse}
              isHeaderVisible={false}
            />
          )}
  
            {/*//GENTrainingBlock[visualizationType]Start*/}
            {/*//GENLearn[visualizationType=DetailTwoColumn]Start*/}
            {displayItem && (
                <ReportDetailTwoColTacFarmDashboard 
                    item={displayItem}
                    name="reportConnectedTacFarmDashboard-table" 
                    onNavigateTo={onNavigateTo} 
                    onRefreshRequest={onRefreshRequest}
                    showProcessing={isProcessing}
                /> 
            )}
            {/*//GENLearn[visualizationType=DetailTwoColumn]End*/}
            {/*//GENTrainingBlock[visualizationType]End*/}
  
        </Card>
  
      </div>
    );
  };
  export default ReportConnectedTacFarmDashboard;
  
  