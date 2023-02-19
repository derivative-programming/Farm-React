import React, { FC, ReactElement, useContext, useState, useEffect, useRef } from "react";
import { Button, Form, Card, Breadcrumb, Row } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom";
import * as ServicePlantUserDetails from "../services/PlantUserDetails";
import ReportFilterPlantUserDetails from "../filters/PlantUserDetails";
import { ReportGridPlantUserDetails } from "../visualization/grid/PlantUserDetails";
import * as ReportService from "../services/PlantUserDetails";
import { ReportPagination } from "../input-fields/Pagination";
import { ReportDetailThreeColPlantUserDetails } from "../visualization/detail-three-column/PlantUserDetails";

const ReportConnectedPlantUserDetails: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance);
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance);
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);
    const isInitializedRef = useRef(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const landCode: string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable: Record<string, string> = {}
    navCodesAvailable.landCode = landCode;
    const displayItem:ReportService.QueryResultItem = queryResult.items.length > 0 ?  queryResult.items[0] : new ReportService.QueryResultItemInstance;

    const handleInit = (responseFull: any) => {
        
        const initFormResponse: ReportService.InitResult = responseFull.data;

        if (!initFormResponse.success) {
            return;
        }
        const newInitalValues = ReportService.buildQueryRequest(initFormResponse);

        setInitialValues({ ...newInitalValues });
        setQuery({ ...newInitalValues });
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

    const onRowSelect = (index: number) => {
    }

    const onRowUnselect = (index: number) => {
    }

    const onSelectAll = () => {
    }

    const onUnselectAll = () => {
    }

    const onNavigateTo = (url: string) => {
        goTo(url);
    }

    const onSort = (columnName: string) => {
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
        ReportService.initPage(landCode)
            .then(response => handleInit(response));
    });

    useEffect(() => {
        ReportService.submitRequest(query, landCode)
            .then(response => handleQueryResults(response));
    }, [query]);


    const onDashboard = () => {
        goTo("/tac-farm-dashboard")
    }

    const goTo = (url: any) => {
        navigate(url);
    };

    return (

        <div className="plants-container" data-testid="reportConnectedPlantUserDetails">
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item onClick={() => goTo('/')}>Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item onClick={() => goTo('/land-plant-list')}>
                        Plants
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Details
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Plant Detail</h1>
            <h6>Details of a plant</h6>
            <div className="plants-list-button-header">
                <Button onClick={() => goTo('/land-plant-list')} className='primary-button' data-testid="plant-btn" type="submit">
                    Plants
                </Button>
            </div>  
            <ReportDetailThreeColPlantUserDetails 
                item= {displayItem}
                name="reportConnectedPlantUserDetails-table" 
                onNavigateTo={onNavigateTo} 
            /> 
        </div>
    );
};
export default ReportConnectedPlantUserDetails;
