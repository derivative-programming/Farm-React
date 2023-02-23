import {  
    LAND_USER_PLANT_MULTI_SELECT_TO_EDITABLE, 
  } from "../../apiConfig/apiEndpoints";
import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const LandUserPlantMultiSelectToEditableSubmit = (data:any, landCode:string) => { 
    return apiCall({
      url: LAND_USER_PLANT_MULTI_SELECT_TO_EDITABLE + "/" + landCode,
      method: "post",
      data
    });
  }; 

export interface SubmitRequest {
    plantCodeListCSV:string
}

export interface SubmitResult {
    
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];
}

export interface SubmitValidationError {
    property: string;
    message: string;

}


export class SubmitRequestInstance implements SubmitRequest {

    plantCodeListCSV:string 

    constructor() {
        
        this.plantCodeListCSV = ''
    }
}


export class SubmitResultInstance implements SubmitResult {
    
    success: boolean;
    message: string;
    validationErrors: SubmitValidationError[];

    constructor() {
        
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
 
    landCode: string;
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
    success: boolean;
    message: string;
    validationErrors: InitValidationError[];

    constructor() {
 
        this.landCode = '00000000-0000-0000-0000-000000000000';
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


 