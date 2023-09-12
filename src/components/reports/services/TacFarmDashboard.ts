import { apiCall } from "../../../apiConfig/apiCall";
import * as Yup from "yup";
import * as ReportInit  from "./init/TacFarmDashboardInitReport";
    
   
    export const submitRequest = (data:any,tacCode:string) => {
    return apiCall({
      url: '/tac-farm-dashboard/' + tacCode,
      method: "get",
      params: data
    });
  };
  
  
  export const initPage = (tacCode:string) => {
    const data = {};
    return apiCall({
      url: '/tac-farm-dashboard/' + tacCode + '/init',
      method: "get",
      data
    });
  }; 

  
export const buildQueryRequest = (initResult:ReportInit.InitResult) => {
    let result:QueryRequest = new QueryRequestInstance();
     
    return result;
}

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({ 
      });
      
    return validationSchema;
}

export interface QueryResultItem {
 
    fieldOnePlantListLinkLandCode: string;  
    conditionalBtnExampleLinkLandCode: string;  
    isConditionalBtnAvailable: boolean;  
}


export interface QueryRequest {
    
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
 





export interface InitRequest {
    
}

export interface InitResult {
 
    customerCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}
 

export class InitResultInstance implements InitResult {
 
    customerCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.customerCode = '00000000-0000-0000-0000-000000000000';
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
 
    fieldOnePlantListLinkLandCode: string;
    conditionalBtnExampleLinkLandCode: string;
    isConditionalBtnAvailable: boolean;

    constructor() {
 
        this.fieldOnePlantListLinkLandCode = '00000000-0000-0000-0000-000000000000'; 
        this.conditionalBtnExampleLinkLandCode = '00000000-0000-0000-0000-000000000000';  
        this.isConditionalBtnAvailable = false;   
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

        this.items.push(new QueryResultItemInstance())
    }
}
