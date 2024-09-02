/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const ErrorLogConfigResolveErrorLogSubmitRequest = (data:ErrorLogConfigResolveErrorLogRequest, errorLogCode:string) => {
    return apiCall({
      url: "/error-log-config-resolve-error-log/" + errorLogCode,
      method: "post",
      data
    });
  };

  export const buildErrorLogConfigResolveErrorLogRequest = () => {
    const result:ErrorLogConfigResolveErrorLogRequest = new SubmitRequestInstance();

      return result;
  }

export interface ErrorLogConfigResolveErrorLogRequest {

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

export class SubmitRequestInstance implements ErrorLogConfigResolveErrorLogRequest {

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

