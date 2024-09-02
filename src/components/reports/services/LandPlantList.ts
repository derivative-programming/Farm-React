/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from "yup";
import * as ReportInit  from "./init/LandPlantListInitReport"; 
import { apiCall } from "../../../apiConfig/apiCall"; 
   
export const submitRequest = (data:QueryRequest, landCode:string) => {
    return apiCall({
      url:  "/land-plant-list/" + landCode,
      method: "get",
      params: data
    });     
  }; 
  
export const submitCSVRequest = (data:QueryRequest, landCode:string) => {
  console.log('csv request');
    return apiCall({
      url:  "/land-plant-list/" + landCode + "/to-csv",
      method: "get",
      params: data
    });     
  }; 
  
  export const initPage = (landCode:string) => {
    const data = {};
    return apiCall({
      url: "/land-plant-list/" + landCode + '/init',
      method: "get",
      data
    });
  };

  
export const buildQueryRequest = (initResult:ReportInit.InitResult) => {
  const result:QueryRequest = new QueryRequestInstance();
    
//endset
    result.flavorFilterCode = initResult.flavorFilterCode; 
    result.someFilterIntVal = initResult.someFilterIntVal;
    result.someFilterBigIntVal = initResult.someFilterBigIntVal;
    result.someFilterBitVal = initResult.someFilterBitVal;
    result.isFilterEditAllowed = initResult.isFilterEditAllowed;
    result.isFilterDeleteAllowed = initResult.isFilterDeleteAllowed;
    result.someFilterFloatVal = initResult.someFilterFloatVal;
    result.someFilterDecimalVal = initResult.someFilterDecimalVal;
    result.someMinUTCDateTimeVal = initResult.someMinUTCDateTimeVal;
    result.someMinDateVal = initResult.someMinDateVal;
    result.someFilterMoneyVal = initResult.someFilterMoneyVal;
    result.someFilterNVarCharVal = initResult.someFilterNVarCharVal;
    result.someFilterVarCharVal = initResult.someFilterVarCharVal;
    result.someFilterTextVal = initResult.someFilterTextVal;
    result.someFilterPhoneNumber = initResult.someFilterPhoneNumber;
    result.someFilterEmailAddress = initResult.someFilterEmailAddress; 
    result.someFilterUniqueIdentifier = initResult.someFilterUniqueIdentifier; 
//endset
    
    return result;
}

export const buildValidationSchema = () => {
    
//endset
    const validationSchema  = Yup.object().shape({
        flavorFilterCode: Yup.string()
        ,
        someFilterIntVal: Yup.number().required('Please enter a Some Int Val')
        ,
        someFilterBigIntVal: Yup.number().required('Please enter a Some Big Int Val')
        ,
        someFilterBitVal: Yup.boolean().required('Please enter a Some Bit Val')
        ,
        isFilterEditAllowed: Yup.boolean().required('Please enter a Is Edit Allowed')
        ,
        isFilterDeleteAllowed: Yup.boolean().required('Please enter a Is Delete Allowed')
        ,
        someFilterFloatVal: Yup.number().required('Please enter a Some Float Val')
        ,
        someFilterDecimalVal: Yup.number().required('Please enter a Some Decimal Val')
        ,
        someMinUTCDateTimeVal: Yup.mixed().required('Please enter a Some Min UTC Date Time Val')
        ,
        someMinDateVal: Yup.mixed().required('Please enter a Some Min Date Val')
        ,
        someFilterMoneyVal: Yup.number().required('Please enter a Some Money Val')
        ,
        someFilterNVarCharVal: Yup.string()
        ,
        someFilterVarCharVal: Yup.string()
        ,
        someFilterTextVal: Yup.string()
        ,
        someFilterPhoneNumber: Yup.string()
        ,
        someFilterEmailAddress: Yup.string()
        ,
        someFilterUniqueIdentifier: Yup.string()
        ,  
      });
//endset
      
    return validationSchema;
}
 
