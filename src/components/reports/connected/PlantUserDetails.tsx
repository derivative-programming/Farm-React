import React, { FC, ReactElement, useState, useEffect, useRef } from "react";
import { Card, Breadcrumb, Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import * as ReportService from "../services/PlantUserDetails";
import * as ReportInput from "../input-fields";
import * as InitReportService from "../services/init/PlantUserDetailsInitReport"; 
import { ReportDetailThreeColPlantUserDetails } from "../visualization/detail-three-column/PlantUserDetails";
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 

export const ReportConnectedPlantUserDetails: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance());
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance()); 
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance());
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance());
    const isInitializedRef = useRef(false);
    const { logClick } = useAnalyticsDB();

    const navigate = useNavigate();
    const { id } = useParams();
    const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

    const displayItem:ReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new ReportService.QueryResultItemInstance();

    const handleInit = (responseFull: any) => {
        
        const response: InitReportService.InitResult = responseFull.data;

        if (!response.success) {
            return;
        }
        setInitPageResponse({...response})
    }

    const handleQueryResults = (responseFull: any) => {
        const queryResult: ReportService.QueryResult = responseFull.data;

        if (!queryResult.success) {
            return;
        }

        setQueryResult({ ...queryResult });
    }

    const onSubmit = (queryRequest: ReportService.QueryRequest) => { 
        setQuery({ ...queryRequest });
    }

    const onPageSelection = (pageNumber: number) => { 
        setQuery({ ...query, pageNumber: pageNumber });
    }


    const onPageSizeChange = (pageSize: number) => { 
        setQuery({ ...query, ItemCountPerPage: pageSize, pageNumber: 1 });
    }

    const onRowSelect = (index: number) => {
    }

    const onRowUnselect = (index: number) => {
    }

    const onSelectAll = () => {
    }

    const onUnselectAll = () => {
    }

    const onNavigateTo = (url: string) => { 
        navigate(url); 
    }
    
    const navigateTo = (page: string, codeName:string) => { 
        let targetContextCode = contextCode; 
        Object.entries(initPageResponse)
        .forEach(([key, value]) => { 
            if(key === codeName)
            {
                if(value !== ''
                    && value !== '00000000-0000-0000-0000-000000000000') {
                    targetContextCode = value;
                } else {
                    return;
                }
            }
        })
        const url = '/' + page + '/' + targetContextCode; 
        navigate(url);
    }

    const onSort = (columnName: string) => {
        let orderByDescending = false;
        if (query.OrderByColumnName === columnName) {
            orderByDescending = !query.OrderByDescending;
        } 
        setQuery({ ...query, OrderByColumnName: columnName, OrderByDescending: orderByDescending })
    }

    const onRefreshRequest =() => { 
        setQuery({ ...query});
    }

    useEffect(() => {
        if (isInitializedRef.current) {
            return;
        }
        isInitializedRef.current = true;
        ReportService.initPage(contextCode)
            .then(response => handleInit(response));
    },[]);

    useEffect(() => {
        const newInitalValues = ReportService.buildQueryRequest(initPageResponse);   
        setInitialValues({ ...newInitalValues });
    }, [initPageResponse]); 
    

    useEffect(() => { 
        if(JSON.stringify(initialValues) !== JSON.stringify(query)){ 
            setQuery({ ...initialValues });
        }
    }, [initialValues]); 

    useEffect(() => { 
        setIsProcessing(true);
        ReportService.submitRequest(query, contextCode)
            .then(response => handleQueryResults(response))
            .finally(() => {setIsProcessing(false);});
    }, [query]); 

    return (

        <div className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3" data-testid="reportConnectedPlantUserDetails">
            <div className="w-100">
                <Breadcrumb>
                    <Breadcrumb.Item id="tacFarmDashboardBreadcrumb"  
                        data-testid="tacFarmDashboardBreadcrumb" 
                        onClick={() => {
                            logClick("ReportConnectedPlantUserDetails","tacFarmDashboardBreadcrumb","");
                            navigateTo('tac-farm-dashboard',"tacCode")
                        }}>
                        Farm Dashboard
                    </Breadcrumb.Item>
                    <Breadcrumb.Item id="landPlantListBreadcrumb" 
                        data-testid="landPlantListBreadcrumb" 
                        onClick={() => {
                            logClick("ReportConnectedPlantUserDetails","landPlantListBreadcrumb","");
                            navigateTo('land-plant-list',"landCode");
                        }}>
                        Plant List
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Plant Details
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>

             
            <Card
                className="mt-1 page-card report-card"
                
            > 
                    <h2 data-testid="page-title-text">Plant Details</h2>
                    <h6 data-testid="page-intro-text">Plant Details page intro text</h6>
                    <Container>  
                        <div className="d-flex w-100 justify-content-center justify-content-md-start">
                            <ReportInput.ReportInputButton
                                name="back-button"
                                onClick={() => {
                                    logClick("ReportConnectedPlantUserDetails","back","");
                                    navigateTo("land-plant-list","landCode")
                                }}
                                buttonText={<><ArrowLeft className="mb-1"/> Plant List</>} 
                                isButtonCallToAction={false}
                                isVisible={true}
                                isEnabled={true}
                            />
                        </div>  
                    </Container>  
                    {/*//GENTrainingBlock[visualizationType]Start*/}
                    {/*//GENLearn[visualizationType=DetailThreeColumn]Start*/}
                    <ReportDetailThreeColPlantUserDetails 
                        item= {displayItem}
                        name="reportConnectedPlantUserDetails-table" 
                        onNavigateTo={onNavigateTo} 
                        onRefreshRequest={onRefreshRequest}
                        showProcessing={isProcessing}
                    /> 
                    {/*//GENLearn[visualizationType=DetailThreeColumn]End*/}
                    {/*//GENTrainingBlock[visualizationType]End*/}
                
            </Card> 
        </div>
    );
};
export default ReportConnectedPlantUserDetails;
