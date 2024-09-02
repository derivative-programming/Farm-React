/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const PlantUserDeleteSubmitRequest = (data:PlantUserDeleteRequest, plantCode:string) => {
    return apiCall({
      url: "/plant-user-delete/" + plantCode,
      method: "post",
      data
    });
  };

  export const buildPlantUserDeleteRequest = () => {
    const result:PlantUserDeleteRequest = new SubmitRequestInstance();

      return result;
  }

export interface PlantUserDeleteRequest {

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

export class SubmitRequestInstance implements PlantUserDeleteRequest {

    constructor() {  // create a new instance of the class

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