export interface QueryResultItem {
 
    plantCode: string;
 
    someIntVal: number;
 
    someConditionalIntVal: number;
 
    someBigIntVal: number;
 
    someConditionalBigIntVal: number;
 
    someBitVal: boolean;
 
    someConditionalBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someConditionalFloatVal: number;
 
    someDecimalVal: number;
 
    someConditionalDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someConditionalUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someConditionalDateVal: string;
 
    someMoneyVal: number;
 
    someConditionalMoneyVal: number;
 
    someNVarCharVal: string;
 
    someConditionalNVarCharVal: string;
 
    someVarCharVal: string;
 
    someConditionalVarCharVal: string;
 
    someTextVal: string;
 
    someConditionalTextVal: string;
 
    somePhoneNumber: string;
 
    someConditionalPhoneNumber: string;
 
    someEmailAddress: string;
 
    someConditionalEmailAddress: string;
 
    isImageUrlAvailable: boolean;
 
    someImageUrlVal: string;
 
    someConditionalImageUrl: string;
 
    flavorName: string;
 
    flavorCode: string;

    someIntConditionalOnDeletable:number; 
 
    nVarCharAsUrl: string;
 
    nVarCharConditionalAsUrl: string;
 
    updateLinkPlantCode: string;
 
    deleteAsyncButtonLinkPlantCode: string;
 
    detailsLinkPlantCode: string;  
    testFileDownloadLinkPacCode: string;
    testConditionalFileDownloadLinkPacCode: string;
    testAsyncFlowReqLinkPacCode: string;
    testConditionalAsyncFlowReqLinkPacCode: string;
    conditionalBtnExampleLinkPlantCode: string;
} 

export interface QueryRequest {
 
//endset
    someFilterIntVal: number;
 
    someFilterBigIntVal: number;
 
    someFilterBitVal: boolean;
 
    isFilterEditAllowed: boolean;
 
    isFilterDeleteAllowed: boolean;
 
    someFilterFloatVal: number;
 
    someFilterDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someFilterMoneyVal: number;
 
    someFilterNVarCharVal: string;
 
    someFilterVarCharVal: string;
 
    someFilterTextVal: string;
 
    someFilterPhoneNumber: string;
 
    someFilterEmailAddress: string;
 
    someFilterUniqueIdentifier: string;
 
    flavorFilterCode: string;
//endset
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
 
    plantCode: string;
 
    someIntVal: number;
 
    someConditionalIntVal: number;
 
    someBigIntVal: number;
 
    someConditionalBigIntVal: number;
 
    someBitVal: boolean;
 
    someConditionalBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someConditionalFloatVal: number;
 
    someDecimalVal: number;
 
    someConditionalDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someConditionalUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someConditionalDateVal: string;
 
    someMoneyVal: number;
 
    someConditionalMoneyVal: number;
 
    someNVarCharVal: string;
 
    someConditionalNVarCharVal: string;
 
    someVarCharVal: string;
 
    someConditionalVarCharVal: string;
 
    someTextVal: string;
 
    someConditionalTextVal: string;
 
    somePhoneNumber: string;
 
    someConditionalPhoneNumber: string;
 
    someEmailAddress: string;
 
    someConditionalEmailAddress: string;
 
    isImageUrlAvailable: boolean;
 
    someImageUrlVal: string;
 
    someConditionalImageUrl: string;
 
    flavorName: string;
 
    flavorCode: string;

    someIntConditionalOnDeletable:number; 
 
    nVarCharAsUrl: string;
 
    nVarCharConditionalAsUrl: string;
 
    updateLinkPlantCode: string;
 
    deleteAsyncButtonLinkPlantCode: string;
 
