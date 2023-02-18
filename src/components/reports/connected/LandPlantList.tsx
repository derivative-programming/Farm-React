import React, { FC, ReactElement, useContext, useState, useEffect, useRef } from "react";
import { Button, Form, Card, Breadcrumb } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ServiceLandPlantList from "../services/LandPlantList"; 
import ReportFilterLandPlantList from "../filters/LandPlantList";
import {ReportTableLandPlantList} from "../tables/LandPlantList";  
import * as ReportService from "../services/LandPlantList"; 
import { ReportPagination } from "../InputFields/Pagination";
   
const ReportConnectedLandPlantList: FC = (): ReactElement => { 
    const [currentPage,setCurrentPage] = useState(1);
    const [pageSize,setPageSize] = useState(10);
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance);
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance);
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);   
    const isInitializedRef = useRef(false);
    
    const navigate = useNavigate();
    const { id } = useParams();
    const landCode:string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable:Record<string,string> = {}
    navCodesAvailable.landCode = landCode;    
    
    const handleInit = (responseFull:any) => { 
        console.log('init...');
        console.log(responseFull);
        const initFormResponse: ReportService.InitResult = responseFull.data; 

        if(!initFormResponse.success)
        {
            return;
        } 
        
        initialValues.flavorCode = initFormResponse.flavorCode; 
        initialValues.someIntVal = initFormResponse.someIntVal;
        initialValues.someBigIntVal = initFormResponse.someBigIntVal;
        initialValues.someBitVal = initFormResponse.someBitVal;
        initialValues.isEditAllowed = initFormResponse.isEditAllowed;
        initialValues.isDeleteAllowed = initFormResponse.isDeleteAllowed;
        initialValues.someFloatVal = initFormResponse.someFloatVal;
        initialValues.someDecimalVal = initFormResponse.someDecimalVal;
        initialValues.someMinUTCDateTimeVal = initFormResponse.someMinUTCDateTimeVal;
        initialValues.someMinDateVal = initFormResponse.someMinDateVal;
        initialValues.someMoneyVal = initFormResponse.someMoneyVal;
        initialValues.someNVarCharVal = initFormResponse.someNVarCharVal;
        initialValues.someVarCharVal = initFormResponse.someVarCharVal;
        initialValues.someTextVal = initFormResponse.someTextVal;
        initialValues.somePhoneNumber = initFormResponse.somePhoneNumber;
        initialValues.someEmailAddress = initFormResponse.someEmailAddress; 
 
        setInitialValues({...initialValues}); 
        setQuery({...initialValues});
    }

    const handleQueryResults = (responseFull:any) =>
    { 
        const queryResult: ReportService.QueryResult = responseFull.data; 

        if(!queryResult.success)
        {
            return;
        } 

        setQueryResult({...queryResult});
    }

    const onSubmit = (queryRequest: ReportService.QueryRequest) => {
        setQuery({...queryRequest});
    }
    
    const onPageSelection = (pageNumber:number) => { 
        setQuery({...query, pageNumber: pageNumber });
    }

    
    const onPageSizeChange = (pageSize:number) => {
        setQuery({...query, ItemCountPerPage: pageSize });
    }
    
    const onRowSelect = (index:number) => { 
    }

    const onRowUnselect = (index:number) => { 
    }

    const onSelectAll = () => { 
    }

    const onSort = (columnName:string) => { 
        let orderByDescending = false;
        if(query.OrderByColumnName == columnName){
            orderByDescending = !query.OrderByDescending;
        } 
        setQuery({...query,OrderByColumnName: columnName,OrderByDescending: orderByDescending})
    }
    
    useEffect(() => {   
        if(isInitializedRef.current){
            return;
        }
        isInitializedRef.current = true;
        ReportService.initPage(landCode)
        .then(response => handleInit(response)); 
    }); 

    useEffect(() => {   
        ReportService.submitRequest(query,landCode)
        .then(response => handleQueryResults(response));
    },[query]); 
     
        
    const onDashboard = () => {
        navigate("/tac-farm-dashboard")
    }

    const goTo = (url: any) => {
        navigate(url);
      };
      
    return ( 

        <div className="plants-container" data-testid="land-plant-list">
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item onClick={onDashboard}>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active href="">
                        Plants
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Plants</h1>
            <div className="plants-list-button-header">
                <Button
                    onClick={onDashboard}
                    className="primary-button"
                    type="submit"
                >
                    Dashboard
                </Button>
                <Button
                    className="primary-button"
                    type="submit"
                    onClick={() => goTo("/land-add-plant/" + landCode)}
                >
                    Add Plant
                </Button>
            </div>
            <ReportFilterLandPlantList
                name="reportConnectedLandPlantList-filter"
                initialQuery={initialValues}
                onSubmit={onSubmit} />

            <div className="w-100" style={{ textAlign: "left" }}>
                <Button className='primary-button mt-3'   type="button">
                    Delete Selected
                </Button> 
            </div>

            <ReportTableLandPlantList
                isSortDescending={queryResult.orderByDescending}
                items={queryResult.items}
                name="reportConnectedLandPlantList-table"
                onRowSelect={onRowSelect}
                onRowUnselect={onRowUnselect}
                onSelectAll={onSelectAll}
                onSort={onSort}
                sortedColumnName={queryResult.orderByColumnName}
            />

            <ReportPagination
                name="reportConnectedLandPlantList-paginator"
                currentPage={queryResult.pageNumber}
                currentPageItemCount={queryResult.itemCountPerPage}
                onPageSelection={onPageSelection}
                onPageSizeChange={onPageSizeChange}
                pageSize={queryResult.itemCountPerPage}
                totalItemCount={queryResult.recordsFiltered}
            />
        </div> 
    );
};
export default ReportConnectedLandPlantList;
