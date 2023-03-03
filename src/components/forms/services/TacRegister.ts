import * as Yup from "yup";
import { apiCall } from "../../../apiConfig/apiCall";
 

export const initForm = () => {
    const data ={};
    return apiCall({
        url: '/tac-register',
        method: "put",
        data
    });
}; 

export const submitForm = (data:SubmitRequest) => {
    return apiCall({
        url: '/tac-register',
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
    result.confirmPassword = initResult.confirmPassword;
    result.firstName = initResult.firstName;
    result.lastName = initResult.lastName;
    
    return result;
}

export const buildValidationSchema = () => {
    
    const validationSchema  = Yup.object().shape({
        email: Yup.string()
        .required()
        ,
        password: Yup.string()
        .required()
        , 
        confirmPassword: Yup.string()
        .required()
        , 
        firstName: Yup.string()
        .required()
        , 
        lastName: Yup.string()
        .required()
        , 
      });
      
    return validationSchema;
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





export interface InitRequest {
    
}

export interface InitResult {
 
    email: string;
 
    password: string;
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;
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
 
    confirmPassword: string;
 
    firstName: string;
 
    lastName: string;
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.email = '';
 
        this.password = '';
 
        this.confirmPassword = '';
 
        this.firstName = '';
 
        this.lastName = '';
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


 