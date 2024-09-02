/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const CustomerBuildTempApiKeySubmitRequest = (data:CustomerBuildTempApiKeyRequest, customerCode:string) => {
    return apiCall({
      url: "/customer-build-temp-api-key/" + customerCode,
      method: "post",
      data
    });
  };

  export const buildCustomerBuildTempApiKeyRequest = () => {
    const result:CustomerBuildTempApiKeyRequest = new SubmitRequestInstance();

      return result;
  }

export interface CustomerBuildTempApiKeyRequest {

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

export class SubmitRequestInstance implements CustomerBuildTempApiKeyRequest {

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

