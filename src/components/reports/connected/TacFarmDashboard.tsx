import React, { FC, ReactElement, useState, useEffect, useRef } from "react";
import { Card } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ReportService from "../services/TacFarmDashboard";
import * as InitReportService from "../services/init/TacFarmDashboardInitReport";
import { ReportDetailTwoColTacFarmDashboard } from "../visualization/detail-two-column/TacFarmDashboard";

export const ReportConnectedTacFarmDashboard: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance());
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance()); 
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance());
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance());
    const isInitializedRef = useRef(false);

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
        ReportService.submitRequest(query, contextCode)
            .then(response => handleQueryResults(response));
    }, [query]); 

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
                    /> 
                    {/*//GENLearn[visualizationType=DetailTwoColumn]End*/}
                    {/*//GENTrainingBlock[visualizationType]End*/}
            </Card> 
        </div>
    );
};
export default ReportConnectedTacFarmDashboard;
