/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const PlantUserPropertyRandomUpdateSubmitRequest = (data:PlantUserPropertyRandomUpdateRequest, plantCode:string) => {
    return apiCall({
      url: "/plant-user-property-random-update/" + plantCode,
      method: "post",
      data
    });
  };

  export const buildPlantUserPropertyRandomUpdateRequest = () => {
    const result:PlantUserPropertyRandomUpdateRequest = new SubmitRequestInstance();

      return result;
  }

export interface PlantUserPropertyRandomUpdateRequest {

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

export class SubmitRequestInstance implements PlantUserPropertyRandomUpdateRequest {

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

