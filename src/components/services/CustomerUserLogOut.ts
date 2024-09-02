/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const CustomerUserLogOutSubmitRequest = (data:CustomerUserLogOutRequest, customerCode:string) => {
    return apiCall({
      url: "/customer-user-log-out/" + customerCode,
      method: "post",
      data
    });
  };

  export const buildCustomerUserLogOutRequest = () => {
    const result:CustomerUserLogOutRequest = new SubmitRequestInstance();

      return result;
  }

export interface CustomerUserLogOutRequest {

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

export class SubmitRequestInstance implements CustomerUserLogOutRequest {

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

