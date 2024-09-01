/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from "yup";
import * as ReportInit  from "./init/PlantUserDetailsInitReport";
import { apiCall } from "../../../apiConfig/apiCall";

export const submitRequest = (data:QueryRequest, plantCode:string) => {
    return apiCall({
      url:  "/plant-user-details/" + plantCode,
      method: "get",
      params: data
    });
  };

export const submitCSVRequest = (data:QueryRequest, plantCode:string) => {
  console.log('csv request');
    return apiCall({
      url:  "/plant-user-details/" + plantCode + "/to-csv",
      method: "get",
      params: data
    });
  };

  export const initPage = (plantCode:string) => {
    const data = {};
    return apiCall({
      url: "/plant-user-details/" + plantCode + '/init',
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
    flavorName: string;
    isDeleteAllowed: boolean;
    isEditAllowed: boolean;
    otherFlavor: string;
    someBigIntVal: number;
    someBitVal: boolean;
    someDateVal: string;
    someDecimalVal: number;
    someEmailAddress: string;
    someFloatVal: number;
    someIntVal: number;
    someMoneyVal: number;
    someNVarCharVal: string;
    somePhoneNumber: string;
    someTextVal: string;
    someUniqueidentifierVal: string;
    someUTCDateTimeVal: string;
    someVarCharVal: string;
    phoneNumConditionalOnIsEditable: string;
    nVarCharAsUrl: string;
    updateButtonTextLinkPlantCode: string;
    randomPropertyUpdatesLinkPlantCode: string;
    backToDashboardLinkTacCode: string;
    testFileDownloadLinkPacCode: string;
    testConditionalAsyncFileDownloadLinkPacCode: string;
    testAsyncFlowReqLinkPacCode: string;
    testConditionalAsyncFlowReqLinkPacCode: string;
    conditionalBtnExampleLinkTacCode: string;
    someImageUrlVal: string;
    isImageUrlAvailable: boolean;
    someConditionalImageUrlVal: string;
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
    flavorName: string;
    isDeleteAllowed: boolean;
    isEditAllowed: boolean;
    otherFlavor: string;
    someBigIntVal: number;
    someBitVal: boolean;
    someDateVal: string;
    someDecimalVal: number;
    someEmailAddress: string;
    someFloatVal: number;
    someIntVal: number;
    someMoneyVal: number;
    someNVarCharVal: string;
    somePhoneNumber: string;
    someTextVal: string;
    someUniqueidentifierVal: string;
    someUTCDateTimeVal: string;
    someVarCharVal: string;
    phoneNumConditionalOnIsEditable: string;
    nVarCharAsUrl: string;
    updateButtonTextLinkPlantCode: string;
    randomPropertyUpdatesLinkPlantCode: string;
    backToDashboardLinkTacCode: string;
    testFileDownloadLinkPacCode: string;
    testConditionalAsyncFileDownloadLinkPacCode: string;
    testAsyncFlowReqLinkPacCode: string;
    testConditionalAsyncFlowReqLinkPacCode: string;
    conditionalBtnExampleLinkTacCode: string;
    someImageUrlVal: string;
    isImageUrlAvailable: boolean;
    someConditionalImageUrlVal: string;
    constructor() {
        this.flavorName = '';
        this.isDeleteAllowed = false;
        this.isEditAllowed = false;
        this.otherFlavor = '';
        this.someBigIntVal = 0;
        this.someBitVal = false;
        this.someDateVal = '1753-01-01T00:00:00Z';
        this.someDecimalVal = 0;
        this.someEmailAddress = '';
        this.someFloatVal = 0;
        this.someIntVal = 0;
        this.someMoneyVal = 0.0;
        this.someNVarCharVal = '';
        this.somePhoneNumber = '';
        this.someTextVal = '';
//endset
        this.someUniqueidentifierVal = '00000000-0000-0000-0000-000000000000';
        this.someUTCDateTimeVal = '1753-01-01T00:00:00Z'
        this.someVarCharVal = '';
        this.phoneNumConditionalOnIsEditable = '';
        this.nVarCharAsUrl = '';
        this.updateButtonTextLinkPlantCode = '00000000-0000-0000-0000-000000000000';
        this.randomPropertyUpdatesLinkPlantCode = '00000000-0000-0000-0000-000000000000';
        this.backToDashboardLinkTacCode = '00000000-0000-0000-0000-000000000000';
        this.testFileDownloadLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testConditionalAsyncFileDownloadLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testAsyncFlowReqLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testConditionalAsyncFlowReqLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.conditionalBtnExampleLinkTacCode = '00000000-0000-0000-0000-000000000000';
        this.someImageUrlVal = '';
        this.isImageUrlAvailable = false;
        this.someConditionalImageUrlVal = '';
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

