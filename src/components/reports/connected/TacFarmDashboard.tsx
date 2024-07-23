import React, { FC, ReactElement, useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as TacFarmDashboardReportService from "../services/TacFarmDashboard";
import * as InitReportService from "../services/init/TacFarmDashboardInitReport";
//GENTrainingBlock[visualizationTypeImports]Start
//GENLearn[visualizationType=DetailTwoColumn]Start
import { ReportDetailTwoColTacFarmDashboard } from "../visualization/detail-two-column/TacFarmDashboard";
//GENLearn[visualizationType=DetailTwoColumn]End
//GENTrainingBlock[visualizationTypeImports]End

export const ReportConnectedTacFarmDashboard: FC = (): ReactElement => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance());
    const [queryResult, setQueryResult] = useState(new TacFarmDashboardReportService.QueryResultInstance()); 
    const [query, setQuery] = useState(new TacFarmDashboardReportService.QueryRequestInstance());
    const [initialValues, setInitialValues] = useState(new TacFarmDashboardReportService.QueryRequestInstance());
    const isInitializedRef = useRef(false);
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
        setInitPageResponse({...response})
    }

    const handleQueryResults = (responseFull: TacFarmDashboardReportService.ResponseFull) => {
        const queryResult: TacFarmDashboardReportService.QueryResult = responseFull.data;

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
        TacFarmDashboardReportService.initPage(contextCode)
            .then(response => handleInit(response));
    },[]);

    useEffect(() => {
        const newInitalValues = TacFarmDashboardReportService.buildQueryRequest(initPageResponse);   
        setInitialValues({ ...newInitalValues });
    }, [initPageResponse]); 
    

    useEffect(() => { 
        if(JSON.stringify(initialValues) !== JSON.stringify(query)){ 
            setQuery({ ...initialValues });
        }
    }, [initialValues]); 

    useEffect(() => { 
        setIsProcessing(true);
        TacFarmDashboardReportService.submitRequest(query, contextCode)
            .then(response => handleQueryResults(response))
            .finally(() => {setIsProcessing(false);});
    }, [query]); 

    //GENTrainingBlock[visualizationTypeFuncs]Start
    //GENLearn[visualizationType=DetailTwoColumn]Start
    const displayItem:TacFarmDashboardReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new TacFarmDashboardReportService.QueryResultItemInstance();
    //GENLearn[visualizationType=DetailTwoColumn]End
    //GENTrainingBlock[visualizationTypeFuncs]End

    return (

        <div className="d-flex flex-column align-items-center h-90vh pb-2 pl-3 pr-3" data-testid="reportConnectedTacFarmDashboard">
            
           
            <Card
                className="mt-1 page-card report-card"
                
            > 
                    <h2 data-testid="page-title-text">Farm Dashboard</h2>
                    <h6 data-testid="page-intro-text">Farm Dashboard page intro text</h6>
                    <div className="d-flex w-100 justify-content-between"> 
                    </div>  
                    {/*//GENTrainingBlock[visualizationType]Start*/}
                    {/*//GENLearn[visualizationType=DetailTwoColumn]Start*/}
                    <ReportDetailTwoColTacFarmDashboard 
                        item= {displayItem}
                        name="reportConnectedTacFarmDashboard-table" 
                        onNavigateTo={onNavigateTo} 
                        onRefreshRequest={onRefreshRequest}
                        showProcessing={isProcessing}
                    /> 
                    {/*//GENLearn[visualizationType=DetailTwoColumn]End*/}
                    {/*//GENTrainingBlock[visualizationType]End*/}
            </Card> 
        </div>
    );
};
export default ReportConnectedTacFarmDashboard;
