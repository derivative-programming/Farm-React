
  import { apiCall } from "../../../apiConfig/apiCall";
    
  export const submitRequest = () => {
    return apiCall({
      url: '/pac-user-role-list/00000000-0000-0000-0000-000000000000?pageNumber=1&itemCountPerPage=100&orderByColumnName=roleDisplayOrder&orderByDescending=false',
      method: "get"
    });
  };


export interface QueryResultItem {
 
    roleCode: string;
 
    roleDescription: string;
 
    roleDisplayOrder: number;
 
    roleIsActive: boolean;
 
    roleLookupEnumName: string;
 
    roleName: string;
 
    pacName: string;  
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
 
    roleCode: string;
 
    roleDescription: string;
 
    roleDisplayOrder: number;
 
    roleIsActive: boolean;
 
    roleLookupEnumName: string;
 
    roleName: string;
 
    pacName: string;

    constructor() {
 
        this.roleCode = '00000000-0000-0000-0000-000000000000';
 
        this.roleDescription = '';
 
        this.roleDisplayOrder = 0;
 
        this.roleIsActive = false;
 
        this.roleLookupEnumName = '';
 
        this.roleName = '';
 
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
