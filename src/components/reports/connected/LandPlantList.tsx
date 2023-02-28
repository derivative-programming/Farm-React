import React, { FC, ReactElement, useContext, useState, useEffect, useRef } from "react";
import { Button, Form, Card, Breadcrumb } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom"; 
import ReportFilterLandPlantList from "../filters/LandPlantList";
import { ReportGridLandPlantList } from "../visualization/grid/LandPlantList";
import * as ReportService from "../services/LandPlantList"; 
import * as InitReportService from "../services/LandPlantListInitReport"; 

export const ReportConnectedLandPlantList: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance);
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance);
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance);
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);
    const isInitializedRef = useRef(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const contextCode: string = id ?? "00000000-0000-0000-0000-000000000000";

    const handleInit = (responseFull: any) => { 
        const response: InitReportService.InitResult = responseFull.data;

        if (!response.success) {
            return;
        }
        console.log('init returned');
        console.log(response);
        setInitPageResponse({...response})
    }

    const handleQueryResults = (responseFull: any) => {
        const queryResult: ReportService.QueryResult = responseFull.data;

        if (!queryResult.success) {
            return;
        } 
        console.log(queryResult);
        setQueryResult({ ...queryResult });
    }

    const onSubmit = (queryRequest: ReportService.QueryRequest) => {
        setQuery({ ...queryRequest });
    }

    const onPageSelection = (pageNumber: number) => {
        setQuery({ ...query, pageNumber: pageNumber });
    }


    const onPageSizeChange = (pageSize: number) => {
        setQuery({ ...query, ItemCountPerPage: pageSize });
    } 

    const onNavigateTo = (url: string) => {
        navigate(url);
    }
    
    const navigateTo = (page: string, codeName:string) => { 
        let targetContextCode = contextCode; 
        Object.entries(initPageResponse)
        .forEach(([key, value]) => { 
            if(key == codeName)
            {
                if(value != ''
                    && value != '00000000-0000-0000-0000-000000000000') {
                    targetContextCode = value;
                } else {
                    return;
                }
            }
        })
        const url = '/' + page + '/' + targetContextCode; 
        navigate(url);
    }
    
    const onRefreshRequest = () => { 
        setQuery({ ...query})
    }

    const onSort = (columnName: string) => {
        console.log('onsort ' + columnName);
        let orderByDescending = false;
        if (query.OrderByColumnName == columnName) {
            orderByDescending = !query.OrderByDescending;
        }
        setQuery({ ...query, OrderByColumnName: columnName, OrderByDescending: orderByDescending })
    }

    useEffect(() => {
        if (isInitializedRef.current) {
            return;
        }
        isInitializedRef.current = true;
        ReportService.initPage(contextCode)
            .then(response => handleInit(response));
    });

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

        <div className="plants-container" data-testid="reportConnectedLandPlantList">
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item id="TacFarmDashboardBreadcrumb"
                        onClick={() => navigateTo("tac-farm-dashboard","tacCode")}>
                        Farm Dashboard breadcrumb text
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active href="">
                        Plant List title text
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Plant List title text</h1>
            <h6>A list of plants on the land</h6>
            <div className="plants-list-button-header">
                <Button data-testid="back-button"
                    onClick={() => navigateTo("tac-farm-dashboard", "tacCode")}
                    className="primary-button"
                    type="submit">
                    Farm Dashboard
                </Button>
                <Button data-testid="add-button"
                    className="primary-button ms-2"
                    type="submit"
                    onClick={() => navigateTo("land-add-plant", "landCode")}>
                    Add A Plant
                </Button>
            </div>
            {/*//GENTrainingBlock[visualizationType]Start*/}
            {/*//GENLearn[visualizationType=Grid]Start*/}
            <ReportFilterLandPlantList
                name="reportConnectedLandPlantList-filter"
                initialQuery={initialValues}
                onSubmit={onSubmit} />

            <ReportGridLandPlantList
                isSortDescending={queryResult.orderByDescending}
                items={queryResult.items}
                name="reportConnectedLandPlantList-table" 
                contextCode={contextCode}
                onSort={onSort}
                onNavigateTo={onNavigateTo}
                onRefreshRequest={onRefreshRequest}
                sortedColumnName={queryResult.orderByColumnName}
                currentPage={queryResult.pageNumber}
                onPageSelection={onPageSelection}
                onPageSizeChange={onPageSizeChange}
                pageSize={queryResult.itemCountPerPage}
                totalItemCount={queryResult.recordsTotal}
            />
            {/*//GENLearn[visualizationType=Grid]End*/}
            {/*//GENTrainingBlock[visualizationType]End*/}
        </div>
    );
};
export default ReportConnectedLandPlantList;
