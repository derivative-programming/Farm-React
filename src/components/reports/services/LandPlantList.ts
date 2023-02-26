import * as Yup from "yup";
import * as ReportInit  from "./LandPlantListInitReport";

import {  
    LAND_PLANT_LIST, 
  } from "../../../apiConfig/apiEndpoints";
  import { apiCall } from "../../../apiConfig/apiCall"; 
   
export const submitRequest = (data:any, landCode:string) => {
    return apiCall({
      url: LAND_PLANT_LIST + "/" + landCode,
      method: "get",
      params: data
    });     
  }; 
  
  export const initPage = (landCode:string) => {
    const data = {};
    return apiCall({
      url: LAND_PLANT_LIST + "/" + landCode,
      method: "put",
      data
    });
  };

  
export const buildQueryRequest = (initResult:ReportInit.InitResult) => {
    let result:QueryRequest = new QueryRequestInstance;
    
    result.flavorCode = initResult.flavorCode; 
    result.someIntVal = initResult.someIntVal;
    result.someBigIntVal = initResult.someBigIntVal;
    result.someBitVal = initResult.someBitVal;
    result.isEditAllowed = initResult.isEditAllowed;
    result.isDeleteAllowed = initResult.isDeleteAllowed;
    result.someFloatVal = initResult.someFloatVal;
    result.someDecimalVal = initResult.someDecimalVal;
    result.someMinUTCDateTimeVal = initResult.someMinUTCDateTimeVal;
    result.someMinDateVal = initResult.someMinDateVal;
    result.someMoneyVal = initResult.someMoneyVal;
    result.someNVarCharVal = initResult.someNVarCharVal;
    result.someVarCharVal = initResult.someVarCharVal;
    result.someTextVal = initResult.someTextVal;
    result.somePhoneNumber = initResult.somePhoneNumber;
    result.someEmailAddress = initResult.someEmailAddress; 
    
    return result;
}

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({
        flavorCode: Yup.string()
        ,
        someIntVal: Yup.number().required()
        ,
        someBigIntVal: Yup.number().required()
        ,
        someBitVal: Yup.boolean().required()
        ,
        isEditAllowed: Yup.boolean().required()
        ,
        isDeleteAllowed: Yup.boolean().required()
        ,
        someFloatVal: Yup.number().required()
        ,
        someDecimalVal: Yup.number().required()
        ,
        someMinUTCDateTimeVal: Yup.mixed().required()
        ,
        someMinDateVal: Yup.mixed().required()
        ,
        someMoneyVal: Yup.number().required()
        ,
        someNVarCharVal: Yup.string()
        ,
        someVarCharVal: Yup.string()
        ,
        someTextVal: Yup.string()
        ,
        somePhoneNumber: Yup.string()
        ,
        someEmailAddress: Yup.string()
        ,  
      });
      
    return validationSchema;
}
 
export interface QueryResultItem {
 
    plantCode: string;
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    flavorName: string;
 
    flavorCode: string;

    someIntConditionalOnDeletable:number;
 
    updateLinkPlantCode: string;
 
    deleteAsyncButtonLinkPlantCode: string;
 
    detailsLinkPlantCode: string;  
}

export interface QueryRequest {
 
    someIntVal: number;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someMinUTCDateTimeVal: string;
 
    someMinDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    flavorCode: string;
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;
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
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    isEditAllowed: boolean;
 
    isDeleteAllowed: boolean;
 
    someFloatVal: number;
 
    someDecimalVal: number;
 
    someUTCDateTimeVal: string;
 
    someDateVal: string;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    someVarCharVal: string;
 
    someTextVal: string;
 
    somePhoneNumber: string;
 
    someEmailAddress: string;
 
    flavorName: string;
 
    flavorCode: string;
 
    someIntConditionalOnDeletable: number;
 
    updateLinkPlantCode: string;
 
    deleteAsyncButtonLinkPlantCode: string;
 
    detailsLinkPlantCode: string;

    constructor() {
 
        this.plantCode = '00000000-0000-0000-0000-000000000000';
 
        this.someIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someUTCDateTimeVal = '01-01-1753 00:00:00'
 
        this.someDateVal = '01-01-1753 00:00:00';
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
 
        this.flavorName = '';
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';

        this.someIntConditionalOnDeletable = 0;
 
        this.updateLinkPlantCode = '00000000-0000-0000-0000-000000000000';
 
        this.deleteAsyncButtonLinkPlantCode = '00000000-0000-0000-0000-000000000000';
 
        this.detailsLinkPlantCode = '00000000-0000-0000-0000-000000000000';  
    }
}


export class QueryRequestInstance implements QueryRequest {
 
    someIntVal: number; 
 
    someBigIntVal: number; 
 
    someBitVal: boolean; 
 
    isEditAllowed: boolean; 
 
    isDeleteAllowed: boolean; 
 
    someFloatVal: number; 
 
    someDecimalVal: number; 
 
    someMinUTCDateTimeVal: string; 
 
    someMinDateVal: string; 
 
    someMoneyVal: number; 
 
    someNVarCharVal: string; 
 
    someVarCharVal: string; 
 
    someTextVal: string; 
 
    somePhoneNumber: string; 
 
    someEmailAddress: string; 
 
    flavorCode: string;   
    pageNumber: number;
    ItemCountPerPage: number;
    OrderByColumnName: string;
    OrderByDescending: boolean;
    ForceErrorMessage: string;

    constructor() {
 
        this.someIntVal = 0;
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.isEditAllowed = false;
 
        this.isDeleteAllowed = false;
 
        this.someFloatVal = 0;
 
        this.someDecimalVal = 0;
 
        this.someMinUTCDateTimeVal = '01-01-1753 00:00:00'
 
        this.someMinDateVal = '01-01-1753 00:00:00';
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.someVarCharVal = '';
 
        this.someTextVal = '';
 
        this.somePhoneNumber = '';
 
        this.someEmailAddress = '';
 
        this.flavorCode = '00000000-0000-0000-0000-000000000000';
        this.pageNumber = 1;
        this.ItemCountPerPage = 10;
        this.OrderByColumnName = '';
        this.OrderByDescending = false;;
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

        this.items.push(new QueryResultItemInstance)
    }
}

