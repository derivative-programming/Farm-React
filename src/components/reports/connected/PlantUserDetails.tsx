import React, { FC, ReactElement, useState, useEffect, useRef } from "react";
import { Card, Breadcrumb, Container } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import * as PlantUserDetailsReportService from "../services/PlantUserDetails";
import * as ReportInput from "../input-fields";
import * as InitReportService from "../services/init/PlantUserDetailsInitReport"; 
import useAnalyticsDB from "../../../hooks/useAnalyticsDB"; 
//GENTrainingBlock[visualizationTypeImports]Start
//GENLearn[visualizationType=DetailThreeColumn]Start
import { ReportDetailThreeColPlantUserDetails } from "../visualization/detail-three-column/PlantUserDetails";
//GENLearn[visualizationType=DetailThreeColumn]End
//GENTrainingBlock[visualizationTypeImports]End

export const ReportConnectedPlantUserDetails: FC = (): ReactElement => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance());
    const [queryResult, setQueryResult] = useState(new PlantUserDetailsReportService.QueryResultInstance()); 
    const [query, setQuery] = useState(new PlantUserDetailsReportService.QueryRequestInstance());
    const [initialValues, setInitialValues] = useState(new PlantUserDetailsReportService.QueryRequestInstance());
    const isInitializedRef = useRef(false);
    const { logClick } = useAnalyticsDB();
    //GENTrainingBlock[visualizationTypeInit]Start
    //GENLearn[visualizationType=DetailThreeColumn]Start
    //GENLearn[visualizationType=DetailThreeColumn]End
    //GENTrainingBlock[visualizationTypeInit]End

    const navigate = useNavigate();
    const { id } = useParams();
    const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

    const handleInit = (responseFull: InitReportService.ResponseFull) => {
        
        const response: InitReportService.InitResult = responseFull.data;

        if (!response.success) {
            return;
        }
        setInitPageResponse({...response})
    }

    const handleQueryResults = (responseFull: PlantUserDetailsReportService.ResponseFull) => {
        const queryResult: PlantUserDetailsReportService.QueryResult = responseFull.data;

        if (!queryResult.success) {
            return;
        }

        setQueryResult({ ...queryResult });
    }

    const onNavigateTo = (url: string) => { 
        navigate(url); 
    }

    const onRefreshRequest =() => { 
        setQuery({ ...query});
    }

    useEffect(() => {
        if (isInitializedRef.current) {
            return;
        }
        isInitializedRef.current = true;
        PlantUserDetailsReportService.initPage(contextCode)
            .then(response => handleInit(response));
    },[]);

    useEffect(() => {
        const newInitalValues = PlantUserDetailsReportService.buildQueryRequest(initPageResponse);   
        setInitialValues({ ...newInitalValues });
    }, [initPageResponse]); 
    

    useEffect(() => { 
        if(JSON.stringify(initialValues) !== JSON.stringify(query)){ 
            setQuery({ ...initialValues });
        }
    }, [initialValues]); 

    useEffect(() => { 
        setIsProcessing(true);
        PlantUserDetailsReportService.submitRequest(query, contextCode)
            .then(response => handleQueryResults(response))
            .finally(() => {setIsProcessing(false);});
    }, [query]); 
    
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

    //GENTrainingBlock[visualizationTypeFuncs]Start
    //GENLearn[visualizationType=DetailThreeColumn]Start
    const displayItem:PlantUserDetailsReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new PlantUserDetailsReportService.QueryResultItemInstance();
    
    //GENLearn[visualizationType=DetailThreeColumn]End
    //GENTrainingBlock[visualizationTypeFuncs]End

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