    detailsLinkPlantCode: string;
    testFileDownloadLinkPacCode: string;
    testConditionalFileDownloadLinkPacCode: string;
    testAsyncFlowReqLinkPacCode: string;
    testConditionalAsyncFlowReqLinkPacCode: string;
    conditionalBtnExampleLinkPlantCode: string;

    constructor() {
 
//endset
        this.plantCode = '00000000-0000-0000-0000-000000000000';
 
        this.someIntVal = 0;
 
        this.someConditionalIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someConditionalBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.someConditionalBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someConditionalFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someConditionalDecimalVal = 0;
 
        this.someUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.someConditionalUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.someDateVal = '1753-01-01T00:00:00Z';
 
        this.someConditionalDateVal = '1753-01-01T00:00:00Z';
 
        this.someMoneyVal = 0.0;
 
        this.someConditionalMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someConditionalNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someConditionalVarCharVal = '';
 
        this.someTextVal = '';
 
        this.someConditionalTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someConditionalPhoneNumber = '';
 
        this.someEmailAddress = '';
 
        this.someConditionalEmailAddress = '';
 
        this.isImageUrlAvailable = false;
 
        this.someImageUrlVal = '';
 
        this.someConditionalImageUrl = '';
 
        this.flavorName = '';
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';

        this.someIntConditionalOnDeletable = 0;
 
        this.nVarCharAsUrl = '';
 
        this.nVarCharConditionalAsUrl = '';
 
        this.updateLinkPlantCode = '00000000-0000-0000-0000-000000000000';
 
        this.deleteAsyncButtonLinkPlantCode = '00000000-0000-0000-0000-000000000000';
 
        this.detailsLinkPlantCode = '00000000-0000-0000-0000-000000000000'; 
        this.testFileDownloadLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testConditionalFileDownloadLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testAsyncFlowReqLinkPacCode = '00000000-0000-0000-0000-000000000000';
        this.testConditionalAsyncFlowReqLinkPacCode = '00000000-0000-0000-0000-000000000000';  
        this.conditionalBtnExampleLinkPlantCode = '00000000-0000-0000-0000-000000000000';  
//endset
    }
}


export class QueryRequestInstance implements QueryRequest {
 
//endset
    someFilterIntVal: number; 
 
    someFilterBigIntVal: number; 
 
    someFilterBitVal: boolean; 
 
    isFilterEditAllowed: boolean; 
 
    isFilterDeleteAllowed: boolean; 
 
    someFilterFloatVal: number; 
 
    someFilterDecimalVal: number; 
 
    someMinUTCDateTimeVal: string; 
 
    someMinDateVal: string; 
 
    someFilterMoneyVal: number; 
 
    someFilterNVarCharVal: string; 
 
    someFilterVarCharVal: string; 
 
    someFilterTextVal: string; 
 
    someFilterPhoneNumber: string; 
 
    someFilterEmailAddress: string; 
 
    someFilterUniqueIdentifier: string; 
 
    flavorFilterCode: string;   
//endset
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {
 
//endset
        this.someFilterIntVal = 0;
 
        this.someFilterBigIntVal = 0;
 
        this.someFilterBitVal = false;
 
        this.isFilterEditAllowed = false;
 
        this.isFilterDeleteAllowed = false;
 
        this.someFilterFloatVal = 0;
 
        this.someFilterDecimalVal = 0;
 
        this.someMinUTCDateTimeVal = '1753-01-01T00:00:00Z'
 
        this.someMinDateVal = '1753-01-01T00:00:00Z';
 
        this.someFilterMoneyVal = 0.0;
 
        this.someFilterNVarCharVal = '';
 
        this.someFilterVarCharVal = '';
 
        this.someFilterTextVal = '';
 
        this.someFilterPhoneNumber = '';
 
        this.someFilterEmailAddress = '';
 
        this.someFilterUniqueIdentifier = '00000000-0000-0000-0000-000000000000';
 
        this.flavorFilterCode = '00000000-0000-0000-0000-000000000000';
//endset
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

