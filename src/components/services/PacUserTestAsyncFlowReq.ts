/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-empty-function */
import { apiCall } from "../../apiConfig/apiCall";

  export const PacUserTestAsyncFlowReqSubmitRequest = (data:PacUserTestAsyncFlowReqRequest, pacCode:string) => {
    return apiCall({
      url: "/pac-user-test-async-flow-req/" + pacCode,
      method: "post",
      data
    });
  };

  export const buildPacUserTestAsyncFlowReqRequest = () => {
    const result:PacUserTestAsyncFlowReqRequest = new SubmitRequestInstance();

      return result;
  }

export interface PacUserTestAsyncFlowReqRequest {

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

export class SubmitRequestInstance implements PacUserTestAsyncFlowReqRequest {

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

