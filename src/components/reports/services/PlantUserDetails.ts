
import {  
    PLANT_USER_DETAILS, 
  } from "../../../apiConfig/apiEndpoints";
  import { apiCall } from "../../../apiConfig/apiCall";

export const submitRequest = (plantCode:string) => {
    return apiCall({
      url: PLANT_USER_DETAILS + "/" + plantCode,
      method: "get"
    });
  };
  
  
  export const initPage = (plantCode:string) => {
    return apiCall({
      url: PLANT_USER_DETAILS + "/" + plantCode,
      method: "put"
    });
  };

export interface QueryResultItem {
 
    flavorName: string;
 
    isDeleteAllowed: boolean;
 
    isEditAllowed: boolean;
 
    otherFlavor: string;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    someDateVal: Date;
 
    someDecimalVal: number;
 
    someEmailAddress: string;
 
    someFloatVal: number;
 
    someIntVal: number;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    somePhoneNumber: string;
 
    someTextVal: string;
 
    someUniqueidentifierVal: string;
 
    someUTCDateTimeVal: Date;
 
    someVarCharVal: string;  
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
 
    landCode: string;
 
    tacCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];
}

export interface InitValidationError {
    property: string;
    message: string;

}

export class InitRequestInstance implements InitRequest {
    

    constructor() {
        
    }
}


export class InitResultInstance implements InitResult {
 
    landCode: string;
 
    tacCode: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
 
        this.tacCode = '00000000-0000-0000-0000-000000000000';
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
 
    flavorName: string;
 
    isDeleteAllowed: boolean;
 
    isEditAllowed: boolean;
 
    otherFlavor: string;
 
    someBigIntVal: number;
 
    someBitVal: boolean;
 
    someDateVal: Date;
 
    someDecimalVal: number;
 
    someEmailAddress: string;
 
    someFloatVal: number;
 
    someIntVal: number;
 
    someMoneyVal: number;
 
    someNVarCharVal: string;
 
    somePhoneNumber: string;
 
    someTextVal: string;
 
    someUniqueidentifierVal: string;
 
    someUTCDateTimeVal: Date;
 
    someVarCharVal: string;

    constructor() {
 
        this.flavorName = '';
 
        this.isDeleteAllowed = false;
 
        this.isEditAllowed = false;
 
        this.otherFlavor = '';
 
        this.someBigIntVal = 0;
 
        this.someBitVal = false;
 
        this.someDateVal = new Date('01-01-1753 00:00:00');
 
        this.someDecimalVal = 0;
 
        this.someEmailAddress = '';
 
        this.someFloatVal = 0;
 
        this.someIntVal = 0;
 
        this.someMoneyVal = 0.0;
 
        this.someNVarCharVal = '';
 
        this.somePhoneNumber = '';
 
        this.someTextVal = '';
 
        this.someUniqueidentifierVal = '00000000-0000-0000-0000-000000000000';
 
        this.someUTCDateTimeVal = new Date('01-01-1753 00:00:00')
 
        this.someVarCharVal = '';  
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
