/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const LandUserPlantMultiSelectToEditableSubmitRequest = (data:LandUserPlantMultiSelectToEditableRequest, landCode:string) => { 
    return apiCall({
      url: "/land-user-plant-multi-select-to-editable/" + landCode,
      method: "post",
      data
    });
  }; 

export interface LandUserPlantMultiSelectToEditableRequest {
    plantCodeListCsv:string
}
export interface ResponseFull {
    data: SubmitResult;
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


export class SubmitRequestInstance implements LandUserPlantMultiSelectToEditableRequest {

    plantCodeListCsv:string 

    constructor() {  // create a new instance of the class
 
        this.plantCodeListCsv = '' 
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



 