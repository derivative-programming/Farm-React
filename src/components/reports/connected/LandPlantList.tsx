import React, { FC, ReactElement, useContext, useState, useEffect, useRef } from "react";
import { Button, Form, Card, Breadcrumb } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom"; 
import ReportFilterLandPlantList from "../filters/LandPlantList";
import { ReportGridLandPlantList } from "../visualization/grid/LandPlantList";
import { ReportDetailThreeColLandPlantList } from "../visualization/detail-three-column/LandPlantList";
import { ReportDetailTwoColLandPlantList } from "../visualization/detail-two-column/LandPlantList";
import * as ReportService from "../services/LandPlantList"; 
import * as InitReportService from "../services/LandPlantListInitReport"; 
import * as ReportInput from "../input-fields"   

export const ReportConnectedLandPlantList: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [initPageResponse, setInitPageResponse] = useState(new InitReportService.InitResultInstance);
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance);
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance);
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);
    const isInitializedRef = useRef(false);
    
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
    
    const firstItem:ReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new ReportService.QueryResultItemInstance;

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
        setQuery({ ...query, ItemCountPerPage: pageSize });
    } 

    const onNavigateTo = (url: string) => {
        navigate(url);
    }
    
    const navigateTo = (page: string, codeName:string) => { 
        console.log('navigateTo ' + page + ' ' + codeName);
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
        console.log('query start');
        ReportService.submitRequest(query, contextCode)
            .then(response => handleQueryResults(response));
    }, [query]);
  

    return (

        <div className="report-container" data-testid="reportConnectedLandPlantList">
            <div className="breadcrumb-container">
                <Breadcrumb hidden={isBreadcrumbSectionHidden}>
                    <Breadcrumb.Item id="TacFarmDashboardBreadcrumb"
                        onClick={() => navigateTo("tac-farm-dashboard","tacCode")}>
                        Farm Dashboard breadcrumb text
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active href="">
                        Plant List title text
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h2>Plant List title text</h2>
            <h6>A list of plants on the land</h6>
            <div className="d-flex w-100 justify-content-between">
                <div>
                    <ReportInput.ReportInputButton name="back-button"
                        onClick={() => navigateTo("tac-farm-dashboard", "tacCode")}
                        buttonText="Farm Dashboard" 
                        className="primary-button"
                        isButtonCallToAction={false}
                        isVisible={true}
                        isEnabled={true}
                    /> 
                </div>
                <div>
                    <ReportInput.ReportInputButton name="otherAddButton"
                        onClick={() => navigateTo("land-add-plant", "landCode")}
                        buttonText="Other Add Button" 
                        className="primary-button ms-2"
                        isButtonCallToAction={false}
                        isVisible={true}
                        isEnabled={true}
                    />  
                    <ReportInput.ReportInputButton name="add-button"
                        onClick={() => navigateTo("land-add-plant", "landCode")}
                        buttonText="Add A Plant" 
                        className="primary-button ms-2"
                        isButtonCallToAction={true}
                        isVisible={true}
                        isEnabled={true}
                    />  
                </div>
            </div>
            {/*//GENTrainingBlock[visualizationType]Start*/}
            {/*//GENLearn[visualizationType=Grid]Start*/}
            <ReportFilterLandPlantList
                name="reportConnectedLandPlantList-filter"
                initialQuery={initialValues}
                onSubmit={onSubmit} 
                isCollapsible={isFilterSectionCollapsable}
                hidden={isFilterSectionHidden}/>

            <div className="d-flex w-100 mt-3 justify-content-end" hidden={!isFilterSectionHidden || (isFilterSectionHidden && isRefreshButtonHidden)}>  
                    <Button data-testid="refresh-button"
                        className="primary-button ms-2"
                        type="submit"
                        onClick={onRefreshRequest}>
                        Refresh
                    </Button>  
            </div>

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
                showPagingControls={isPagingAvailable}
                showExport={!isExportButtonsHidden}
            />
            {/*//GENLearn[visualizationType=Grid]End*/}
            {/*//GENTrainingBlock[visualizationType]End*/}
        </div>
    );
};
export default ReportConnectedLandPlantList;
