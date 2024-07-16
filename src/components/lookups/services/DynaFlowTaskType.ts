/* eslint-disable @typescript-eslint/no-empty-interface */

  import { apiCall } from "../../../apiConfig/apiCall";

  export const submitRequest = ():Promise<ResponseFull> => {
    return apiCall({
      url: '/pac-user-dyna-flow-task-type-list/00000000-0000-0000-0000-000000000000?pageNumber=1&itemCountPerPage=100&orderByColumnName=dynaFlowTaskTypeDisplayOrder&orderByDescending=false',
      method: "get"
    });
  };

export interface QueryResultItem {

    dynaFlowTaskTypeCode: string;

    dynaFlowTaskTypeMaxRetryCount: number;

    dynaFlowTaskTypeDescription: string;

    dynaFlowTaskTypeDisplayOrder: number;

    dynaFlowTaskTypeIsActive: boolean;

    dynaFlowTaskTypeLookupEnumName: string;

    dynaFlowTaskTypeName: string;
}

export interface QueryRequest {

    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;
}

export interface ResponseFull {
    data: QueryResult;
}

export interface QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;
}

export interface InitRequest {

}

export interface InitResult {

    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitResultInstance implements InitResult {

    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {

        this.success = false;
        this.message = '';
        this.validationErrors =  [];
    }
}

export class InitValidationErrorInstance implements InitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}

export class QueryResultItemInstance implements QueryResultItem {

    dynaFlowTaskTypeCode: string;

    dynaFlowTaskTypeMaxRetryCount: number;

    dynaFlowTaskTypeDescription: string;

    dynaFlowTaskTypeDisplayOrder: number;

    dynaFlowTaskTypeIsActive: boolean;

    dynaFlowTaskTypeLookupEnumName: string;

    dynaFlowTaskTypeName: string;

    constructor() {

        this.dynaFlowTaskTypeCode = '00000000-0000-0000-0000-000000000000';

        this.dynaFlowTaskTypeMaxRetryCount = 0;

        this.dynaFlowTaskTypeDescription = '';

        this.dynaFlowTaskTypeDisplayOrder = 0;

        this.dynaFlowTaskTypeIsActive = false;

        this.dynaFlowTaskTypeLookupEnumName = '';

        this.dynaFlowTaskTypeName = '';
    }
}

export class QueryRequestInstance implements QueryRequest {

    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {

        this.pageNumber = 1;
        this.ItemCountPerPage = 10;
        this.OrderByColumnName = '';
        this.OrderByDescending = false;
        this.ForceErrorMessage = '';
    }
}

export class QueryResultInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';
    }
}

export class QueryResultTestInstance implements QueryResult {
    pageNumber: number;
    items: QueryResultItem[];
    itemCountPerPage: number;
    orderByColumnName: string;
    orderByDescending: boolean;
    success: boolean;
    recordsTotal: number;
    recordsFiltered: number;
    message: string;
    appVersion: string;
    request: string;

    constructor() {
        this.pageNumber = 1;
        this.items = [];
        this.itemCountPerPage = 10;
        this.orderByColumnName = '';
        this.orderByDescending = false;
        this.success = false;
        this.recordsTotal = 0;
        this.recordsFiltered = 0;
        this.message = '';
        this.appVersion = '';
        this.request = '';

        this.items.push(new QueryResultItemInstance())
    }
}

