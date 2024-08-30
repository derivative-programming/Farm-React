/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from "yup";
import * as ReportInit  from "./init/PacUserFlavorListInitReport";
import { apiCall } from "../../../apiConfig/apiCall";

export const submitRequest = (data:QueryRequest, pacCode:string) => {
    return apiCall({
      url:  "/pac-user-flavor-list/" + pacCode,
      method: "get",
      params: data
    });
  };

export const submitCSVRequest = (data:QueryRequest, pacCode:string) => {
  console.log('csv request');
    return apiCall({
      url:  "/pac-user-flavor-list/" + pacCode + "/to-csv",
      method: "get",
      params: data
    });
  };

  export const initPage = (pacCode:string) => {
    const data = {};
    return apiCall({
      url: "/pac-user-flavor-list/" + pacCode + '/init',
      method: "get",
      data
    });
  };

export const buildQueryRequest = (initResult:ReportInit.InitResult) => {
  const result:QueryRequest = new QueryRequestInstance();

    return result;
}

export const buildValidationSchema = () => {

//endset
    const validationSchema  = Yup.object().shape({

      });
//endset

    return validationSchema;
}

export interface QueryResultItem {
    flavorCode: string;
    flavorDescription: string;
    flavorDisplayOrder: number;
    flavorIsActive: boolean;
    flavorLookupEnumName: string;
    flavorName: string;
    pacName: string;
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

export class QueryResultItemInstance implements QueryResultItem {
    flavorCode: string;
    flavorDescription: string;
    flavorDisplayOrder: number;
    flavorIsActive: boolean;
    flavorLookupEnumName: string;
    flavorName: string;
    pacName: string;
    constructor() {
//endset
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
        this.flavorDescription = '';
        this.flavorDisplayOrder = 0;
        this.flavorIsActive = false;
        this.flavorLookupEnumName = '';
        this.flavorName = '';
        this.pacName = '';
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

