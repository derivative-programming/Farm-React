import * as FormInit  from "./init/TacRegisterInitObjWF"; 
import { apiCall } from "../../../apiConfig/apiCall";
 

export const initForm = (tacCode:string) => {
    const data ={};
    return apiCall({
        url: '/tac-register/' + tacCode + '/init',
        method: "get",
        data
    });
}; 

export const submitForm = (data:SubmitRequest,tacCode:string) => {
    return apiCall({
        url: '/tac-register/' + tacCode,
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
                if(validationError.property.toLowerCase() === propertyName.toLowerCase()){
                    result.push(validationError.message);
                }
            }
        );  
    }
    return result;
}

export const buildSubmitRequest = (initResult:FormInit.InitResult) => {
    let result:SubmitRequest = new SubmitRequestInstance();
    
    result.email = initResult.email;
    result.password = initResult.password;
    result.confirmPassword = initResult.confirmPassword;
    result.firstName = initResult.firstName;
    result.lastName = initResult.lastName;
    
    return result;
}
 
export interface SubmitRequest {
 
    email: string;
 
    password: string;
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;
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
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;

    constructor() {
 
        this.email = '';
 
        this.password = '';
 
        this.confirmPassword = '';
 
        this.firstName = '';
 
        this.lastName = '';
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


