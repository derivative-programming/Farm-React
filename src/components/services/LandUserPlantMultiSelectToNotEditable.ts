import {  
    LAND_USER_PLANT_MULTI_SELECT_TO_NOT_EDITABLE, 
  } from "../../apiConfig/apiEndpoints";
import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const LandUserPlantMultiSelectToNotEditableSubmit = (data:any, landCode:string) => { 
    return apiCall({
      url: LAND_USER_PLANT_MULTI_SELECT_TO_NOT_EDITABLE + "/" + landCode,
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



 