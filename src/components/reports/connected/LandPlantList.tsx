import React, { FC, ReactElement, useContext, useState, useEffect, useRef } from "react";
import { Button, Form, Card, Breadcrumb } from "react-bootstrap";
import "../../../App.scss";
import { useNavigate, useParams } from "react-router-dom"; 
import ReportFilterLandPlantList from "../filters/LandPlantList";
import { ReportGridLandPlantList } from "../visualization/grid/LandPlantList";
import * as ReportService from "../services/LandPlantList";
import { ReportPagination } from "../input-fields/Pagination";

const ReportConnectedLandPlantList: FC = (): ReactElement => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [queryResult, setQueryResult] = useState(new ReportService.QueryResultInstance);
    const [query, setQuery] = useState(new ReportService.QueryRequestInstance);
    const [initialValues, setInitialValues] = useState(new ReportService.QueryRequestInstance);
    const isInitializedRef = useRef(false);

    const navigate = useNavigate();
    const { id } = useParams();
    const landCode: string = id ?? "00000000-0000-0000-0000-000000000000";
    let navCodesAvailable: Record<string, string> = {}
    navCodesAvailable.landCode = landCode;

    const handleInit = (responseFull: any) => {
        console.log('init...');
        console.log(responseFull);
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
        console.log('query result...');
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

        <div className="plants-container" data-testid="reportConnectedLandPlantList">
            <div className="breadcrumb-container">
                <Breadcrumb>
                    <Breadcrumb.Item
                        onClick={() => goTo("tac-farm-dashboard")}>
                        Dashboard
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active href="">
                        Plants
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <h1>Plants</h1>
            <div className="plants-list-button-header">
                <Button
                    onClick={() => goTo("tac-farm-dashboard")}
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
                <Button className='primary-button mt-3' type="button">
                    Delete Selected
                </Button>
            </div>

            <ReportGridLandPlantList
                isSortDescending={queryResult.orderByDescending}
                items={queryResult.items}
                name="reportConnectedLandPlantList-table"
                onRowSelect={onRowSelect}
                onRowUnselect={onRowUnselect}
                onSelectAll={onSelectAll}
                onUnselectAll={onUnselectAll}
                onSort={onSort}
                onNavigateTo={onNavigateTo}
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
