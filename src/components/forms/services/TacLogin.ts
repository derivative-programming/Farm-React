import * as Yup from "yup";
import { apiCall } from "../../../apiConfig/apiCall";

export const initForm = (tacCode:string) => {
    const data ={};
    return apiCall({
        url: '/tac-login/' + tacCode,
        method: "put", 
        data
    });
}; 

export const submitForm = (data: SubmitRequest) => {
    return apiCall({
        url: '/tac-login',
        method: "post",
        data,
    });
};

export const getValidationErrors =  (propertyName: string, response:SubmitResult) => {
    let result: string[] = [];
    if (
        response &&
        response.validationErrors &&
        response.validationErrors.length
    ) { 
        response.validationErrors.forEach(
            (validationError: SubmitValidationError) => {
                if(validationError.property.toLowerCase() == propertyName.toLowerCase()){
                    result.push(validationError.message);
                }
            }
        );  
    }
    return result;
}

export const buildSubmitRequest = (initResult:InitResult) => {
    let result:SubmitRequest = new SubmitRequestInstance;
    
    result.email = initResult.email;
    result.password = initResult.password;
    
    return result;
}

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        .required('Please enter a Email')
        ,
        password: Yup.string()
        .required('Please enter a Password')
        , 
      });
      
    return validationSchema;
}

export interface SubmitRequest {
 
    email: string;
 
    password: string;
}

export interface SubmitResult {
 
    customerCode: string;
 
    email: string;
 
    userCodeValue: string;
 
    uTCOffsetInMinutes: number;
 
    roleNameCSVList: string;
 
    apiKey: string;
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}


export class SubmitRequestInstance implements SubmitRequest {
 
    email: string;
 
    password: string;

    constructor() {
 
        this.email = '';
 
        this.password = '';
    }
}


export class SubmitResultInstance implements SubmitResult {
 
    customerCode: string;
 
    email: string;
 
    userCodeValue: string;
 
    uTCOffsetInMinutes: number;
 
    roleNameCSVList: string;
 
    apiKey: string;
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {
 
        this.customerCode = '00000000-0000-0000-0000-000000000000';
 
        this.email = '';
 
        this.userCodeValue = '00000000-0000-0000-0000-000000000000';
 
        this.uTCOffsetInMinutes = 0;
 
        this.roleNameCSVList = '';
 
        this.apiKey = '';
        this.success = false;
        this.message = '';
        this.validationErrors = [];
    }
}



export class SubmitValidationErrorInstance implements SubmitValidationError {
    property: string;
    message: string;

    constructor() {
        this.property = '';
        this.message = '';
    }
}





export interface InitRequest {
    
}

export interface InitResult {
 
    email: string;
 
    password: string;
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
 
    email: string;
 
    password: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.email = '';
 
        this.password = '';
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


 