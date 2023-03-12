import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const LandUserPlantMultiSelectToEditableSubmitRequest = (data:any, landCode:string) => { 
    return apiCall({
      url: "/land-user-plant-multi-select-to-editable/" + landCode,
      method: "post",
      data
    });
  }; 

export interface SubmitRequest {
    plantCodeListCsv:string
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

    plantCodeListCsv:string 

    constructor() {
        
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



 