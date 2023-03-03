import { apiCall } from "../../apiConfig/apiCall";
   
  
   
  
  export const PlantUserDeleteSubmitRequest = (data:any, plantCode:string) => { 
    return apiCall({
      url: "/plant-user-delete/" + plantCode,
      method: "post",
      data
    });
  };



export interface SubmitRequest {
    
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
    

    constructor() {
        
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


 